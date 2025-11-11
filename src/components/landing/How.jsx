import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { FaDownload } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const How = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".papa",
        start: "top top",
        end: "200% top",
        // markers : true,
        scrub: 0.3,
        pin: true,
        pinSpacing: true,
      },
      defaults: { ease: "none", willChange: "transform" },
    });

    tl.to(".scroll", {
      xPercent: -65,
    });
  }, []);

  return (
    <section className="h-screen papa overflow-hidden">
      <div className="w-[280vw] scroll bg-[#dedede] h-full flex items-center justify-center">
        <div className="w-screen h-full py-20">
          {/* <div className="title text-[#1e1e1e] text-[5vw] font-semibold text-center">How to use Senova AI</div> */}
          <div className="w-full h-full flex items-center justify-center text-center flex-col">
            <h2 className="text-[3vw] font-semibold">
              Senova AI Extension Setup
            </h2>
            <p className="w-[50%] text-[#4a4a4a] text-[1.2vw] leading-[1.3] font-medium">
              Follow these simple steps to load the Senova AI extension and
              begin your journey to mindful learning.
            </p>
            <p className="text-[#1e1e1e] text-[2vw] leading-[1.3] font-semibold mt-6">
              Step-1
            </p>
            <p className="text-[#4a4a4a] text-[1.5vw] leading-[1.3] font-semibold">
              Download the extension below
            </p>
            <a href="./extension.zip" download="Senova-AI-Extension.zip">
              <button className="bg-[#1e1e1e] cursor-pointer text-[#dedede] text-[1vw] font-semibold px-6 py-2 rounded-full mt-4 flex items-center gap-2 hover:shadow-md transition-all duration-300">
                Download Extension
                <FaDownload />{" "}
              </button>
            </a>
          </div>
        </div>
        <div className="w-[60vw] h-full flex items-center justify-center text-center text-[#4a4a4a]">
          <div className="stpe2 w-full h-full flex items-center justify-center flex-col">
            <p className="text-[#1e1e1e] text-[2vw] leading-[1.3] font-semibold">
              Step-2
            </p>
            <p className="text-[#4a4a4a] text-[1.5vw] leading-[1.3] font-semibold mt-4">
              Open Extension Settings
            </p>
            <p className="text-[#4a4a4a] w-[80%] text-[1.5vw] leading-[1.3] font-semibold">
              In Chrome, click the three-dot menu (⋮), go to Extensions, then
              Manage Extensions. Or, type chrome://extensions in your address
              bar.
            </p>
            <div className="overflow-hidden w-[70%] h-[50%] mt-10">
              <img
                className="w-full h-full object-contain rounded-xl shadow-md "
                src="/1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[60vw] h-full flex items-center justify-center text-center text-[#4a4a4a]">
          <div className="stpe3 w-full h-full flex items-center justify-center flex-col">
            <p className="text-[#1e1e1e] text-[2vw] leading-[1.3] font-semibold">
              Step-3
            </p>
            <p className="text-[#4a4a4a] text-[1.5vw] leading-[1.3] font-semibold mt-4">
              Enable Developer Mode
            </p>
            <p className="text-[#4a4a4a] w-[80%] text-[1.5vw] leading-[1.3] font-semibold">
              On the "Extensions" page, find and enable the Developer mode
              toggle switch, usually in the top-right corner. bar.
            </p>
            <div className=" overflow-hidden  w-[70%] h-[50%] mt-10">
              <img
                className="w-full h-full object-contain rounded-xl shadow-md " 
                src="/2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[60vw] h-full flex items-center justify-center text-center text-[#4a4a4a]">
          <div className="stpe4 w-full h-full flex items-center justify-center flex-col">
            <p className="text-[#1e1e1e] text-[2vw] leading-[1.3] font-semibold">
              Step-4
            </p>
            <p className="text-[#4a4a4a] text-[1.5vw] leading-[1.3] font-semibold mt-4">
              Load Unpacked Extension
            </p>
            <p className="text-[#4a4a4a] w-[80%] text-[1.5vw] leading-[1.3] font-semibold">
              With developer mode enabled, click the Load unpacked button.
              Select the unzipped extension folder (the one containing
              manifest.json).
            </p>
            <div className=" overflow-hidden  w-[70%] h-[50%] mt-10">
              <img
                className="w-full h-full object-contain  rounded-xl shadow-md "
                src="/3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
