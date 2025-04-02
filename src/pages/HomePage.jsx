// // src/pages/HomePage.jsx
// import { useState, useEffect } from 'react'
// import { useAuth } from '../context/AuthContext'
// import Header from '../components/Common/Header'
// import Sidebar from '../components/Common/Sidebar'
// import Chatbot from '../components/Chat/Chatbot'

// export default function HomePage() {
//   const { user } = useAuth()
//   const [chats, setChats] = useState([])
//   const [selectedChat, setSelectedChat] = useState(null)
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//       if (window.innerWidth >= 768) setSidebarOpen(false)
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   useEffect(() => {
//     const savedChats = localStorage.getItem('chats')
//     if (savedChats) setChats(JSON.parse(savedChats))
//   }, [])

//   const handleNewChat = () => {
//     const newChat = {
//       id: Date.now().toString(),
//       title: `Chat ${chats.length + 1}`,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString()
//     }
//     const updatedChats = [newChat, ...chats]
//     setChats(updatedChats)
//     setSelectedChat(newChat.id)
//     localStorage.setItem('chats', JSON.stringify(updatedChats))
//     if (isMobile) setSidebarOpen(false)
//   }

//   const handleDeleteChat = (chatId) => {
//     const updatedChats = chats.filter(chat => chat.id !== chatId)
//     setChats(updatedChats)
//     localStorage.setItem('chats', JSON.stringify(updatedChats))
//     localStorage.removeItem(`chat_${chatId}`)
//     if (selectedChat === chatId) setSelectedChat(updatedChats[0]?.id || null)
//   }

//   return (
//     <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
//       <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar
//           chats={chats}
//           selectedChat={selectedChat}
//           onNewChat={handleNewChat}
//           onSelectChat={(id) => {
//             setSelectedChat(id)
//             if (isMobile) setSidebarOpen(false)
//           }}
//           onDeleteChat={handleDeleteChat}
//           mobileOpen={sidebarOpen}
//           setMobileOpen={setSidebarOpen}
//         />
        
//         <main className="flex-1 flex flex-col overflow-hidden">
//           {selectedChat ? (
//             <Chatbot key={selectedChat} chatId={selectedChat} />
//           ) : (
//             <div className="flex-1 flex flex-col items-center justify-center p-4">
//               <div className="text-center max-w-md">
//                 <button
//                   onClick={handleNewChat}
//                   className="px-6 py-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary transition-colors"
//                 >
//                   {user ? 'Start New Chat' : 'Continue as Guest'}
//                 </button>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   )
// }


































import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Common/Header';
import Sidebar from '../components/Common/Sidebar';
import Chatbot from '../components/Chat/Chatbot';

export default function HomePage() {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const savedChats = localStorage.getItem('chats');
    if (savedChats) setChats(JSON.parse(savedChats));
  }, []);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: `Chat ${chats.length + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    setSelectedChat(newChat.id);
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    if (isMobile) setSidebarOpen(false);
  };

  const handleDeleteChat = (chatId) => {
    const updatedChats = chats.filter(chat => chat.id !== chatId);
    setChats(updatedChats);
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    localStorage.removeItem(`chat_${chatId}`);
    if (selectedChat === chatId) setSelectedChat(updatedChats[0]?.id || null);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          chats={chats}
          selectedChat={selectedChat}
          onNewChat={handleNewChat}
          onSelectChat={(id) => {
            setSelectedChat(id);
            if (isMobile) setSidebarOpen(false);
          }}
          onDeleteChat={handleDeleteChat}
          mobileOpen={sidebarOpen}
          setMobileOpen={setSidebarOpen}
        />
        
        <main className="flex-1 flex flex-col overflow-hidden">
          {selectedChat ? (
            <Chatbot key={selectedChat} chatId={selectedChat} />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <div className="text-center max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-medical-primary">
                  {user ? 'Welcome to DoctorAI' : 'Welcome Guest'}
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {user
                    ? 'Start a new chat to consult with our AI medical specialist.'
                    : 'You are using DoctorAI in guest mode. Start a new chat to begin.'}
                </p>
                <button
                  onClick={handleNewChat}
                  className="px-6 py-3 bg-medical-primary text-white rounded-lg hover:bg-medical-secondary transition-colors"
                >
                  {user ? 'Start New Chat' : 'Continue as Guest'}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}