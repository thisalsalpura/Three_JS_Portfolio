import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import { easing } from "maath";

const HeroCamara = ({ children }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.dampE(groupRef.current.rotation, [state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta);
    })

    return (
        <group ref={groupRef}>{children}</group>
    );
};

export default HeroCamara;