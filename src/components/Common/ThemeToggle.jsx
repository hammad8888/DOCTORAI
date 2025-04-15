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
        'bg-gray-100 text-gray-700 hover:bg-gray-200':
        'bg-gray-700 text-yellow-300 hover:bg-gray-600'  
        
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