// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { LANGUAGES } from '../config/languages'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('en')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || 'User',
          photoURL: user.photoURL,
          isGuest: false
        })
      }
      setLoading(false)
    })

    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const savedLang = localStorage.getItem('language') || navigator.language.split(/[-_]/)[0]

    setTheme(savedTheme)
    setLanguage(savedLang)
    document.documentElement.classList.add(savedTheme)

    return () => unsubscribe()
  }, [])

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      return result.user
    } catch (error) {
      console.error('Google login error:', error)
      throw error
    }
  }

  const guestLogin = () => {
    setUser({
      uid: `guest-${Date.now()}`,
      email: null,
      displayName: 'Guest User',
      photoURL: null,
      isGuest: true
    })
  }

  const logout = async () => {
    try {
      if (!user?.isGuest) await signOut(auth)
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
  }

  const updateLanguage = (lang) => {
    if (LANGUAGES.some(l => l.code === lang)) {
      setLanguage(lang)
      localStorage.setItem('language', lang)
    }
  }

  const clearChats = () => {
    if (user?.isGuest) {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('chat_')) localStorage.removeItem(key)
      })
      localStorage.removeItem('chats')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        theme,
        language,
        loginWithGoogle,
        guestLogin,
        logout,
        toggleTheme,
        setLanguage: updateLanguage,
        clearChats
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)