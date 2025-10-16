import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaBrain, FaRobot } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";

const TryIt = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden px-6 mt-4">
      <div className="inner w-full h-full bg-[url(./sec2-bg.png)] bg-cover overflow-hidden rounded-[60px] flex items-center justify-center gap-30 px-40 py-40">
        <div className="left w-1/2 h-full flex flex-col gap-10">
          <div className="heading">
            <h1 className="text-[3.5vw] font-bold text-white leading-tight">
              We believe that mental health support should be{" "}
              <span className="text-[#906246]">accessiable</span> to everyone.
            </h1>
          </div>
          <div className="benifit">
            <h1 className="sub-head text-[1vw] text-white mb-2">
              OUR BENEFITS
            </h1>
            <div className="options flex flex-col gap-2">
              <div className="option bg-[#906246] px-4 py-3 rounded-3xl flex items-center justify-between">
                <div className="parent flex items-center inset-x-0 gap-2">
                  <div className="svg p-4 bg-[#F98C5C] rounded-full text-white">
                    <MdSupportAgent size={30} />
                  </div>
                  <div className="text">
                    <h1 className="text-white text-[1vw] font-semibold">
                      AI-Powered Conversations
                    </h1>
                    <p className="text-white/50 text-[.8vw]">
                      Engage in empathetic and supportive dialogues with our
                      advanced AI.
                    </p>
                  </div>
                </div>
                <div className="icon size-3 bg-[#F98C5C] rounded-full"></div>
              </div>
              <div className="option bg-[#906246] px-4 py-3 rounded-3xl flex items-center justify-between">
                <div className="parent flex items-center inset-x-0 gap-2">
                  <div className="svg p-4 bg-[#F98C5C] rounded-full text-white">
                    <FaRobot size={30} />
                  </div>
                  <div className="text">
                    <h1 className="text-white text-[1vw] font-semibold">
                      AI-Powered Conversations
                    </h1>
                    <p className="text-white/50 text-[.8vw]">
                      Engage in empathetic and supportive dialogues with our
                      advanced AI.
                    </p>
                  </div>
                </div>
                <div className="icon size-3 bg-[#F98C5C] rounded-full"></div>
              </div>
              <div className="option bg-[#906246] px-4 py-3 rounded-3xl flex items-center justify-between">
                <div className="parent flex items-center inset-x-0 gap-2">
                  <div className="svg p-4 bg-[#F98C5C] rounded-full text-white">
                    <FaBrain size={30} />
                  </div>
                  <div className="text">
                    <h1 className="text-white text-[1vw] font-semibold">
                      AI-Powered Conversations
                    </h1>
                    <p className="text-white/50 text-[.8vw]">
                      Engage in empathetic and supportive dialogues with our
                      advanced AI.
                    </p>
                  </div>
                </div>
                <div className="icon size-3 bg-[#F98C5C] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="try flex items-center gap-4">
            <p className="text-[1.2vw] text-white font-medium">Try For Free</p>
            <div className="icon p-4 rounded-full bg-[#F98C5C]">
              <GoArrowRight size={30} />
            </div>
          </div>
        </div>
        <div className="right w-[40%] px-14 h-full relative">
          <div className="img-parent relative w-full h-full bg-[url(https://images.unsplash.com/photo-1632117531785-6e4959d9fb51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470)] bg-cover bg-center rounded-[40px] overflow-hidden relative p-6 text-white">
            <div className="title flex flex-col text-[1vw] leading-tight">
              <h1>Aakash Jaiswal</h1>
              <h2 className="text-[.9vw] text-white/80">IIT Mumbai, India</h2>
            </div>
          </div>
          <div className="mood absolute top-[30%] -right-0 bg-white p-4 rounded-2xl ">
            <h1 className="text-[.8vw]">Mental Health Level</h1>
            <h2 className="font-bold text-[1.5vw] mt-2">96%</h2>
            <div className="w-full h-2 mt-2">
              <div
                className="w-full h-full rounded-full overflow-hidden flex"
                style={{
                  background: "#ede6e4",
                }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "85%",
                    background: "#9CB067",
                    transition: "width 0.6s",
                  }}
                ></div>
                <div
                  className="h-full"
                  style={{
                    width: "15%",
                    // background left transparent to match rest
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="level absolute bottom-0 left-30 bg-white p-4 rounded-2xl">
            <h1 className="text-[.8vw] mb-4">Current Mood</h1>
            <div className="flex items-center justify-center gap-2">
              <div className="p-2 rounded-full bg-pink-300 text-white">
                <CiHeart size={30} />
              </div>
              <h2 className="font-bold text-[1.5vw] mt-2 leading-none">
                Happy
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryIt;
