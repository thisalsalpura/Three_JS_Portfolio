import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isLarge = useMediaQuery({ minWidth: 2560 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isLarge);

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    });

    return (
        <mesh {...props} ref={targetRef} position={sizes.targetPosition} rotation={[0, Math.PI / 5, 0]} scale={sizes.targetScale}>
            <primitive object={scene} />
        </mesh>
    )
};

export default Target;
