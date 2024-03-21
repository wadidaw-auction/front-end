import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
export default function NavBar() {

  const navigate = useNavigate()

  const [input, setInput] = useState({
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

  const handleFormLogin = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: input,
      });
      console.log(data);
      localStorage.access_token = data.token;
      document.getElementById("my_modal_5").close()
      navigate('/')
      Swal.fire({
        title: "login success",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      document.getElementById("my_modal_5").close()
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  };


  return (
    <>
      {/* <div className="container px-2"> */}
      {/* <header className=" bg-teal-400 absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <Link
                to={"/"}
                href=""
                className="block py-6 text-lg font-bold text-black"
              >
                Wadidaw Auction
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button type="button" className="block absolute right-4 ">
                <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
              </button>
            </div>
          </div>
        </div>
      </header> */}
      <div className="navbar bg-white border shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={'/'} className="btn btn-ghost font-semibold text-teal-500 text-3xl">
            Wadidaw Auction
          </Link>
        </div>
        <div className="navbar-end">
        {localStorage.access_token ? (
                <Link
                  className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    localStorage.removeItem("access_token");
                    navigate("/");
                  }}
                >
                  Logout
                </Link>
              ) : (
                <button
                className="btn semi-bold text-teal-500 "
                onClick={() => document.getElementById("my_modal_5").showModal()}
              >
                Login
              </button>
              )}

          {/* modal */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg flex justify-center">Hello!</h3>
              <form onSubmit={handleFormLogin}>
                <p className="py-4 flex justify-center">
                  <input
                    type="text"
                    name="email"
                    className="py-2 px-4 rounded-md text-xl mb-2 ml-5 border"
                    placeholder="Enter Your Email"
                    onChange={handleInput}
                  />
                </p>
                <p className="py-4 flex justify-center">
                  <input
                    type="password"
                    name="password"
                    className="py-2 px-4 rounded-md text-xl mb-2 ml-5 border"
                    placeholder="Enter Your Password"
                    onChange={handleInput}
                  />
                </p>
                <p className="py-4 flex justify-center">
                  <button
                    type="submit"
                    className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-outflex justify-items-center"
                  >
                    Submit
                  </button>
                  <Link to={'/regis'}
                    type="submit"
                    className="ml-3 text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-outflex justify-items-center"
                  >
                    Register
                  </Link>

                </p>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
           {/*end modal */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
