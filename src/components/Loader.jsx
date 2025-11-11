import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Loader = () => {
  useGSAP(() => {
    document.querySelectorAll(".loader-circle").forEach((circle, index) => {
      gsap.fromTo(
        circle,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power2.in",
        }
      );
    });
    gsap.fromTo(
      ".loader-container",
      {
        rotate: 0,
      },
      {
        rotate: 360,
        duration: 2,
        ease: "none",
        repeat: -1,
      }
    );

    gsap.to(".loader", {
      yPercent: -100,
      duration: 0.3,
      delay: 2,
      ease: "power2.out",
      onComplete: () => {
        document.querySelector(".loader").style.display = "none";
      },
    });
  }, []);

  return (
    <div className="loader w-full h-screen flex justify-center items-center fixed top-0 left-0 z-[99999] bg-[#4a4a4a] cursor-wait">
      <div className="loader-container flex items-center justify-center flex-wrap gap-3 w-32 h-fit rotate-45 user-select-none">
        <div className="loader-circle w-12 h-12 rounded-full bg-[#dedede]"></div>
        <div className="loader-circle w-12 h-12 rounded-full bg-[#dedede]"></div>
        <div className="loader-circle w-12 h-12 rounded-full bg-[#dedede]"></div>
        <div className="loader-circle w-12 h-12 rounded-full bg-[#dedede]"></div>
      </div>
    </div>
  );
};

export default Loader;
