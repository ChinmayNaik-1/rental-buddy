import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const [search, setsearch] = useState("");

  const handlesearch = (e) => {
    e.preventDefault();
    try {
      navigate(`/filter?search=${search}`)
    } catch (error) {
      toast.error("ERROR SEARCHING")
    }
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[600px] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop")' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full max-w-4xl px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-xl animate-fade-in-down">
            Rent. Ride. Explore.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light text-gray-200 drop-shadow-md">
            The smartest way to rent vehicles in your city.
          </p>

          {/* Search Widget */}
          <div className="bg-white p-2 rounded-full shadow-2xl max-w-2xl mx-auto flex items-center transform transition-all hover:scale-105">
            <form onSubmit={handlesearch} className="flex w-full">
              <div className="flex-grow flex items-center px-6 border-r border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for bikes (e.g., KTM, Classic 350)"
                  className="w-full py-4 text-gray-800 text-lg placeholder-gray-400 bg-transparent focus:outline-none"
                  onChange={(e) => setsearch(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-primary hover:bg-primary-focus text-white px-8 py-3 rounded-full font-bold text-lg transition-colors duration-300 flex items-center gap-2 m-1">
                Search
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-base-content">Why Choose Rental Buddy?</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="card bg-base-200 border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body items-center text-center p-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="card-title text-2xl mb-3">Sanitized Vehicles</h3>
                <p className="text-gray-500">Every vehicle is deeply sanitized and inspected before every ride.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-200 border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body items-center text-center p-10">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-2xl mb-3">24/7 Support</h3>
                <p className="text-gray-500">We are available around the clock to assist you with your journey.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-200 border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body items-center text-center p-10">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h3 className="card-title text-2xl mb-3">Quality Assured</h3>
                <p className="text-gray-500">Top-notch bikes and cars maintained by certified mechanics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );

}

export default HomePage;

