import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false);

  if (ismenuopen) {
    gsap.to(".overlay-nav", {
      right: "0%",
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.fromTo(
      ".overlay-head",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
      ">0.05"
    );
  } else {
    gsap.to(".overlay-nav", {
      right: "100%",
      duration: 0.5,
      ease: "power2.out",
    });
  }
  useGSAP(() => {}, []);

  return (
    <>
      <header className="w-full px-12 py-6 fixed top-0 z-50 overflow-hidden">
        <nav className="w-full flex items-center justify-between">
          <Link to="/">
            <div className="left p-6 bg-[#906246] text-white rounded-full flex items-center justify-center cursor-pointer">
              <GoHomeFill size={30} />
            </div>
          </Link>
          <div className="middle px-20 py-4 bg-[#4C3425] text-white rounded-full flex items-center justify-center gap-4 cursor-pointer">
            <div className="img-container w-10">
              <img
                className="w-full h-full object-cover filter brightness-0 invert"
                src="https://www.senova.in/assets/logo.png"
                alt=""
              />
            </div>
            {/* <h1 className='font-medium'>Senova Ai</h1> */}
          </div>
          <div className="right p-6 rounded-full bg-[#906246] flex items-center justify-center cursor-pointer">
            {!ismenuopen && (
              <div
                className="menu w-8 h-fit flex flex-wrap"
                onClick={() => setismenuopen(true)}
              >
                <div className="1 size-4 rounded-full border-3 border-white"></div>
                <div className="2 size-4 rounded-full border-3 border-white"></div>
                <div className="3 size-4 rounded-full border-3 border-white"></div>
                <div className="4 size-4 rounded-full border-3 border-white"></div>
              </div>
            )}
            {ismenuopen && (
              <div
                className="close text-white flex flex-wrap"
                onClick={() => setismenuopen(false)}
              >
                <IoCloseSharp size={32} />
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="overlay-nav fixed right-[100%] z-40 top-0 w-full h-screen flex items-center justify-center text-white bg-[#9CB067]">
        <nav
          className="overlay-nav-content flex flex-col items-center gap-10"
        >
          <h1 className="overlay-head text-4xl font-bold mb-8">Senova AI</h1>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
