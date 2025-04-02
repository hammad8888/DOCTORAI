// // // src/components/Common/ThemeToggle.jsx
// // import { useAuth } from '../../context/AuthContext'
// // import { FiSun, FiMoon } from 'react-icons/fi'
// // import { motion } from 'framer-motion'

// // /**
// //  * Theme toggle component for switching between dark/light modes
// //  */
// // export default function ThemeToggle() {
// //   const { theme, toggleTheme } = useAuth()
  
// //   return (
// //     <motion.button
// //       whileHover={{ scale: 1.05 }}
// //       whileTap={{ scale: 0.95 }}
// //       onClick={toggleTheme}
// //       className="p-2 rounded-full bg-gradient-to-br from-medical-primary to-medical-secondary text-white shadow-lg"
// //       aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
// //     >
// //       {theme === 'light' ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
// //     </motion.button>
// //   )
// // }









// // src/components/Common/ThemeToggle.jsx
// import { useAuth } from '../../context/AuthContext'
// import { FiSun, FiMoon } from 'react-icons/fi'
// import { motion } from 'framer-motion'

// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useAuth()
  
//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={toggleTheme}
//       className={`p-2 rounded-full ${
//         theme === 'dark' ? 
//         'bg-gray-800 text-white' : 
//         'bg-gray-100 text-gray-800'
//       } transition-colors`}
//       aria-label={`Toggle ${theme} mode`}
//     >
//       {theme === 'dark' ? (
//         <FiSun className="w-5 h-5" />
//       ) : (
//         <FiMoon className="w-5 h-5" />
//       )}
//     </motion.button>
//   )
// }
























import { useAuth } from '../../context/AuthContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAuth();
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`p-2 rounded-full ${
        theme === 'dark' ? 
        'bg-gray-800 text-white' : 
        'bg-gray-100 text-gray-800'
      } transition-colors`}
      aria-label={`Toggle ${theme} mode`}
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </motion.button>
  );
}