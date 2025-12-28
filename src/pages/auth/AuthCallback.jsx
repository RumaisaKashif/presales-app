import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../api/supabaseClient';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const verify = async () => {
      const params = new URLSearchParams(window.location.search);
      const token_hash = params.get('token_hash');
      const type = params.get('type');

      if (!token_hash) {
        setError('Invalid authentication link');
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash,
        type: type || 'email',
      });

      if (error) {
        setError(error.message);
        return;
      }

      // Clean URL + redirect
      window.history.replaceState({}, document.title, '/presales/dashboard');
      navigate('/presales/dashboard', { replace: true });
    };

    verify();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
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
