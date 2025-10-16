import React from "react";

const OurValue = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden px-6 mt-4">
      <div className="inner w-full h-full bg-[#9CB067] text-white overflow-hidden rounded-[60px] flex items-center justify-center flex-col px-40 py-40">
        <div className="sub-title mb-4 bg-white/80 text-black px-2 py-1 rounded-full flex items-center gap-1">
          <div className="size-2 bg-[#9CB067] rounded-full"></div>
          <p>WHAT WE BELIEVE</p>
        </div>
        <div className="title">
          <h1 className="text-[3.5vw] font-semibold">Our Core Values</h1>
        </div>
        <div className="Cards-container w-full flex items-center justify-center gap-6 mt-20">
          <div className="card w-[30%] h-full flex flex-col gap-60 bg-white text-black p-6 rounded-4xl">
            <div className="img size-30 rounded-full overflow-hidden bg-black"></div>
            <div className="cntnt">
              <h2 className="text-[1.5vw] leading-tight font-medium">
                Beyond Intergity
              </h2>
              <p className="text-[1vw] leading-tight text-gray-500">
                We believe in Intergity for all
              </p>
            </div>
          </div>
          <div className="card w-[30%] h-full flex flex-col gap-60 bg-white text-black p-6 rounded-4xl">
            <div className="img size-30 rounded-full overflow-hidden bg-black"></div>
            <div className="cntnt">
              <h2 className="text-[1.5vw] leading-tight font-medium">
                Beyond Intergity
              </h2>
              <p className="text-[1vw] leading-tight text-gray-500">
                We believe in Intergity for all
              </p>
            </div>
          </div>
          <div className="card w-[30%] h-full flex flex-col gap-60 bg-white text-black p-6 rounded-4xl">
            <div className="img size-30 rounded-full overflow-hidden bg-black"></div>
            <div className="cntnt">
              <h2 className="text-[1.5vw] leading-tight font-medium">
                Beyond Intergity
              </h2>
              <p className="text-[1vw] leading-tight text-gray-500">
                We believe in Intergity for all
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
