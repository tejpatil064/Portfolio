import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaGithub,
  FaBehance,
} from "react-icons/fa";
// check kr tr ekda ...
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://portfoliobackend-nine.vercel.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        console.log(formData);
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        console.error("Form submission error:", errorData);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    }
  };
  return (
    <section className="container mx-auto px-6 py-12 lg:px-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-4 text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            Let's Work Together
          </h1>
          <div>
            <p className="font-medium text-gray-500 mb-1">My office:</p>
            <p className="text-gray-800 font-bold text-2xl">
              Dhule, Maharashtra, India
            </p>
          </div>
          <hr className="border-gray-300" />
          <div>
            <p className="font-medium text-gray-500 mb-1">Call me:</p>
            <p className="text-purple-600 font-bold text-2xl">+91 9881678837</p>
          </div>
          <hr className="border-gray-300" />
          <div>
            <p className="font-medium text-gray-500 mb-1">Mail me:</p>
            <p className="text-purple-600 font-bold text-2xl">
              tejpatil064@gmail.com
            </p>
          </div>
          <hr className="border-gray-300" />
          <div>
            <p className="font-medium text-gray-500 mb-2">Follow me:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <FaBehance size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <FaDribbble size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <p className="text-gray-600 mb-6 text-left">
            I’m very approachable and would love to speak to you. Feel free to
            call, send me an email, or follow me on social media. For any work
            or project, you can contact me by filling out the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              placeholder="Message"
              rows="4"
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <div className="text-left">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-600">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600">
              Error sending message. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
