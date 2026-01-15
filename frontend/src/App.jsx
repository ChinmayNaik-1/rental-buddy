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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/filter" element={<SearchPage />} />
        <Route path="/:id" element={<InfoPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/:id" element={<AdminUpdatePage />} />
        <Route path="admin/create" element={<AdminCreatePage />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Chatbot />
    </div>
  )
}

export default App
