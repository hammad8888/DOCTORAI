// // src/components/Common/Sidebar.jsx
// import { useState, useEffect } from 'react'
// import { FiMessageSquare, FiTrash2, FiPlus } from 'react-icons/fi'
// import PropTypes from 'prop-types'

// export default function Sidebar({
//   chats,
//   selectedChat,
//   onNewChat,
//   onSelectChat,
//   onDeleteChat,
//   mobileOpen,
//   setMobileOpen
// }) {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return (
//     <aside className={`${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'relative'} 
//       w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 transform transition-transform
//       ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
//     >
//       <div className="h-full flex flex-col">
//         {/* Header */}
//         <div className="p-4 border-b dark:border-gray-700">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold">Chat History</h2>
//             <button
//               onClick={onNewChat}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
//             >
//               <FiPlus className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Chat List */}
//         <div className="flex-1 overflow-y-auto">
//           {chats.length === 0 ? (
//             <div className="p-4 text-center text-gray-500">No chats yet</div>
//           ) : (
//             <div className="divide-y dark:divide-gray-700">
//               {chats.map(chat => (
//                 <div
//                   key={chat.id}
//                   onClick={() => onSelectChat(chat.id)}
//                   className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
//                     selectedChat === chat.id ? 'bg-blue-50 dark:bg-gray-700' : ''
//                   }`}
//                 >
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="font-medium truncate">{chat.title}</p>
//                       <p className="text-sm text-gray-500">
//                         {new Date(chat.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         onDeleteChat(chat.id)
//                       }}
//                       className="p-1 hover:text-red-500"
//                     >
//                       <FiTrash2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </aside>
//   )
// }

// Sidebar.propTypes = {
//   chats: PropTypes.array.isRequired,
//   selectedChat: PropTypes.string,
//   onNewChat: PropTypes.func.isRequired,
//   onSelectChat: PropTypes.func.isRequired,
//   onDeleteChat: PropTypes.func.isRequired,
//   mobileOpen: PropTypes.bool.isRequired,
//   setMobileOpen: PropTypes.func.isRequired
// }

















import { useState, useEffect } from 'react';
import { FiMessageSquare, FiTrash2, FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';

export default function Sidebar({
  chats,
  selectedChat,
  onNewChat,
  onSelectChat,
  onDeleteChat,
  mobileOpen,
  setMobileOpen
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside className={`${isMobile ? 'fixed inset-y-0 left-0 z-40' : 'relative'} 
      w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 transform transition-transform duration-300 ease-in-out
      ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Chat History</h2>
            <button
              onClick={onNewChat}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              aria-label="New chat"
            >
              <FiPlus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No chats yet</div>
          ) : (
            <div className="divide-y dark:divide-gray-700">
              {chats.map(chat => (
                <div
                  key={chat.id}
                  onClick={() => onSelectChat(chat.id)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    selectedChat === chat.id ? 'bg-blue-50 dark:bg-gray-700' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium truncate">{chat.title}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(chat.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(chat.id);
                      }}
                      className="p-1 hover:text-red-500"
                      aria-label="Delete chat"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  chats: PropTypes.array.isRequired,
  selectedChat: PropTypes.string,
  onNewChat: PropTypes.func.isRequired,
  onSelectChat: PropTypes.func.isRequired,
  onDeleteChat: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  setMobileOpen: PropTypes.func.isRequired
};