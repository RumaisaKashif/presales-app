// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
// import { useAuth } from '../../contexts/AuthContext';
// import AuthLayout from '../../components/layout/AuthLayout';
// import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';

// const Register = () => {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const { values, errors, handleChange, handleSubmit } = useForm(
//     { name: '', email: '', password: '' },
//     {
//       name: {
//         presence: { allowEmpty: false, message: 'is required' },
//       },
//       email: {
//         presence: { allowEmpty: false, message: 'is required' },
//         email: true,
//       },
//       password: {
//         presence: { allowEmpty: false, message: 'is required' },
//         length: { minimum: 6 },
//       },
//     },
//     async (formValues) => {
//       try {
//         await register(formValues.name, formValues.email, formValues.password);
//         navigate('/presales/dashboard');
//       } catch (error) {
//         console.error('Registration failed:', error);
//       }
//     }
//   );

//   return (
//     <AuthLayout title="Create an Account" subtitle="Join us and streamline your presales process.">
//       <form onSubmit={handleSubmit} noValidate>
//         <Input
//           label="Full Name"
//           name="name"
//           type="text"
//           value={values.name}
//           onChange={handleChange}
//           error={errors.name && errors.name[0]}
//         />
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
//         <Button type="submit" fullWidth>Register</Button>
//       </form>
//       <p className="text-center text-gray-600 mt-4">
//         Already have an account?{" "}
//         <Link to="/login" className="text-purple-600 hover:underline">
//           Log in
//         </Link>
//       </p>
//     </AuthLayout>
//   );
// };

// export default Register;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from '../../components/layout/AuthLayout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, name);
    setSent(true);
  };

  if (sent) {
    return <AuthLayout title="Check your email" />;
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit}>
        <Input label="Name" value={name} onChange={e => setName(e.target.value)} />
        <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Button>Create account</Button>
      </form>
      <Link to="/login">Login</Link>
    </AuthLayout>
  );
};

export default Register;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
// import { useAuth } from '../../contexts/AuthContext';
// import AuthLayout from '../../components/layout/AuthLayout';
// import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';

// const Register = () => {
//   const { register } = useAuth();
//   const [registrationError, setRegistrationError] = useState(null);
//   const [emailSent, setEmailSent] = useState(false);
//   const [registeredEmail, setRegisteredEmail] = useState('');
//   // const navigate = useNavigate();
//   // const [isRegistered, setIsRegistered] = useState(false);

//   const { values, errors, handleChange, handleSubmit } = useForm(
//     { name: '', email: '' },
//     {
//       name: {
//         presence: { allowEmpty: false, message: 'is required' },
//       },
//       email: {
//         presence: { allowEmpty: false, message: 'is required' },
//         email: true,
//       },
//     },
//     async (formValues) => {
//       try {
//         setRegistrationError(null);
//         await register(formValues.email, formValues.name);
//         setRegisteredEmail(formValues.email);
//         setEmailSent(true);
//       } catch (error) {
//         setRegistrationError(error.message || 'Registration failed. Please try again.');
//       }
//     }
//   );

//   const handleInputChange = (e) => {
//     setRegistrationError(null);
//     handleChange(e);
//   };

//   if (emailSent) {
//     return (
//       <AuthLayout title="Check your inbox" subtitle="Verify your account to get started.">
//         <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
//           <p className="text-gray-700 mb-4">A verification link has been sent to <strong>{registeredEmail}</strong>. Please check your email and click the link to complete your registration.</p>
//           <p className="text-sm text-gray-600 mb-6">Click the link to verify your account and complete your registration.</p>
//           <Button onClick={() => setEmailSent(false)} fullWidth>Sign up with a different email</Button>
//         </div>
//       </AuthLayout>
//     );
//   }

//   return (
//     <AuthLayout title="Create an Account" subtitle="Streamline your presales process.">
//       <form onSubmit={handleSubmit} noValidate>
//         {registrationError && (
//           <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg" role="alert">
//             <p>{registrationError}</p>
//           </div>
//         )}
//         <Input
//           label="Full Name"
//           name="name"
//           type="text"
//           value={values.name}
//           onChange={handleInputChange}
//           error={errors.name && errors.name[0]}
//           placeholder="e.g., John Doe"
//         />
//         <Input
//           label="Email"
//           name="email"
//           type="email"
//           value={values.email}
//           onChange={handleInputChange}
//           error={errors.email && errors.email[0]}
//           placeholder="e.g., johndoe@systemsltd.com"
//         />
//         <Button type="submit" fullWidth>Create account</Button>
//       </form>
//       <p className="text-center text-gray-600 mt-4">
//         Already have an account?{" "}
//         <Link to="/login" className="text-purple-600 hover:underline">
//           Log in
//         </Link>
//       </p>
//     </AuthLayout>
//   );
// };

// export default Register;
