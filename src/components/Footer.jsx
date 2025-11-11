import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-screen overflow-hidden relative">
      <div className="bg w-full h-full bg-[#4a4a4a] overflow-hidden">
        <div className="decor relative w-full h-full overflow-hidden">
          <div className="circle absolute -top-[40%] -left-[40%] w-[80vw] h-[80vw] rounded-full bg-[#6f6f6f]"></div>
          <div className="circle absolute -bottom-[130%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-[#6f6f6f]"></div>
        </div>
        <div className="ovelay w-full h-full absolute top-0 left-0 p-40 flex items-center justify-center gap-40 ">
          <div className="left w-1/2 h-full px-20 pt-20">
            <ul className="text-[3vw] font-bold text-[#dedede] leading-none flex flex-col gap-10">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Analysis</li>
              <li className="cursor-pointer">Research</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contacts</li>
            </ul>
          </div>
          <div className="right w-1/2 h-full text-[#dedede] pt-20">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
