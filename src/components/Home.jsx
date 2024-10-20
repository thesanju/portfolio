import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const sequence = [
    "Design", 
    2000,
    "Develop", 
    2000, 
    "Deploy", 
    2000,
    () => {
      console.log("Sequence completed");
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black text-white font-['IBM_Plex_Mono']">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Sanjay.</h1>
          <p className="text-xl">I'm a Web Developer and I can           <TypeAnimation
            sequence={sequence}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-xl"
          /></p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://raw.githubusercontent.com/thesanju/portfolio/81bf963d45c6c7b2ce87280d88aa29b87c8ef8fc/src/assets/2023-07-21_11-40-31_UTC_profile_pic.jpg"
            className="rounded-lg transform translate-x-16"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <h1 className="text-4xl font-bold mb-4">Hello, I'm Sanjay.</h1>
<p className="text-xl">I'm a Web Developer and I can Design.</p>  */
}
