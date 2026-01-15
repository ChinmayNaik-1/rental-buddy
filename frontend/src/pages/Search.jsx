import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Search = () => {
    const navigate = useNavigate();

    const [search,setsearch] = useState("");

    const handlesearch = (e) => {
        e.preventDefault();
        try {
            navigate(`/filter?search=${search}`)
        } catch (error) {
            toast.error("ERROR SEARCHING")
        }
    }

    return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <Navbar />

    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-xl bg-black/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center">
        
        <h1 className="text-5xl font-extrabold text-white mb-3 tracking-wide">
          BikeBro
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Rent bikes easily, anywhere, anytime
        </p>
        
        <form onSubmit={handlesearch} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Search by bike name or location"
            className="w-full px-5 py-3 rounded-2xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setsearch(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-2xl font-bold text-lg"
          >
            Search Bikes
          </button>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
);

}

export default Search;

