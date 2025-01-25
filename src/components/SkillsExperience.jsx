import React from "react";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaDatabase,
  FaFigma,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiSpring, SiWebflow } from "react-icons/si";
const SkillsExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceData = [
    {
      title: "Software Developer Intern",
      company: "Numertry Technologies, Pune",
      duration: "Jan 2025 - Present",
    },
    {
      title: "UI/UX Designer Intern",
      company: "Progneur Technologies",
      duration: "Dec 2023 - Nov 2024",
    },
    {
      title: "UI/UX & Graphics Designer",
      company: "Akatsuki Coding Club, RCPIT",
      duration: "Oct 2023 - Present",
    },
    {
      title: "Spring Framework Training & Intern",
      company: "R3 Systems Pvt.Lmt",
      duration: "Jan 2024 - Feb 2024",
    },
    {
      title: "Java Developer Intern",
      company: "R3 Systems Pvt.Lmt",
      duration: "Jun 2023 - July 2023",
    },
    {
      title: "Freelancer",
      company: "Freelancer.com",
      duration: "Feb 2023 - Present",
    },
  ];

  const educationData = [
    {
      title: "Bachelor of Technology in Computer Engineering",
      institution: "RCPIT, Shirpur",
      duration: "2021 - 2025",
    },
    {
      title: "Higher Secondary School Certificate (HSC)",
      institution: "Jaihind Junior College",
      duration: "2019 - 2021",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Jaihind High School",
      duration: "2017 - 2019",
    },
  ];

  const dataToDisplay =
    activeTab === "experience" ? experienceData : educationData;
  return (
    <section className="container mx-auto px-6 py-12 lg:px-16 lg:py-24">
      {/* Skills and Experience Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skills Section */}
        <div className="flex flex-col justify-between text-left">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Experience
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            My proficiency extends to front-end development & Java Full Stack.
            Over the years, I've honed my abilities in crafting user-centric
            designs using tools like Adobe XD, Figma, Webflow, and have
            successfully designed and developed applications across various
            platforms, ensuring a seamless user experience and optimal
            functionality.
          </p>
          <h3 className="text-lg text-gray-800 mb-4">My Skills</h3>
          <div className="space-y-2 text-sm">
            {[
              { skill: "HTML & CSS", percentage: 99, color: "bg-green-600" }, // Green for high proficiency
              { skill: "JavaScript", percentage: 55, color: "bg-yellow-500" }, // Yellow for mid-level proficiency
              { skill: "Java", percentage: 80, color: "bg-blue-600" }, // Blue for moderate proficiency
              {
                skill: "Spring Framework",
                percentage: 50,
                color: "bg-orange-500",
              }, // Orange for moderate, but not yet full proficiency
              { skill: "MySQL", percentage: 75, color: "bg-teal-500" }, // Teal for solid database knowledge
              { skill: "UI/UX", percentage: 99, color: "bg-green-700" }, // Strong proficiency in UI/UX (Green)
              { skill: "Figma", percentage: 100, color: "bg-red-500" }, // Red for complete expertise in design tools (like Figma)
              {
                skill: "Webflow & Framer",
                percentage: 70,
                color: "bg-purple-600",
              }, // Purple for strong design tools proficiency
              { skill: "React JS", percentage: 70, color: "bg-teal-500" }, // Indigo for front-end framework proficiency
              { skill: "Python", percentage: 60, color: "bg-blue-500" }, // Blue for Python
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span>{item.skill}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience and Education Section */}
        <div className="flex flex-col">
          <div className="flex justify-start mb-6">
            <button
              className={`px-16 py-2 rounded-md shadow-md mr-4 ${
                activeTab === "experience"
                  ? "bg-purple-600 text-white"
                  : "text-purple-600 border border-purple-600"
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={`px-16 py-2 rounded-md shadow-md ${
                activeTab === "education"
                  ? "bg-purple-600 text-white"
                  : "text-purple-600 border border-purple-600"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          {/* Dynamic Data Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dataToDisplay.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-sm text-purple-600">{item.duration}</p>
                <p className="text-sm text-gray-600">
                  {item.company || item.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
