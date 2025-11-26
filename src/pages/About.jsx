import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../components/Scene";
import { useRef } from "react";
import { useEffect } from "react";

const CameraController = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position (-1 to 1)
      mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    // Camera position ko smoothly update karo
    const targetX = mousePosition.current.x * 0.2;
    const targetY = mousePosition.current.y * 0.2;

    camera.position.x += (targetX - camera.position.x) * 0.1;
    camera.position.y += (targetY - camera.position.y) * 0.1;

    // Camera ko center ki taraf point karo
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const About = () => {
  return (
    <>
    <Loader/>
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-full z-1">
        <Canvas id="canvas">
          {/* <OrbitControls enableDamping={true} /> */}
          <CameraController />
          {/* <Scene /> */}
        </Canvas>
      </div>
      {/* <section className="papa-div w-full h-full absolute top-0 left-0 z-2"> */}
      <main className="w-full overflow-hidden relative font-[sf]">
        <div className="w-full h-screen bg-red-500"> </div>
        <div className="w-full h-screen bg-green-500"> </div>
        <div className="w-full h-screen bg-yellow-500"> </div>
        </main>
      {/* </section> */}
      <Footer />
    </>
    
  );
};

export default About;
