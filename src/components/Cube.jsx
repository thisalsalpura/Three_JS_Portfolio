import React, { useRef } from 'react';
import { Float, useGLTF } from '@react-three/drei';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const Cube = (props) => {
    const { nodes, materials } = useGLTF('/models/cube.glb')

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isLarge = useMediaQuery({ minWidth: 2560 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isLarge);

    return (
        <Float {...props} dispose={null} floatIntensity={2} speed={3} position={sizes.cubePosition} rotation={[0, Math.PI / 12, 0]} scale={sizes.cubeScale}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube1_lambert3_0.geometry}
                material={materials.lambert3}
                position={[0, 0.85, 0]}
                rotation={[-0.087, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube2_lambert2_0.geometry}
                material={materials.lambert2}
                position={[0, 0.85, 0]}
                rotation={[-0.087, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube3_lambert4_0.geometry}
                material={materials.lambert4}
                position={[0.15, 0.25, 0]}
                scale={[0.05, 0.5, 0.05]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube4_lambert4_0.geometry}
                material={materials.lambert4}
                position={[-0.15, 0.25, 0]}
                scale={[0.05, 0.5, 0.05]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube5_lambert4_0.geometry}
                material={materials.lambert4}
                position={[0.525, 0.552, 0]}
                rotation={[0.087, 0, 0]}
                scale={[0.05, 0.6, 0.05]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube6_lambert4_0.geometry}
                material={materials.lambert4}
                position={[-0.53, 0.552, 0]}
                rotation={[-3.054, 0, -Math.PI]}
                scale={[0.05, 0.6, 0.05]}
            />
        </Float>
    )
}

useGLTF.preload('/models/cube.glb')

export default Cube;
