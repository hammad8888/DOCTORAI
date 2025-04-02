// // src/pages/Auth/ForgotPassword.jsx
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

// /**
//  * Forgot password page with animated form
//  */
// export default function ForgotPassword() {
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
    
//     // Simulate API call
//     setTimeout(() => {
//       setMessage(`Password reset link sent to ${email}`)
//       setIsLoading(false)
//     }, 1500)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-medical-primary/5 to-white dark:from-gray-900"
//     >
//       <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
//         <h1 className="text-3xl font-bold text-medical-primary text-center">
//           Reset Password
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-medical-primary"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full p-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary transition-colors disabled:opacity-50"
//           >
//             {isLoading ? 'Sending...' : 'Send Reset Link'}
//           </button>
//         </form>

//         {message && (
//           <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg">
//             {message}
//           </div>
//         )}

//         <p className="text-center">
//           Remember your password?{' '}
//           <Link to="/login" className="text-medical-primary hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </motion.div>
//   )
// }




























import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setMessage('Password reset link has been sent to your email');
    setError('');
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
          Forgot Password
        </h2>

        {error && (
          <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
            {error}
          </div>
        )}

        {message ? (
          <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary"
            >
              Reset Password
            </button>
          </form>
        )}

        <p className="text-center">
          Remember your password?{' '}
          <Link to="/login" className="text-medical-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}