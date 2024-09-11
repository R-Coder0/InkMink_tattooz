import React, { useState } from "react";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "+919717556727";
    const text = `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.phoneNumber}, Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-10 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                background: 'linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight:"bold",
                textAlign:"center"
              }}>
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Have questions or interested in learning more about our services? Please fill out the form below, and one of our dedicated team members will get back to you promptly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center left">
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
              M2K Cinemas, Shop No. 108, First Floor, Aggarwal City Plaza, Sector 3, Rohini, Delhi, 110085
                <br />
                India
              </p>
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <a href="tel:+919717556727">+91-9717-556-727</a>
              </p>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <a href="info@inkminktattooz.in" className="text-gray-700 dark:text-gray-300 mb-4">info@inkminktattooz.in</a>
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55992.94766226234!2d77.09809148482913!3d28.702828910085127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d02e94dcf7%3A0x6dc6d8a309500945!2sInk%20Mink%20Tattooz%20-%20Best%20Tattoo%20Artist%20in%20Rohini!5e0!3m2!1sen!2sin!4v1721808204297!5m2!1sen!2sin"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div href="" className="bg-white dark:bg-gray-700 shadow-md rounded-md px-8 py-6">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-primary ${theme === "dark" ? "text-black" : "text-gray-900"}`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-primary ${theme === "dark" ? "text-black" : "text-gray-900"}`}
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-primary ${theme === "dark" ? "text-black" : "text-gray-900"}`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-primary ${theme === "dark" ? "text-black" : "text-gray-900"}`}
                ></textarea>
                <button
                  type="submit"
                  className="bg-pink-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-pink-600 transition-colors duration-300"
                  style={{ backgroundImage:'linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)', color:'black', fontWeight:'600' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
