import './App.css'
import { Routes, Route } from "react-router"
import AdminHomePage from './pages/AdminHomePage'
import AdminUpdatePage from './pages/AdminUpdatePage'
import HomePage from './pages/HomePage.jsx'
import InfoPage from './pages/InfoPage'
import AdminCreatePage from './pages/AdminCreatePage.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Search from './pages/Search.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/filter" element={<HomePage />} />
        <Route path="/:id" element={<InfoPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/:id" element={<AdminUpdatePage />} />
        <Route path="admin/create" element={<AdminCreatePage/>}/>
        <Route path="/users/signup" element={<SignUp/>} />
        <Route path="/users/login" element={<Login/>} />
        <Route path="/" element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
