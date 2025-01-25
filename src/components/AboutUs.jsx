import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <div className="flex flex-col items-start">
            {/* Left Section: 02 Years */}
            <div className="text-center lg:text-left lg:mr-6">
              <div className="flex items-center space-x-4">
                {/* 02 Years Section */}
                <h1 className="text-[6rem] font-bold text-gray-900 leading-[4.5rem] tracking-[0.1em]">
                  02
                  <span className="block text-[1.5rem] font-medium text-gray-500 leading-[2.2rem] tracking-[0.6em]">
                    Years
                  </span>
                </h1>

                {/* Heading Section */}
                <h2 className="text-[1.4rem] font-semibold text-gray-800 text-left">
                  of working experience as a UI/UX Designer & Web Developer
                </h2>
              </div>

              {/* Paragraph Section */}
              <div className="mt-6">
                <p className="text-gray-600 text-sm leading-relaxed text-left">
                  As a passionate UI/UX designer, my journey boasts a proven
                  record of crafting captivating user interfaces, developing
                  seamless web applications, and designing intuitive mobile
                  apps. Blending technical expertise with creative finesse, I
                  consistently deliver impactful digital solutions that engage
                  users and drive innovation.
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center text-md text-gray-800">
              <span className="text-purple-600 mr-2">✔</span> Affordable Prices
            </li>
            <li className="flex items-center text-md text-gray-800">
              <span className="text-purple-600 mr-2">✔</span> High Quality
              Product
            </li>
            <li className="flex items-center text-md text-gray-800">
              <span className="text-purple-600 mr-2">✔</span> On Time Project
              Delivery
            </li>
          </ul>
          <div className="mt-6 text-left">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <img
            src="https://tejaspatil-portfolio.netlify.app/img/pro.jpg" // Replace with the actual image URL
            alt="Experience Illustration"
            className="w-[300px] h-auto mb-8 lg:mb-0"
          />
          <div className="space-y-6 text-left" >
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Happy Clients <span className="text-purple-600 ">40</span>
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                We take immense pride in cultivating delighted clients through
                my services. With a customer-centric approach, I consistently
                exceed expectations by delivering tailored solutions that
                address their unique needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Projects Completed <span className="text-purple-600">74</span>
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Each project signifies a testament to dedication, proficiency,
                and adaptability across various industries. I bring a wealth of
                practical insights to every new endeavor, ensuring innovative
                and effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
