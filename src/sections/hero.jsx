import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader"
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Computer from "../components/Computer";
import HeroCamara from "../components/HeroCamara";
import Button from "../components/Button";

const Hero = () => {
    // const x = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },

    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },

    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10,
    //     }   
    // });

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isLarge = useMediaQuery({ minWidth: 2560 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isLarge);

    return (
        <section className="min-h-screen w-full flex flex-col relative">

            <div className="w-full mx-auto flex flex-col sm:mt-32 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-kanit">Hi, I'm Thisal <span className="waving-hand">👋</span></p>
                <p className="hero-tag text-gray_gradient text-center">Building Products & Brand</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamara>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamara>
                        <group>
                            <Target />
                            <ReactLogo />
                            <Cube />
                            <Computer />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 5, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>

        </section>
    );
};

export default Hero;