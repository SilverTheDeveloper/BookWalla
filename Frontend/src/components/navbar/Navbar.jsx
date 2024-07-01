import React, { useState, useEffect } from 'react'
import { Link,NavLink } from 'react-router-dom';
import Login from '../Login.jsx'
function Navbar() {

  // const [theme, settheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getitem("theme") :"light"
  // );
  // const element= document.documentElement;
  // useEffect(() => {
  //   if (theme === "dark") {
  //     element.classList.add("dark");
  //     localStorage.setitem("theme","dark");
  //     document.body.classList.add("dark");
  //   }else {
  //     element.classList.remove("dark");
  //     localStorage.setitem("theme","light");
  //     document.body.classList.remove("dark");
  //   }  
  // }, []);
  // const [theme, settheme] = useState("light");

  localStorage.setitem
  const Navitems = (
    <>

      <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
      <li><NavLink to="/course" className={({ isActive }) => isActive ? "active" : ""}>Course</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>

    </>

  )

  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    }
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <>
      <div className={`z-50 max-w-screen-2xl container mx-auto md:px-20 px-4 sticky top-0 ${sticky ? "stickey-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""}`}>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {Navitems}

              </ul>
            </div>
            <Link to='/' className=" text-2xl font-bold  cursor-pointer ">BookWalla</Link>
          </div>

          <div className="navbar-end">

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-2">
                {Navitems}

              </ul>
            </div>
            <div className='hidden md:block'>
              <label className=" px-3 py-2 border rounded-md flex items-center gap-2 mx-2">
                <input type="text" className="grow outline-none" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>

              </label>


            </div>

          


          </div>
          <div className=" ml-6 ">
            <Login class='bg-black text-white rounded-md hover:bg-slate-400 px-3 py-1 mx-1  hover:text-black duration-300 ' links={<p>Not registered <NavLink to='/signup'><span className='underline text-blue-500 cursor-pointer' >
                Sign up?
              </span></NavLink> </p>} />
          </div>
        </div></div>
    </>
  )
}

export default Navbar
