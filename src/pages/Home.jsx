// Importing modules
import { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ParticalBackground from "../components/ParticalBackground";


// Import CSS
import "../index.css";
import About from "./About";
import Logo from "../components/Logo";

const Home = () => {
const style ={
  background: "#000000",
  background: " -webkit-linear-gradient(bottom,#000000,#3c1053)",
  background: " -moz-linear-gradient(bottom,#000000,#3c1053)",
  background: "linear-gradient(to top,#000000,#3c1053)",
}

  // Getting Reference for animation
  let strn = useRef(null);
  let astro = useRef(null);

  // Registring Plugins
  gsap.registerPlugin(ScrollTrigger);

  // Animations on render
  useEffect(() => {
    console.clear();

    //  timeline for animation
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power4.easeInOut },
    });

 

    // ! TimeLine Animation
    tl.to(strn, {
        scrollTrigger: {
          trigger: "#home_main",
          start: "10% top",
          end: "20% top",
          scrub: 0.8,
        },
        zIndex: 40,
        scale: 1.2,
        y: -300,
        delay: 10,
        x: 760,
      })
      .to(astro, {
        scrollTrigger: {
          trigger: "#home_main",

          start: "10% top",
          end: "20% top",
          scrub: 1,
        },
        zIndex: 40,
        scale: 1.2,
        x: -760,
        y: -300,
      })
      .to(
          "#home_main",
          {
            scrollTrigger: {
              trigger: ".tt",
              start: "10% top",
              end: "30% top",
              scrub: 1,
            },
            delay: 10,
            y: -100,
          },
          "+=1"
        );
  });

  //? Actual render
  return (
    <>
    {/* Home Page */}
      <div
        className=" overflow-hidden bg-no-repeat bg-cover z-10 w-full h-screen relative top-0 left-0"
        style={style}
        id="home_main"
      >
      <ParticalBackground/>

        <div className="overflow-hidden" id="image_wraper">
          {/* Side-Images Start */}
          <section className="overflow-hidden scroll-smooth w-full h-screen grid grid-cols-2 content-evenly gap-20 md:gap-52 lg:gap-[20rem] pb-2 md:pb-10 lg:pb-40 p-2 relative top-0 bottom-0 left-0 right-0">
            <img className="lg:w-72" src="/assets/astro1.png" alt="astro" id="animate" />
            <img className="lg:w-72 lg:ml-64" src="/assets/satellite.webp" alt="satellite" id="animate2" />
            <img
              ref={(el) => {
                strn = el;
              }}
              className="z-50 lg:w-72"
              src="/assets/saturn.webp"
              alt="planet"
            />
            <img
              ref={(el) => {
                astro = el;
              }}
              className="z-50 lg:w-72 lg:ml-64"
              src="/assets/astro3.webp"
              alt="astro2"
            />
          </section>
          {/* Side-Images End */}
          {/* Hero-Images Start */}
          <div className="w-screen h-screen flex justify-center items-center flex-col absolute top-0 m-auto overflow-hidden">
            <Logo/>
          </div>
          {/* Hero-Images End */}
        </div>
      </div>

      {/* Other Pages */}
      <div className=" w-screen" id="about">
        <About />
      </div>
    </>
  );
};

export default Home;
