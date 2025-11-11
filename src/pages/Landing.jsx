import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import About from "../components/landing/About";
import How from "../components/landing/How";
import Testimonials from "../components/landing/Testimonials";

const Landing = () => {
  return (
    <main className="w-full overflow-hidden relative font-[sf]">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <How />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Landing;
