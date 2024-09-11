import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import desktopImage1 from "../../assets/slider/slide1.jpg";
import desktopImage2 from "../../assets/slider/slide2.jpg";
import mobileImage1 from "../../assets/slider/Mobileslide1.jpg";
import mobileImage2 from "../../assets/slider/Mobileslide2.jpg";
import '../Hero/Heros.css';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '+919717556727';
    const text = `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.phoneNumber}, Address: ${formData.address}, Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, '_blank');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          adaptiveHeight: true
        }
      }
    ]
  };

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="desktop-slider">
          <Slider {...settings} className="hero-slider">
            <div className='slider'>
              <img src={desktopImage1} alt="Slide 1" className="hero-image" />
            </div>
            <div className='slider'>
              <img src={desktopImage2} alt="Slide 2" className="hero-image" />
            </div>
          </Slider>
        </div>
        <div className="mobile-slider">
          <Slider {...settings} className="hero-slider">
            <div className='slider'>
              <img src={mobileImage1} alt="Slide 1" className="hero-image" />
            </div>
            <div className='slider'>
              <img src={mobileImage2} alt="Slide 2" className="hero-image" />
            </div>
          </Slider>
        </div>
        <div className="form-container">
          <h2>Book Your Tattoo Session!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
