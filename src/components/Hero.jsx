"use client";

import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import bgheader from "../images/bg-header.png";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "UI/UX Designer - Graphics Designer",
        "Web Developer",
        "Java Full Stack Developer",
      ], // Add your desired strings here
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      // Clean up the Typed.js instance when the component unmounts
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative bg-white">
      {/* Set background image on container, positioned at the top-left corner */}
      <div
        className="absolute top-0 left-0 w-[350px] h-[350px] bg-cover bg-no-repeat bg-left z-0"
        style={{ backgroundImage: `url(${bgheader})` }}
      ></div>

      {/* Main Hero Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 z-10">
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-purple-600 text-lg font-medium mb-2">I'm</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Tejas Patil
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8">
            <span ref={typedRef}></span>
          </p>
          <a
            href="https://drive.google.com/file/d/1nKTlvnSsfunikX7DpCN5SW7lq99WJRhI/view"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure for opening links in a new tab
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg text-center inline-block"
          >
            Download CV
          </a>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0">
          <img
            src="https://tejaspatil-portfolio.netlify.app/img/hero.png"
            alt="Experience Illustration"
            className="w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
