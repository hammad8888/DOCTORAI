// // src/components/Common/LanguageSelector.jsx
// import { useAuth } from '../../context/AuthContext'
// import { LANGUAGES } from '../../config/languages'
// import { motion } from 'framer-motion'

// /**
//  * Language selector component with auto-detection and manual selection
//  */
// export default function LanguageSelector() {
//   const { language, setLanguage } = useAuth()

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="relative w-full"
//     >
//       <select
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//         className="w-full p-2 rounded-lg bg-white dark:bg-gray-800 border border-medical-primary/30 focus:ring-2 focus:ring-medical-primary"
//       >
//         {LANGUAGES.map(lang => (
//           <option key={lang.code} value={lang.code}>
//             {lang.name} ({lang.nativeName})
//           </option>
//         ))}
//       </select>
//     </motion.div>
//   )
// }


















import { useAuth } from '../../context/AuthContext';
import { LANGUAGES } from '../../config/languages';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function LanguageSelector() {
  const { language, setLanguage } = useAuth();

  useEffect(() => {
    const googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.map(lang => lang.code).join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    };

    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      window.googleTranslateElementInit = googleTranslateElementInit;
    };

    addGoogleTranslateScript();

    return () => {
      const script = document.querySelector('script[src*="translate.google.com"]');
      if (script) {
        document.body.removeChild(script);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hidden md:block"
    >
      <div id="google_translate_element"></div>
    </motion.div>
  );
}