import React from "react";
import { Model } from "./Model";
import { Environment, Text } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Suspense } from "react";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  return (
    <>
      <Environment preset="studio" />
      <Suspense>
        <Model scale={5} position-y={-6} position-x={5} rotation-y={-1.5} />
      </Suspense>
    </>
  );
};

export default Scene;
