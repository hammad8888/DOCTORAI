// // src/components/Chat/UserInput.jsx
// import { useState, useRef, useEffect } from 'react'
// import { FiSend, FiPaperclip, FiMic, FiStopCircle } from 'react-icons/fi'
// import PropTypes from 'prop-types'
// import VoiceRecorder from './VoiceRecorder'

// export default function UserInput({ onSend, isProcessing }) {
//   const [input, setInput] = useState('')
//   const [file, setFile] = useState(null)
//   const [isRecording, setIsRecording] = useState(false)
//   const fileInputRef = useRef(null)
//   const inputRef = useRef(null)

//   useEffect(() => {
//     if (!isProcessing && inputRef.current) {
//       inputRef.current.focus()
//     }
//   }, [isProcessing])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!input.trim() && !file) return
    
//     onSend({ text: input, file })
//     setInput('')
//     setFile(null)
//     if (fileInputRef.current) fileInputRef.current.value = ''
//   }

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0]
//     if (!selectedFile) return

//     if (selectedFile.size > 5 * 1024 * 1024) {
//       alert('File size should be less than 5MB')
//       return
//     }

//     setFile(selectedFile)
//   }

//   const handleVoiceResult = (text) => {
//     setInput(prev => prev ? `${prev} ${text}` : text)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
//       <div className="flex items-center gap-2">
//         {/* File Upload */}
//         <label className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
//           <FiPaperclip className="w-5 h-5 text-medical-primary" />
//           <input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             className="hidden"
//             accept="image/*, .pdf, .doc, .docx, .txt"
//           />
//         </label>

//         {/* Voice Recorder */}
//         <VoiceRecorder 
//           onResult={handleVoiceResult}
//           isRecording={isRecording}
//           setIsRecording={setIsRecording}
//         />

//         {/* Text Input */}
//         <div className="flex-1 relative">
//           <input
//             ref={inputRef}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message or describe symptoms..."
//             className="w-full p-2 pl-4 pr-12 rounded-full border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-medical-primary dark:bg-gray-900/50"
//             disabled={isProcessing}
//           />

//           {/* Send Button */}
//           <button
//             type="submit"
//             disabled={isProcessing || (!input.trim() && !file)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-medical-primary text-white rounded-full hover:bg-medical-secondary disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <FiSend className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* File Preview */}
//       {file && (
//         <div className="mt-2 flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
//           <span className="text-sm flex items-center gap-2">
//             <FiPaperclip className="flex-shrink-0" />
//             {file.name}
//           </span>
//           <button
//             onClick={() => {
//               setFile(null)
//               fileInputRef.current.value = ''
//             }}
//             className="text-red-500 hover:text-red-700"
//           >
//             Remove
//           </button>
//         </div>
//       )}
//     </form>
//   )
// }

// UserInput.propTypes = {
//   onSend: PropTypes.func.isRequired,
//   isProcessing: PropTypes.bool.isRequired
// }


























































import { useState, useRef, useEffect } from 'react';
import { FiSend, FiPaperclip } from 'react-icons/fi';
import PropTypes from 'prop-types';
import VoiceRecorder from './VoiceRecorder';

export default function UserInput({ onSend, isProcessing }) {
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isProcessing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isProcessing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() && !file) return;
    
    onSend({ text: input, file });
    setInput('');
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    setFile(selectedFile);
  };

  const handleVoiceResult = (result) => {
    setInput(prev => prev ? `${prev} ${result.text}` : result.text);
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <label className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <FiPaperclip className="w-5 h-5 text-medical-primary" />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*, .pdf, .doc, .docx, .txt"
          />
        </label>

        <VoiceRecorder 
          onResult={handleVoiceResult}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
        />

        <div className="flex-1 relative">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message or describe symptoms..."
            className="w-full p-2 pl-4 pr-12 rounded-full border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-medical-primary dark:bg-gray-900/50"
            disabled={isProcessing}
          />

          <button
            type="submit"
            disabled={isProcessing || (!input.trim() && !file)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-medical-primary text-white rounded-full hover:bg-medical-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>

      {file && (
        <div className="mt-2 flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <span className="text-sm flex items-center gap-2">
            <FiPaperclip className="flex-shrink-0" />
            {file.name}
          </span>
          <button
            onClick={() => {
              setFile(null);
              fileInputRef.current.value = '';
            }}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      )}
    </form>
  );
}

UserInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired
};