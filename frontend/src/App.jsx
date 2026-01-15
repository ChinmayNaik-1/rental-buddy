import './App.css'
import { Routes, Route } from "react-router"
import AdminHomePage from './pages/AdminHomePage'
import AdminUpdatePage from './pages/AdminUpdatePage'
import HomePage from './pages/HomePage.jsx'
import InfoPage from './pages/InfoPage'
import AdminCreatePage from './pages/AdminCreatePage.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import SearchPage from './pages/SearchPage.jsx'
import Chatbot from './components/Chatbot.jsx'

import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/filter" element={<SearchPage />} />
          <Route path="/:id" element={<InfoPage />} />

          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminHomePage />
            </ProtectedRoute>
          } />

          <Route path="/admin/:id" element={
            <ProtectedRoute>
              <AdminUpdatePage />
            </ProtectedRoute>
          } />

          <Route path="admin/create" element={
            <ProtectedRoute>
              <AdminCreatePage />
            </ProtectedRoute>
          } />

          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Chatbot />
      </div>
    </AuthProvider>
  )
}

export default App
