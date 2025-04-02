// // src/pages/Auth/Login.jsx
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../context/AuthContext'
// import { FcGoogle } from 'react-icons/fc'

// export default function Login() {
//   const { loginWithGoogle, guestLogin } = useAuth()
//   const navigate = useNavigate()
//   const [error, setError] = useState('')

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle()
//       navigate('/')
//     } catch (err) {
//       setError('Failed to login with Google')
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-medical-primary">
//           Welcome to DoctorAI
//         </h2>

//         {error && (
//           <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
//             {error}
//           </div>
//         )}

//         <div className="space-y-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg 
//               hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//           >
//             <FcGoogle className="w-6 h-6" />
//             Continue with Google
//           </button>

//           <button
//             onClick={guestLogin}
//             className="w-full p-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary"
//           >
//             Continue as Guest
//           </button>
//         </div>

//         <p className="text-center">
//           Don't have an account?{' '}
//           <Link to="/signup" className="text-medical-primary hover:underline">
//             Sign up
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

export default function Login() {
  const { loginWithGoogle, guestLogin } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Failed to login with Google');
    }
  };

  const handleGuestLogin = () => {
    guestLogin();
    navigate('/');
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
          Welcome to DoctorAI
        </h2>

        {error && (
          <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <FcGoogle className="w-6 h-6" />
            Continue with Google
          </button>

          <button
            onClick={handleGuestLogin}
            className="w-full p-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary"
          >
            Continue as Guest
          </button>
        </div>

        <p className="text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-medical-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}