// // src/components/Chat/MessageBubble.jsx
// import { FiUser, FiFile, FiImage } from 'react-icons/fi'
// import PropTypes from 'prop-types'

// export default function MessageBubble({ message, isBot }) {
//   // Format file size display
//   const formatFileSize = (bytes) => {
//     if (bytes < 1024) return `${bytes} B`
//     if (bytes < 1048576) return `${(bytes/1024).toFixed(1)} KB`
//     return `${(bytes/1048576).toFixed(1)} MB`
//   }

//   return (
//     <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
//       <div className={`max-w-[85%] p-4 rounded-2xl ${
//         isBot ? 
//           'bg-white dark:bg-gray-700 shadow-md border border-gray-100 dark:border-gray-600' :
//           'bg-medical-primary text-white'
//       }`}>
//         <div className="flex items-start gap-3">
//           {/* Message Icon */}
//           <div className="flex-shrink-0 pt-1">
//             {isBot ? (
//               <div className="w-6 h-6 rounded-full bg-medical-primary/10 dark:bg-medical-primary/20 flex items-center justify-center">
//                 <span className="text-sm">⚕</span>
//               </div>
//             ) : (
//               <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
//                 <FiUser className="w-4 h-4 text-white" />
//               </div>
//             )}
//           </div>
          
//           {/* Message Content */}
//           <div className="flex-1">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-sm font-medium">
//                 {isBot ? 'Doctor AI' : 'You'}
//               </span>
//               <span className="text-xs opacity-75">
//                 {new Date(message.timestamp).toLocaleTimeString()}
//               </span>
//             </div>
            
//             {/* Text Content */}
//             {message.text && (
//               <p className="whitespace-pre-wrap text-sm">
//                 {message.text}
//               </p>
//             )}
            
//             {/* File Attachment */}
//             {message.file && (
//               <div className="mt-3 p-2 rounded-lg bg-white/10 flex items-center gap-2">
//                 {message.file.type.startsWith('image/') ? (
//                   <>
//                     <FiImage className="w-5 h-5" />
//                     <img 
//                       src={URL.createObjectURL(message.file)}
//                       alt="Uploaded content"
//                       className="h-20 w-20 object-cover rounded"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <FiFile className="w-5 h-5" />
//                     <div>
//                       <p className="text-sm font-medium truncate">
//                         {message.file.name}
//                       </p>
//                       <p className="text-xs">
//                         {formatFileSize(message.file.size)}
//                       </p>
//                     </div>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// MessageBubble.propTypes = {
//   message: PropTypes.object.isRequired,
//   isBot: PropTypes.bool
// }
































import { FiUser, FiFile, FiImage } from 'react-icons/fi';
import PropTypes from 'prop-types';

export default function MessageBubble({ message, isBot }) {
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes/1024).toFixed(1)} KB`;
    return `${(bytes/1048576).toFixed(1)} MB`;
  };

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[85%] p-4 rounded-2xl ${
        isBot ? 
          'bg-white dark:bg-gray-700 shadow-md border border-gray-100 dark:border-gray-600' :
          'bg-medical-primary text-white'
      }`}>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 pt-1">
            {isBot ? (
              <div className="w-6 h-6 rounded-full bg-medical-primary/10 dark:bg-medical-primary/20 flex items-center justify-center">
                <span className="text-sm">⚕</span>
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <FiUser className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                {isBot ? 'Doctor AI' : 'You'}
              </span>
              <span className="text-xs opacity-75">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
            
            {message.text && (
              <p className="whitespace-pre-wrap text-sm">
                {message.text}
              </p>
            )}
            
            {message.file && (
              <div className="mt-3 p-2 rounded-lg bg-white/10 flex items-center gap-2">
                {message.file.type.startsWith('image/') ? (
                  <>
                    <FiImage className="w-5 h-5" />
                    <img 
                      src={URL.createObjectURL(message.file)}
                      alt="Uploaded content"
                      className="h-20 w-20 object-cover rounded"
                    />
                  </>
                ) : (
                  <>
                    <FiFile className="w-5 h-5" />
                    <div>
                      <p className="text-sm font-medium truncate">
                        {message.file.name}
                      </p>
                      <p className="text-xs">
                        {formatFileSize(message.file.size)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}

            {message.audio && (
              <div className="mt-3">
                <audio 
                  controls 
                  src={message.audio} 
                  className="w-full"
                />
                {message.transcript && (
                  <p className="text-xs mt-1 italic opacity-75">
                    Transcript: {message.transcript}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

MessageBubble.propTypes = {
  message: PropTypes.object.isRequired,
  isBot: PropTypes.bool
};