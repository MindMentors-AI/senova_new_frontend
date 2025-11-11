import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/model-1.B_txL4GN.glb");
  const model = useRef(null);

  useGSAP(() => {
    // gsap.from(model.current.position,{
    //   x: 15,
    //   ease : "power4.in",
    //   duration : 0.5
    // },">=3")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "canvas",
        start: "top top",
        end: "650% top",
        // markers : true,
        scrub: 0.3,
      },
      defaults: { ease: "none", willChange: "transform scale " },
    });

    tl.to(
      model.current.position,
      {
        x: -2.5,
      },
      "a"
    );
    tl.to(
      model.current.rotation,
      {
        y: 0.5,
      },
      "a"
    );
    tl.to(
      model.current.position,
      {
        x: 5,
      },
      "b"
    );
    tl.to(
      model.current.rotation,
      {
        y: -1.5,
      },
      "b"
    );
    tl.to(
      model.current.scale,
      {
        x: 7,
        y: 7,
        z: 7,
      },
      "b"
    );
    tl.to(
      model.current.position,
      {
        y: -9,
      },
      "b"
    );
    tl.to(
      model.current.position,
      {
        x: -2.5,
      },
      "c"
    );
    tl.to(
      model.current.rotation,
      {
        y: 0.5,
      },
      "c"
    );
    tl.to(
      model.current.position,
      {
        y: -6,
      },
      "c"
    );
    tl.to(
      model.current.scale,
      {
        x: 5,
        y: 5,
        z: 5,
      },
      "c"
    );
    tl.to(
      model.current.position,
      {
        x: 5,
      },
      "d"
    );
    tl.to(
      model.current.rotation,
      {
        y: -1.5,
      },
      "d"
    );
    tl.to(
      model.current.scale,
      {
        x: 7,
        y: 7,
        z: 7,
      },
      "d"
    );
    tl.to(
      model.current.position,
      {
        y: -9,
      },
      "d"
    );
    tl.to(
      model.current.position,
      {
        x: -2.5,
      },
      "e"
    );
    tl.to(
      model.current.rotation,
      {
        y: 0.5,
      },
      "e"
    );
    tl.to(
      model.current.position,
      {
        y: -6,
      },
      "e"
    );
    tl.to(
      model.current.scale,
      {
        x: 5,
        y: 5,
        z: 5,
      },
      "e"
    );
    tl.to(
      model.current.position,
      {
        x: 5,
      },
      "f"
    );
    tl.to(
      model.current.rotation,
      {
        y: -1.5,
      },
      "f"
    );
    tl.to(
      model.current.scale,
      {
        x: 7,
        y: 7,
        z: 7,
      },
      "f"
    );
    tl.to(
      model.current.position,
      {
        y: -9,
      },
      "f"
    );
  }, []);

  return (
    <group ref={model} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rndr_pose_01_v2.geometry}
        material={materials.export_white_pose_01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.veins_1.geometry}
          material={materials.export_base}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/model-1.B_txL4GN.glb");
