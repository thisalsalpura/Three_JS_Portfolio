import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {

    const [hasCopied, setHasCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("salpurathisal@gmail.com");
        setHasCopied(true);
        setTimeout(() => { setHasCopied(false) }, 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid lg:grid-cols-3 lg:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 lg:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Thisal</p>
                            <p className="grid-subtext">Undergraduate of Software Engineering, I have honed my skills in web development
                                with frontent development and backend development and focusing 3D animation.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 lg:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialized HTML, CSS, JavaScript, React and Three.JS and Next.JS Frameworks.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 lg:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5}
                                showAtmosphere showGraticules globeImageUrl={'//unpkg.com/three-globe/example/img/earth-night.jpg'}
                                labelsData={[{
                                    lat: 6.828158348121558, lng: 79.86585649213968,
                                    text: "I'm Here!",
                                    color: 'white',
                                    size: 20,
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I'm based in Sri Lanka, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love sloving problems and building things through code. Coding issn't
                                justmy profession, It's my passion.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 lg:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">salpurathisal@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default About;