import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../api/supabaseClient';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleAuth = async () => {
      // Supabase puts tokens in the URL hash (after #), not query params
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');

      // Also check query params as fallback (for email OTP verification)
      const queryParams = new URLSearchParams(window.location.search);
      const token_hash = queryParams.get('token_hash');
      const type = queryParams.get('type');

      // Method 1: Hash contains tokens (auto-verified by Supabase)
      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          setError(error.message);
          return;
        }

        navigate('/presales/dashboard', { replace: true });
        return;
      }

      // Method 2: Query params contain token_hash (needs verification)
      if (token_hash) {
        const { error } = await supabase.auth.verifyOtp({
          token_hash,
          type: type || 'email',
        });

        if (error) {
          setError(error.message);
          return;
        }

        navigate('/presales/dashboard', { replace: true });
        return;
      }

      // No tokens found - let Supabase handle it automatically
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        setError(sessionError.message);
        return;
      }

      if (session) {
        navigate('/presales/dashboard', { replace: true });
      } else {
        setError('Invalid or expired authentication link');
      }
    };

    handleAuth();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-red-600">{error}</p>
        <a href="/login" className="text-purple-600 hover:underline">
          Back to Login
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Verifying your login…</p>
    </div>
  );
};

export default AuthCallback;