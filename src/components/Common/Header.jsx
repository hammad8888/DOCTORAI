// // src/components/Common/Header.jsx
// import { useState, useEffect } from 'react'
// import { useAuth } from '../../context/AuthContext'
// import { FiMenu, FiX, FiUser } from 'react-icons/fi'
// import { Link } from 'react-router-dom'
// import ThemeToggle from './ThemeToggle'

// export default function Header({ onToggleSidebar }) {
//   const { user, logout } = useAuth()
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
//   const [showDropdown, setShowDropdown] = useState(false)

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return (
//     <header className="bg-white dark:bg-gray-800 shadow-sm">
//       <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left Section */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={onToggleSidebar}
//             className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
//           >
//             {isMobile ? <FiMenu className="w-6 h-6" /> : <FiX className="w-6 h-6" />}
//           </button>
//           <Link to="/" className="text-xl font-bold text-medical-primary">
//             DoctorAI
//           </Link>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           <ThemeToggle />
          
//           {/* Profile Dropdown */}
//           <div className="relative">
//             <button 
//               onClick={() => setShowDropdown(!showDropdown)}
//               className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
//             >
//               <div className="w-8 h-8 rounded-full bg-medical-primary text-white flex items-center justify-center">
//                 {user?.photoURL ? (
//                   <img src={user.photoURL} alt="Profile" className="rounded-full" />
//                 ) : (
//                   <FiUser className="w-4 h-4" />
//                 )}
//               </div>
//               <span className="hidden md:inline">
//                 {user?.displayName || 'Guest'}
//               </span>
//             </button>

//             {/* Dropdown Menu */}
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700">
//                 <Link
//                   to="/account"
//                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   Account Settings
//                 </Link>
//                 <button
//                   onClick={logout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
















import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

export default function Header({ sidebarOpen, onToggleSidebar }) {
  const { user, logout } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg md:hidden"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
          <Link to="/" className="text-xl font-bold text-medical-primary">
            DoctorAI
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* <LanguageSelector /> */}
          <ThemeToggle />
          
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              aria-label="User menu"
            >
              <div className="w-8 h-8 rounded-full bg-medical-primary text-white flex items-center justify-center">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="rounded-full w-full h-full object-cover" />
                ) : (
                  <FiUser className="w-4 h-4" />
                )}
              </div>
              <span className="hidden md:inline">
                {user?.displayName || (user?.isGuest ? 'Guest' : 'Account')}
              </span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 z-20">
                <Link
                  to="/account"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Account Settings
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                >
                  {user?.isGuest ? 'Exit Guest Mode' : 'Logout'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}