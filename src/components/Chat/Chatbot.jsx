// // src/components/Chat/Chatbot.jsx
// import { useState, useEffect, useRef } from 'react'
// import { useSpring, animated } from '@react-spring/web'
// import MessageBubble from './MessageBubble'
// import UserInput from './UserInput'
// import { FiLoader } from 'react-icons/fi'
// import { useAuth } from '../../context/AuthContext'
// import SpecializationSearch from '../Common/SpecializationSearch'

// export default function Chatbot({ chatId }) {
//   const { user } = useAuth()
//   const [messages, setMessages] = useState([])
//   const [specialization, setSpecialization] = useState('General Medicine')
//   const [isProcessing, setIsProcessing] = useState(false)
//   const messagesEndRef = useRef(null)

//   // Load messages from localStorage
//   useEffect(() => {
//     const savedMessages = localStorage.getItem(`chat_${chatId}`)
//     if (savedMessages) setMessages(JSON.parse(savedMessages))
//   }, [chatId])

//   // Save messages to localStorage
//   useEffect(() => {
//     if (messages.length > 0) {
//       localStorage.setItem(`chat_${chatId}`, JSON.stringify(messages))
//     }
//   }, [messages, chatId])

//   const handleSend = async ({ text, file }) => {
//     if (!text?.trim() && !file) return

//     // Add user message
//     const userMessage = {
//       id: Date.now().toString(),
//       text: text || '',
//       file: file || null,
//       isBot: false,
//       timestamp: new Date().toISOString()
//     }

//     setMessages(prev => [...prev, userMessage])
//     setIsProcessing(true)

//     // Simulate AI response
//     setTimeout(() => {
//       const botResponse = {
//         id: Date.now().toString() + '-bot',
//         text: generateAIResponse(text, file),
//         isBot: true,
//         timestamp: new Date().toISOString()
//       }
//       setMessages(prev => [...prev, botResponse])
//       setIsProcessing(false)
//     }, 1000)
//   }

//   const generateAIResponse = (text, file) => {
//     if (file) {
//       return `Thank you for sharing this ${file.type.startsWith('image/') ? 'image' : 'document'}. Our ${specialization} specialist will review it and provide feedback shortly.`
//     }
    
//     return `As a ${specialization} AI specialist, I recommend consulting with a healthcare professional for personalized advice. Based on your input: "${text}", here are some general suggestions...`
//   }

//   return (
//     <div className="flex-1 flex flex-col h-full">
//       {/* Specialization Header */}
//       <div className="p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
//         <SpecializationSearch 
//           value={specialization}
//           onChange={setSpecialization}
//         />
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message) => (
//           <MessageBubble
//             key={message.id}
//             message={message}
//             isBot={message.isBot}
//           />
//         ))}
        
//         {isProcessing && (
//           <div className="flex justify-start">
//             <FiLoader className="animate-spin text-medical-primary w-6 h-6" />
//           </div>
//         )}
        
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Area */}
//       <UserInput 
//         onSend={handleSend}
//         isProcessing={isProcessing}
//       />
//     </div>
//   )
// }




































import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import MessageBubble from './MessageBubble';
import UserInput from './UserInput';
import { FiLoader, FiShare2 } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import SpecializationSearch from '../Common/SpecializationSearch';
import { SPECIALIZATIONS } from '../../config/constants';

export default function Chatbot({ chatId }) {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [specialization, setSpecialization] = useState(SPECIALIZATIONS[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat_${chatId}`);
    if (savedMessages) setMessages(JSON.parse(savedMessages));
  }, [chatId]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_${chatId}`, JSON.stringify(messages));
    }
  }, [messages, chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async ({ text, file }) => {
    if (!text?.trim() && !file) return;

    const userMessage = {
      id: Date.now().toString(),
      text: text || '',
      file: file || null,
      isBot: false,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now().toString() + '-bot',
        text: generateAIResponse(text, file),
        isBot: true,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  const generateAIResponse = (text, file) => {
    if (file) {
      return `Thank you for sharing this ${file.type.startsWith('image/') ? 'image' : 'document'}. Our ${specialization} specialist will review it and provide feedback shortly.`;
    }
    
    return `As a ${specialization} AI specialist, I recommend consulting with a healthcare professional for personalized advice. Based on your input: "${text}", here are some general suggestions...`;
  };

  const handleShareChat = () => {
    const chatData = JSON.stringify({
      chatId,
      specialization,
      messages,
      createdAt: new Date().toISOString()
    }, null, 2);
    
    const blob = new Blob([chatData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `DoctorAI-Chat-${chatId}.txt`;
    link.href = url;
    link.click();
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between">
        <SpecializationSearch 
          value={specialization}
          onChange={setSpecialization}
        />
        <button
          onClick={handleShareChat}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          title="Share Chat"
        >
          <FiShare2 className="w-5 h-5 text-medical-primary" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isBot={message.isBot}
          />
        ))}
        
        {isProcessing && (
          <div className="flex justify-start">
            <FiLoader className="animate-spin text-medical-primary w-6 h-6" />
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <UserInput 
        onSend={handleSend}
        isProcessing={isProcessing}
      />
    </div>
  );
}