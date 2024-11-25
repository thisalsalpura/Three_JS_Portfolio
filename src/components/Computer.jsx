import React, { useRef } from 'react';
import { Float, useGLTF } from '@react-three/drei';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const Computer = (props) => {
    const { nodes, materials } = useGLTF('/models/computer.glb')

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isLarge = useMediaQuery({ minWidth: 2560 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isLarge);

    return (
        <Float floatIntensity={2} speed={3} >
            <group {...props} dispose={null} position={sizes.computerPosition} rotation={[-Math.PI / 2, 0, 0]} scale={sizes.computerScale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_screen_0.geometry}
                    material={materials.screen}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_computer_0.geometry}
                    material={materials.computer}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_keyboard_0.geometry}
                    material={materials.keyboard}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_keys_0.geometry}
                    material={materials.keys}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/computer.glb')

export default Computer;
