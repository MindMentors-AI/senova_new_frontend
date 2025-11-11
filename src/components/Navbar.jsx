import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.in", willChange: "transform opacity" },
    });

    tl.from(
      ".left",
      {
        y: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
      },
      ">+2.2"
    );
    tl.from(
      ".middle",
      {
        y: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
      },
      "-=0.3"
    );
    tl.from(
      ".right",
      {
        y: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
      },
      "-=0.3"
    );
  }, []);

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

  const linksRef = useRef([]);

  useEffect(() => {
    // initialize opacity
    gsap.set(linksRef.current, { opacity: 1 });
  }, []);

  const handleMouseEnter = (index) => {
    linksRef.current.forEach((el, i) => {
      if (i !== index) {
        gsap.to(el, { opacity: 0.3, duration: 0.3, ease: "power2.in" });
      } else {
        gsap.to(el, { opacity: 1, duration: 0.3, ease: "power2.in" });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.to(linksRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <>
      <header className="w-full px-12 py-6 fixed top-0 z-50 overflow-hidden">
        <nav className="w-full flex items-center justify-between">
          <Link to="/">
            <div className="left p-6 text-[#dedede] bg-[#4a4a4a] rounded-full flex items-center justify-center cursor-pointer">
              <GoHomeFill size={30} />
            </div>
          </Link>
          <div className="middle px-20 py-4 bg-[#6f6f6f] text-white rounded-full flex items-center justify-center gap-4 cursor-pointer">
            <div className="img-container w-10">
              <img
                className="w-full h-full object-cover filter brightness-0 invert"
                src="https://www.senova.in/assets/logo.png"
                alt=""
              />
            </div>
            {/* <h1 className='font-medium'>Senova Ai</h1> */}
          </div>
          <div className="right p-6 rounded-full bg-[#4a4a4a] flex items-center justify-center cursor-pointer">
            {!ismenuopen && (
              <div
                className="menu w-8 h-fit flex flex-wrap"
                onClick={() => setismenuopen(true)}
              >
                <div className="1 size-4 rounded-full border-3 border-[#dedede]"></div>
                <div className="2 size-4 rounded-full border-3 border-[#dedede]"></div>
                <div className="3 size-4 rounded-full border-3 border-[#dedede]"></div>
                <div className="4 size-4 rounded-full border-3 border-[#dedede]"></div>
              </div>
            )}
            {ismenuopen && (
              <div
                className="close text-[#dedede] flex flex-wrap"
                onClick={() => setismenuopen(false)}
              >
                <IoCloseSharp size={32} />
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="overlay-nav fixed right-[100%] z-40 top-0 w-full h-screen flex items-center justify-center text-[#dedede] bg-[#1e1e1e]">
        <nav className="overlay-nav-content w-full h-full flex items-center justify-center">
          <div className="left w-1/2 h-full flex items-center justify-center bg-[#dedede]">
            <div className="logo flex items-center gap-4">
              <div className="img-container w-32">
                <img
                  className="w-full h-full object-cover"
                  src="/logo.png"
                  alt=""
                />
              </div>
              <h1 className="text-[5vw] font-semibold text-[#1e1e1e]">
                Senova AI
              </h1>
            </div>
          </div>
          <div className="right w-1/2 h-full flex items-center justify-center bg-[#1e1e1e]">
            <div className="links flex items-center justify-center flex-col font-semibold uppercase text-[4vw]">
              {["Home", "Analysis", "Research", "About Us", "Contacts"].map(
                (text, index) => (
                  <Link
                    key={text}
                    className="links"
                    to={`/${
                      text === "Home" ? "" : text.toLowerCase().replace(" ", "")
                    }`}
                    ref={(el) => (linksRef.current[index] = el)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {text}
                  </Link>
                )
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
