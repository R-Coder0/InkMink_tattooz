import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FloatingButtons from "./components/Floating Button/FloatingButton";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FloatingButtons/>
      <Services id="services" />
      <Gallery/>
      <Testimonial />
      <About id="about" /> 
      <Contact id="contact" /> 
      <Footer />
    </div>
  );
};

export default App;
