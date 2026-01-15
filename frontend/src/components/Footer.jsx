import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">BikeBro</h2>
          <p className="text-gray-400">
            Rent bikes easily, anywhere, anytime. Your journey, your way.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Bikes</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BikeBro. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
