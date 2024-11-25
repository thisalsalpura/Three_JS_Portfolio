import React from 'react';
import { Float, useGLTF } from '@react-three/drei';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb')

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isLarge = useMediaQuery({ minWidth: 2560 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isLarge);

    return (
        <Float floatIntensity={2} speed={3}>
            <group {...props}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={sizes.reactLogoPosition}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={sizes.reactLogoScale}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;
