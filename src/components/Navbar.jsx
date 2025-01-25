import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 shadow-lg transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-800 hover:text-purple-600">
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-purple-600">
                About
              </a>
              <a href="#skills" className="text-gray-800 hover:text-purple-600">
                Skills
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-purple-600"
              >
                Services
              </a>
            </div>

            {/* Center Logo */}
            <div className="text-xl font-bold text-purple-600 bg-yellow-400 px-8 py-4 ">
              Tejas Patil
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a
                href="#projects"
                className="text-gray-800 hover:text-purple-600"
              >
                Projects
              </a>
              <a href="#team" className="text-gray-800 hover:text-purple-600">
                Team
              </a>
              <a
                href="#testimonial"
                className="text-gray-800 hover:text-purple-600"
              >
                Testimonial
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-purple-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
