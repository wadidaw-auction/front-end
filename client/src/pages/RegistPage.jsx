import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constant";

export default function RegisPage() {
  
  const navigate = useNavigate()

  const [input, setInput] = useState({
    name : "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle submission logic here, like sending data to server
    try {
      let respon = await axios({
        method: "post",
        url: `${BASE_URL}/register`,
        data: input,
      });
      // console.log(respon);
      
      navigate("/");
      Swal.fire({
        title: "Register Success",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <div className="border-2 rounded-lg p-8 shadow-lg items-center" >
      <h1 className="block font-bold text-teal-500 text-4xl text-center">Regist</h1>
      <h1 className="block font-bold text-teal-500 text-4xl text-center">Wadidaw Auction</h1>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
    <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input type="text" id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="name" onChange={handleInput} required />
      </div>
      <div className="mb-4 ">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="email" onChange={handleInput} required />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" onChange={handleInput} required />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </div>
    </form>
    </div>
    </div>
 
    </>
  );
}
