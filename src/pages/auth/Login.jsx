// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
// import { useAuth } from '../../contexts/AuthContext';
// import AuthLayout from '../../components/layout/AuthLayout';
// import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const { values, errors, handleChange, handleSubmit } = useForm(
//     { email: '', password: '' },
//     {
//       email: {
//         presence: { allowEmpty: false, message: 'is required' },
//         email: true,
//       },
//       password: {
//         presence: { allowEmpty: false, message: 'is required' },
//       },
//     },
//     async (formValues) => {
//       try {
//         await login(formValues.email, formValues.password);
//         navigate('/presales/dashboard');
//       } catch (error) {
//         console.error('Login failed:', error);
//       }
//     }
//   );

//   return (
//     <AuthLayout title="Welcome Back!" subtitle="Please enter your credentials to log in.">
//       <form onSubmit={handleSubmit} noValidate>
//         <Input
//           label="Email"
//           name="email"
//           type="email"
//           value={values.email}
//           onChange={handleChange}
//           error={errors.email && errors.email[0]}
//         />
//         <Input
//           label="Password"
//           name="password"
//           type="password"
//           value={values.password}
//           onChange={handleChange}
//           error={errors.password && errors.password[0]}
//         />
//         <Button type="submit" fullWidth>Login</Button>
//       </form>
//       <p className="text-center text-gray-600 mt-4">
//         Don't have an account?{" "}
//         <Link to="/register" className="text-purple-600 hover:underline">
//           Sign up
//         </Link>
//       </p>
//     </AuthLayout>
//   );
// };

// export default Login;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from '../../components/layout/AuthLayout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email);
      setSent(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (sent) {
    return (
      <AuthLayout title="Check your email">
        <p>Magic link sent to {email}</p>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-600">{error}</p>}
        <Button type="submit">Send magic link</Button>
      </form>
      <Link to="/register">Create account</Link>
    </AuthLayout>
  );
};

export default Login;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
// import { useAuth } from '../../contexts/AuthContext';
// import AuthLayout from '../../components/layout/AuthLayout';
// import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';

// const Login = () => {
//   const { login } = useAuth();
//   // const navigate = useNavigate();
//   const [loginError, setLoginError] = useState(null);
//   const [emailSent, setEmailSent] = useState(false);
  
//   // useEffect(() => {
//   //   if (!loading && user) {
//   //     navigate('/presales/dashboard', { replace: true });
//   //   }
//   // }, [user, loading, navigate]);

//   const { values, errors, handleChange, handleSubmit } = useForm(
//     { email: ''},
//     {
//       email: {
//         presence: { allowEmpty: false, message: 'is required' },
//         email: true,
//       },
//     },
//     async (formValues) => {
//       try {
//         setLoginError(null);
//         await login(formValues.email);
//         setEmailSent(true);
//         // navigate('/presales/dashboard', { replace: true });
//       } catch (error) {
//         setLoginError(error.message);
//         console.error('Login failed:', error);
//       }
//     }
//   );

//   const handleInputChange = (e) => {
//     setLoginError(null);
//     handleChange(e);
//   };

//   if (emailSent) {
//     return (
//       <AuthLayout title="Check Your Email" subtitle="A login link has been sent to your email address">
//         <div className='bg-purple-50 border border-purple-200 rounded-lg p-4 text-center'>
//           <p className="text-gray-700 mb-4">
//             Click the link in the email we sent to <strong>{values.email}</strong> to sign in.
//           </p>
//           <p className="text-sm text-gray-600 mb-6">
//             The link expires in 24 hours.
//           </p>
//           <Button onClick={() => setEmailSent(false)} fullWidth>Try another email</Button>
//         </div>
//       </AuthLayout>
//     );
//   }
//   const handleResendVerification = async () => {
//     try {
//         await resendVerificationEmail(values.email);
//         setResendStatus({ sent: true, error: null });
//     } catch (error) {
//         setResendStatus({ sent: false, error: 'Failed to resend. Please try again.' });
//         console.error('Resend failed:', error);
//     }
//   };

//   const renderErrorMessage = () => {
//     if (!loginError) return null;

//     const isEmailNotConfirmed = loginError.includes('Email not confirmed');

//     return (
//         <div className={`p-4 mb-4 text-sm rounded-lg ${isEmailNotConfirmed ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`} role="alert">
//             {isEmailNotConfirmed ? (
//                 <div>
//                     <p>Please verify your email address before logging in.</p>
//                     {resendStatus.sent ? (
//                         <p className="font-semibold mt-2">A new verification email has been sent to your address.</p>
//                     ) : (
//                         <p className="mt-2">
//                             Didn't receive an email?{" "}
//                             <button onClick={handleResendVerification} className="font-semibold underline hover:text-yellow-800">Resend verification email</button>.
//                         </p>
//                     )}
//                     {resendStatus.error && <p className="text-red-600 mt-2">{resendStatus.error}</p>}
//                 </div>
//             ) : (
//                 <p>Invalid email or password. Please try again.</p>
//             )}
//         </div>
//     );
//   };

//   return (
//     <AuthLayout title="Welcome Back!" subtitle="Please enter your credentials to log in.">
//       <form onSubmit={handleSubmit} noValidate>
//         {loginError && (
//           <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg" role="alert">
//             <p>{loginError}</p>
//           </div>
//         )}
//         <Input
//           label="Email"
//           name="email"
//           type="email"
//           value={values.email}
//           onChange={handleInputChange}
//           error={errors.email && errors.email[0]}
//           placeholder="johndoe@systemsltd.com"
//         />
//         {/* <Input
//           label="Password"
//           name="password"
//           type="password"
//           value={values.password}
//           onChange={handleInputChange}
//           error={errors.password && errors.password[0]}
//           disabled={isLoggingIn}
//         /> */}
//         <Button type="submit" fullWidth>
//           Send login link
//         </Button>
//       </form>
//       <p className="text-center text-gray-600 mt-4">
//         Don't have an account?{" "}
//         <Link to="/register" className="text-purple-600 hover:underline">
//           Sign up
//         </Link>
//       </p>
//     </AuthLayout>
//   );
// };

// export default Login;
