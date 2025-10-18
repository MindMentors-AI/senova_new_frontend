import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-screen overflow-hidden relative px-6 mt-4">
      <div className="bg w-full h-full bg-[#4C3425] rounded-[60px] overflow-hidden">
        <div className="decor relative w-full h-full overflow-hidden">
          <div className="circle absolute -top-[40%] -left-[40%] w-[80vw] h-[80vw] rounded-full bg-[#906246]"></div>
          <div className="circle absolute -bottom-[130%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-[#906246]"></div>
        </div>
        <div className="ovelay w-full h-full absolute top-0 left-0 p-40 flex items-center justify-center gap-40 ">
          <div className="left w-1/2 h-full px-20 pt-20">
            <ul className="text-[3.5vw] font-bold text-white leading-none flex flex-col gap-10">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Dashboard</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="right w-1/2 h-full text-white pt-20">
            <div className="head">
              <div className="logo flex items-center gap-2">
                <div className="img-container w-14">
                  <img
                    className="w-full h-full object-cover filter brightness-0 invert"
                    src="https://www.senova.in/assets/logo.png"
                    alt=""
                  />
                </div>
                <h1 className="text-[3vw] font-bold">Senova AI</h1>
              </div>
              <p className="my-10 text-[2vw] font-medium leading-tight">
                We use the power of AI technology to
                <br />
                revolutionize mental health.
              </p>
            </div>
            <div className="links-copyright text-[.9vw]">
              <p>COPYRIGHT 2025. ALL RIGHTS RESERVED</p>
              <ul>
                <li className="cursor-pointer">TERMS & CONDITION</li>
                <li className="cursor-pointer">PRIVACY POLICY</li>
              </ul>
            </div>
          </div>
          <div className="btm absolute bottom-4 px-12 left-0 w-full ">
            <div className="w-full p-4 bg-white rounded-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* App store buttons */}
              <button className="flex items-center gap-2 bg-[#9CB067] text-white px-4 py-2 rounded-full font-medium text-[.95vw] shadow group transition hover:bg-[#7da14f]">
                <span className="bg-white/70 text-[#9CB067] px-2 py-1 rounded-full">Apple Store</span>
                <span className="ml-2 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.5 8h5m0 0l-2-2m2 2l-2 2" stroke="#9CB067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <button className="flex items-center gap-2 bg-[#F98C5C] text-white px-4 py-2 rounded-full font-medium text-[.95vw] shadow group transition hover:bg-[#db783f]">
                <span className="bg-white/70 text-[#F98C5C] px-2 py-1 rounded-full">Google Play</span>
                <span className="ml-2 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.5 8h5m0 0l-2-2m2 2l-2 2" stroke="#F98C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex items-center gap-3 bg-[#F6F4F2] px-4 py-2 rounded-full">
              {/* Social Icons */}
              <span className="p-2 rounded-full bg-[#4C3425]/10 flex items-center justify-center text-[#4C3425]">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d="M14 8a6 6 0 1 0-6 6M10.5 8H6.9M8 6.9V10.5" stroke="#4C3425" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="p-2 rounded-full bg-[#4C3425]/10 flex items-center justify-center text-[#4C3425]">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <rect x="2" y="2" width="12" height="12" rx="3" stroke="#4C3425" strokeWidth="1.5"/>
                  <path d="M5.5 7.5v3m2.5-3v3m2.5-2.5V11m-8-7h10" stroke="#4C3425" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="p-2 rounded-full bg-[#4C3425]/10 flex items-center justify-center text-[#4C3425]">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <rect x="2" y="2" width="12" height="12" rx="4" stroke="#4C3425" strokeWidth="1.5"/>
                  <path d="M10 5.5 6 10M6 5.5l4 4" stroke="#4C3425" strokeWidth="1.2"/>
                </svg>
              </span>
            </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
