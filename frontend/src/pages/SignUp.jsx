import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const SignUp = () => {
    const navigate=useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] =useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(!name.trim() || !password.trim())
            {
                toast.error("fill all feilds")
            }
            await axios.post(`https://bknd-4.onrender.com/user/signup`,{name,password})
            toast.success('signed you up')
            navigate("/filter")
        } catch (error) {
            toast.error("error in signup")
        }
    }
  
  return (
  <div className="min-h-screen flex justify-center items-center bg-gray-500">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gray-800 text-white p-8 m-7 rounded-2xl shadow-lg w-96 gap-6"
    >
      <div className="flex justify-between items-center mb-4">
        <Link to="/filter" className="btn btn-sm bg-gray-600">
          ← Home
        </Link>
        <h1 className="text-2xl font-bold">Sign-up</h1>
      </div>

      <label className="label">
        <span className="label-text text-lg">Username:</span>
      </label>
      <input
        type="text"
        placeholder="Enter username"
        className="input input-bordered w-full text-black text-lg py-2"
        onChange={(e) => setName(e.target.value)}
      />

      <label className="label">
        <span className="label-text text-lg">Password:</span>
      </label>
      <input
        type="password"
        placeholder="Enter password"
        className="input input-bordered text-black w-full text-lg py-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="btn bg-green-700 mt-2 py-2 text-lg">
        Submit
      </button>
    </form>
  </div>
);

}

export default SignUp;