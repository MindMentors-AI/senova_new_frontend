import React from "react";

const About = () => {
  return (
    <div className="w-full h-fit">
      <section className="w-full pt-40 flex items-center justify-center flex-col">
        <h1 className="text-[4vw] text-[#1e1e1e] font-semibold">Features</h1>
        <p className="w-[50%] text-[#4a4a4a] text-[1.2vw] leading-[1.2] font-medium text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          architecto id numquam ullam facere, provident adipisci inventore sed.
          Earum, laudantium.
        </p>
      </section>
      <section className="w-full h-screen flex items-center text-center justify-end px-40">
        <div className="w-1/2 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col">
          <h1 className="text-[#1e1e1e] text-[3vw] leading-none font-semibold mb-4">
            Cognitive Reflection AI
          </h1> 
          <p className="text-[#4a4a4a] text-[1.2vw] leading-[1.3] font-medium">
            Creates interactive quizzez from user promptsand AI response
            allowing Senova to test understanding and ensure the user has truly
            learnednot just copied.
          </p>
        </div>
      </section>
      <section className="w-full h-screen flex items-center text-center justify-start px-40">
        <div className="w-1/2 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col">
          <h1 className="text-[#1e1e1e] text-[3vw] leading-none font-semibold mb-4">
            Emotional and Congnitive Monitoring
          </h1>
          <p className="text-[#4a4a4a] text-[1.2vw] leading-[1.3] font-medium">
            Real-time sentiment analysis detects mental fatigue, stress, or
            congnitive oveload and suggests personalized interventions.
          </p>
        </div>
      </section>
      <section className="w-full h-screen flex items-center text-center justify-end px-40">
        <div className="w-1/2 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col">
          <h1 className="text-[#1e1e1e] text-[3vw] leading-none font-semibold mb-4">
            Browser Extension Integration
          </h1>
          <p className="text-[#4a4a4a] text-[1.2vw] leading-[1.3] font-medium">
            Seamlessly fits into ChatGPT, Gemini, and daily tools offering
            real-time cognitive wellness interventions.
          </p>
        </div>
      </section>
      <section className="w-full h-screen flex items-center text-center justify-start px-40">
        <div className="w-1/2 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col">
          <h1 className="text-[#1e1e1e] text-[3vw] leading-none font-semibold mb-4">
            Cognitive Training Environment
          </h1>
          <p className="text-[#4a4a4a] text-[1.2vw] leading-[1.3] font-medium">
            Embedded mini-games and exercises strengthen focus, memory, and
            problem-solving skills in a gamified format.
          </p>
        </div>
      </section>
      <section className="w-full h-screen flex items-center text-center justify-end px-40">
        <div className="w-1/2 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col">
          <h1 className="text-[#1e1e1e] text-[3vw] leading-none font-semibold mb-4">
            Privacy-First Architecture
          </h1>
          <p className="text-[#4a4a4a] text-[1.2vw] leading-[1.3] font-medium">
            Operates on user consent with session-based data only game scores
            (not prompts) are stored, ensuring complete privacy and trust.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
