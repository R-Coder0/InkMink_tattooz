import React from "react";
import profileImage from "../../assets/Aboutus.webp";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 about-image-container">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-xl shadow-lg about-image"
            />
            <div className="about-overlay"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-16 about-text-container">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 about-title"
          >
            About InkMink Tattoo Studio
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-bold text-xl">Welcome to InkMink Tattoo Studio</span>
            <br />
            Located in the heart of the city, InkMink Tattoo Studio is your go-to destination for exceptional tattoo artistry and professional body piercings. Our studio is a haven for creativity and self-expression, dedicated to providing a safe and welcoming environment for all our clients.
            <br /><br />
            <span className="font-bold text-xl">Our Expertise</span>
            <br />
            At InkMink, we specialize in a wide range of tattoo styles, from intricate blackwork to vibrant color tattoos. Our artists are skilled in creating custom designs that reflect your unique personality and style. Whether you're getting your first tattoo or adding to your collection, we ensure each piece is a masterpiece.
            <br /><br />
            <span className="font-bold text-xl">Our Commitment to Safety</span>
            <br />
            We prioritize your safety and comfort above all. Our studio adheres to the highest standards of hygiene and sterilization. We use only top-quality, hypoallergenic inks and single-use needles to ensure a safe tattooing experience.
            <br /><br />
            <span className="font-bold text-xl">Visit Us</span>
            <br />
            Come visit InkMink Tattoo Studio and let us bring your vision to life. Our friendly and professional team is here to guide you through the process, from consultation to aftercare. Experience the best in tattoo artistry at InkMink.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
