import React from "react";
import Orb from "../Orb";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full h-screen p-12 relative overflow-hidden z-0">
      <Orb
        hoverIntensity={0.3}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
      <div className="overlay absolute inset-0 w-full h-screen pointer-events-none flex items-center justify-center flex-col gap-20 px-60 text-[#4C3425] font-semibold text-[7.5vw] leading-none">
        <div className="title-one w-full relative">
          Intelligent
          <div className="flex items-center gap-4 bg-[#9CB067] rounded-t-xl rounded-r-xl px-6 py-3 w-fit shadow-md absolute left-[40%] -top-8 text-[.9vw] leading-tight text-white font-normal">
            <span className="flex items-center justify-center rounded-full bg-white/20 w-10 h-10">
              <svg width="26" height="26" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="4.5" r="1.5" fill="#fff" fillOpacity="0.8" />
                <circle
                  cx="4.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle
                  cx="13.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle cx="9" cy="9" r="1.5" fill="#fff" fillOpacity="0.8" />
              </svg>
            </span>
            <span>
              How to be happy and stop
              <br />
              worrying all the time?
            </span>
          </div>
        </div>
        <div className="title-two w-full text-center relative">
          Mental Health
          <div className="flex items-center gap-4 bg-[#F98C5C] rounded-b-xl rounded-l-xl px-6 py-3 w-fit shadow-md absolute left-14 -bottom-26 text-[.9vw] leading-tight text-left text-white font-normal">
            <span className="flex items-center justify-center rounded-full bg-white/20 w-10 h-10">
              <svg width="26" height="26" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="4.5" r="1.5" fill="#fff" fillOpacity="0.8" />
                <circle
                  cx="4.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle
                  cx="13.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle cx="9" cy="9" r="1.5" fill="#fff" fillOpacity="0.8" />
              </svg>
            </span>
            <span>
              I understand. It's important to
              <br />
              seek support and talk to a mental
              <br />
              health professional. I can provide
              <br />
              you with resources.
            </span>
          </div>
        </div>
        <div className="title-three w-full text-right relative">
          AI Chatbot
          <div className="flex items-center gap-4 bg-[#906246] rounded-r-xl rounded-b-xl px-6 py-3 w-fit shadow-md absolute left-[72%] -bottom-20 text-[.9vw] leading-tight text-white text-left font-normal">
            <span className="flex items-center justify-center rounded-full bg-white/20 w-10 h-10">
              <svg width="26" height="26" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="4.5" r="1.5" fill="#fff" fillOpacity="0.8" />
                <circle
                  cx="4.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle
                  cx="13.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle cx="9" cy="9" r="1.5" fill="#fff" fillOpacity="0.8" />
              </svg>
            </span>
            <span>
              Let's focus on self-care activities,<br />
              like engaging in hobbies,<br />
              connecting with loved ones!
            </span>
          </div>
        </div>
      </div>
      <div className="play-btn absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#4C3425] text-white rounded-full cursor-pointer px-6 py-4 flex items-center justify-center gap-2 leading-none"><FaPlay /><span className="text-[1.2vw] font-medium">Play</span></div>
    </section>
  );
};

export default Hero;
