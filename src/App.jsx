// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { AuthProvider } from './context/AuthContext'
// import HomePage from './pages/HomePage'
// import Account from './pages/Account'
// import Login from './pages/Auth/Login'
// import Signup from './pages/Auth/Signup'
// import ForgotPassword from './pages/Auth/ForgotPassword'
// import ErrorBoundary from './components/Common/ErrorBoundary'
// import PrivateRoute from './components/Auth/PrivateRoute'

// /**
//  * Main application component with routing configuration
//  */
// export default function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <ErrorBoundary>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
//             <Route path="/" element={<HomePage />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </ErrorBoundary>
//       </AuthProvider>
//     </Router>
//   )
// }










import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import Account from './pages/Account';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ErrorBoundary from './components/Common/ErrorBoundary';
import PrivateRoute from './components/Auth/PrivateRoute';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ErrorBoundary>
      </AuthProvider>
    </Router>
  );
}