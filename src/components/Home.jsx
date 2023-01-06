import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-7 flex flex-col justify-center h-full">
        <p className="text-[#b77320] font-extrabold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fff]">
          Valentine
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fff]">Nkowa</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m currently a Junior at Mankato state university specializing in
          Computer Science and Information Technology. Currently, I’m focused on
          learning React, JS and more front-end development tools.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-stone-400 hover:border-stone-400">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
