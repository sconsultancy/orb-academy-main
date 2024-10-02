"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    document.querySelector("body").style.overflowX = "hidden";
  }, []);

  const linkList = [
    { title: "Home", link: "/home" },
    {
      title: "Classes",
      link: "/classes",
    },
    {
      title: "Resources",
      link: "/resources",
    },
    {
      title: "Support",
      link: "/support",
    },
    {
      title: "Contact",
      link: "/contact_us",
    },
  ];

  const handleBurgerClick = (e) => {
    e.preventDefault();
    setBurger(!burger);
    const burgLinks = document.querySelectorAll(".burgLink");
  };

  console.log(burger);
  return (
    <div
      id="header"
      className={`flex justify-around p-4 items-center h-[100px] bg-gradient-to-r 
        fixed w-[99.5vw]
        from-[rgba(255,255,255,0.1)] 
        to-[rgba(255,255,255,0)] 
        backdrop-blur-md z-50 
        border rounded-3xl 
        border-[rgba(255,255,255,0.1)]  
        shadow-md`}
    >
      <div className="flex">
        <h1 className=" font-black text-2xl">ORB Academy</h1>
      </div>
      {/* Nav Link */}
      <div className="lg:flex  max-lg:hidden ">
        <Link href="/" className=" font-semibold mx-3">
          Home
        </Link>
        <Link href="/classes" className=" font-semibold mx-3">
          Classes
        </Link>
        <Link href="/resources" className=" font-semibold mx-3">
          Resources
        </Link>
        <Link href="/support" className=" font-semibold mx-3">
          Support
        </Link>
        <Link href="/contact_us" className=" font-semibold mx-3">
          Contact Us
        </Link>
      </div>
      <div className="flex space-x-8 max-sm:space-x-1">
        <button className="w-36 h-14 border border-black rounded-full font-semibold  max-sm:w-28">
          Login
        </button>
        <button className=" bg-black text-white font-semibold w-36 h-14 rounded-full max-sm:w-28  ">
          Signup
        </button>
      </div>
      {/* Burger Nav */}
      <button className=" lg:hidden max-lg:inline" onClick={handleBurgerClick}>
        <div
          className={` w-6 h-1 bg-black m-1 ${
            burger ? "rotate-45  translate-y-[7px]" : ""
          } transition-all  duration-300  ease-in `}
        ></div>
        <div
          className={` w-6 h-1 bg-black m-1 ${
            burger ? " opacity-0" : ""
          } transition-all  duration-300  ease-in `}
        ></div>
        <div
          className={` w-6 h-1 bg-black m-1 ${
            burger ? "-rotate-45  translate-y-[-9px]" : ""
          } transition-all  duration-300  ease-in `}
        ></div>
      </button>

      {/* Mobile Navbar */}
      <div
        className={` absolute
       right-0 h-[88vh]
        top-[100px] 
        bg-gradient-to-r 
        from-[rgba(255,255,255,0.1)] 
        to-[rgba(255,255,255,0)] 
        backdrop-blur-md z-50 w-[50vw] 
        border rounded-3xl 
        border-[rgba(255,255,255,0.1)]  
        shadow-xl
        flex
         flex-col
          items-center
           justify-evenly 
           ${burger ? " translate-x-0" : "translate-x-full "}

           transition
            transform
         duration-500
          ease-in
            
        `}
      >
        <Link
          href="/"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[700ms]`}
        >
          Home
        </Link>
        <Link
          href="/classes"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[900ms]`}
        >
          Classes
        </Link>
        <Link
          href="/resources"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[1100ms]`}
        >
          Resources
        </Link>
        <Link
          href="/support"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[1300ms]`}
        >
          Support
        </Link>
        <Link
          href="/contact_us"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[1500ms]`}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
