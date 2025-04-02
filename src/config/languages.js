// // src/config/languages.js
// export const LANGUAGE_CONFIG = {
//   en: {
//     specialization: "Specialization",
//     newChat: "New Chat",
//     chatPlaceholder: "Type your message...",
//     login: "Login",
//     signup: "Sign Up",
//     accountDetails: "Account Details",
//     clearChats: "Clear All Chats",
//     deleteAccount: "Delete Account",
//     logout: "Logout"
//   },
//   es: {
//     specialization: "Especialización",
//     newChat: "Nuevo Chat",
//     chatPlaceholder: "Escribe tu mensaje...",
//     login: "Iniciar Sesión",
//     signup: "Registrarse",
//     accountDetails: "Detalles de la Cuenta",
//     clearChats: "Borrar Todos los Chats",
//     deleteAccount: "Eliminar Cuenta",
//     logout: "Cerrar Sesión"
//   }
// }

// export const LANGUAGES = [
//   { code: 'en', name: 'English' },
//   { code: 'es', name: 'Español' }
// ]

























export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
];

export const TRANSLATIONS = {
  en: {
    welcome: "Welcome to DoctorAI",
    login: "Login",
    signup: "Sign Up",
    guest: "Continue as Guest",
    logout: "Logout",
    newChat: "New Chat",
    clearChats: "Clear All Chats",
    accountSettings: "Account Settings",
    language: "Language",
    theme: "Theme",
    darkMode: "Dark Mode",
    lightMode: "Light Mode"
  },
  es: {
    welcome: "Bienvenido a DoctorAI",
    login: "Iniciar sesión",
    signup: "Registrarse",
    guest: "Continuar como invitado",
    logout: "Cerrar sesión",
    newChat: "Nueva conversación",
    clearChats: "Borrar todas las conversaciones",
    accountSettings: "Configuración de la cuenta",
    language: "Idioma",
    theme: "Tema",
    darkMode: "Modo oscuro",
    lightMode: "Modo claro"
  }
};