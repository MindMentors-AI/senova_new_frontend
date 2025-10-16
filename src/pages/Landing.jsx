import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import Loader from "../components/Loader";
import TryIt from "../components/landing/TryIt";
import OurValue from "../components/landing/OurValue";
import Team from "../components/landing/Team";

const Landing = () => {
  return (
    <main className="w-full overflow-hidden relative font-[sf]">
      {/* <Loader/> */}
      <Navbar />
      <Hero />
      <TryIt />
      <OurValue />
      <Team />
    </main>
  );
};

export default Landing;
