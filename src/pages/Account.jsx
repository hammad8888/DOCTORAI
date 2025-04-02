// // src/pages/Account.jsx
// import { useAuth } from '../context/AuthContext'
// import LanguageSelector from '../components/Common/LanguageSelector'
// import ThemeToggle from '../components/Common/ThemeToggle'

// export default function Account() {
//   const { user, logout, clearChats } = useAuth()

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//         <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        
//         <div className="space-y-6">
//           {/* Language Settings */}
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Language</h2>
//             <LanguageSelector />
//           </div>

//           {/* Theme Settings */}
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Theme</h2>
//             <ThemeToggle />
//           </div>

//           {/* Danger Zone */}
//           <div className="border-t pt-6">
//             <h2 className="text-xl font-semibold mb-4">Danger Zone</h2>
//             <div className="space-y-3">
//               <button
//                 onClick={clearChats}
//                 className="w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 Clear All Chats
//               </button>
//               <button
//                 onClick={logout}
//                 className="w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




































import { useAuth } from '../context/AuthContext';
import LanguageSelector from '../components/Common/LanguageSelector';
import ThemeToggle from '../components/Common/ThemeToggle';

export default function Account() {
  const { user, logout, clearChats } = useAuth();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        
        <div className="space-y-6">
          {user?.isGuest && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                Guest Mode
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                You are currently using DoctorAI in guest mode. Your data will be saved locally but won't be synced across devices.
              </p>
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold mb-2">Language</h2>
            <LanguageSelector />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Theme</h2>
            <div className="flex items-center gap-4">
              <span>Toggle theme:</span>
              <ThemeToggle />
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Danger Zone</h2>
            <div className="space-y-3">
              <button
                onClick={clearChats}
                className="w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear All Chats
              </button>
              <button
                onClick={logout}
                className="w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                {user?.isGuest ? 'Exit Guest Mode' : 'Logout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}