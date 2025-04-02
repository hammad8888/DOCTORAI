// // src/pages/Auth/Signup.jsx
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../context/AuthContext'
// import { FcGoogle } from 'react-icons/fc'

// export default function Signup() {
//   const { loginWithGoogle } = useAuth()
//   const navigate = useNavigate()
//   const [error, setError] = useState('')
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords don't match")
//       return
//     }
//     // Add actual signup logic
//     navigate('/')
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-medical-primary">
//           Create Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               required
//               className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//             />
//           </div>

//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               required
//               className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//               value={formData.password}
//               onChange={(e) => setFormData({...formData, password: e.target.value})}
//             />
//           </div>

//           <div>
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               required
//               className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//               value={formData.confirmPassword}
//               onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary"
//           >
//             Create Account
//           </button>
//         </form>

//         <p className="text-center">
//           Already have an account?{' '}
//           <Link to="/login" className="text-medical-primary hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }



































import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { FiX } from 'react-icons/fi';

export default function Signup() {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    navigate('/');
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Failed to login with Google');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        aria-label="Close"
      >
        <FiX className="w-6 h-6" />
      </button>

      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-medical-primary">
          Create Account
        </h2>

        {error && (
          <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary"
          >
            Create Account
          </button>
        </form>

        <div className="relative flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <FcGoogle className="w-6 h-6" />
          Sign up with Google
        </button>

        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-medical-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}