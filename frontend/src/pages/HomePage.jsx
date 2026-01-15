import { useState } from "react"
import Navbar from "../components/Navbar"
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Createcard from "../components/Createcard";
import { Link, useLocation } from "react-router";
import Footer from "../components/Footer";

const HomePage = () => {
  const [cards,setCards] = useState([]);
  const [loading,setLoading] = useState(true);

  const location= useLocation()
  const query=new URLSearchParams(location.search).get("search") || "";

  useEffect ( ()=>{
    const fetchall = async ()=> {
      try {
        const res = await axios.get(`https://bknd-4.onrender.com/filter?search=${query}`);
        console.log(res.data)
        setCards(res.data)
      } catch (error) {
        toast.error("counldnt get data")
      }
      finally{
        setLoading(false)
      }
    }
    
    fetchall();
  },[query])






  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading && <div>Loading...</div>}
        {cards.map(card =>{
          return <Link to={`/${card._id}`} key={card._id}><Createcard card={card}/></Link>
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
