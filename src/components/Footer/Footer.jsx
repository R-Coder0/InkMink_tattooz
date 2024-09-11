import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Services",
    link: "/#services",
  }
];

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-pink-500"               style={{
                background: 'linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Ink Mink Tattooz
              <br /> Best tattoo Artist
            </h1>
            <p className="text-sm text-gray-400">
            "Creating custom tattoos, covering old ones, and providing professional piercing services. Our experienced artists ensure a safe and welcoming environment for all clients. Visit us to experience exceptional tattoo artistry and personalized care."{" "}
            </p>
            <br />
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/kammei.rajpoot">
                <FaFacebook className="text-2xl hover:text-blue-500 duration-300" />
              </a>
              <a href=" https://www.instagram.com/inkminktattooznewdelhi/" target="_blank">
                <FaInstagram className="text-2xl hover:text-pink-500 duration-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-pink-500"               style={{
                background: 'linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                  Company
                </h2>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-yellow-500 space-x-1 text-gray-400"
                    >
                      <a href={link.link}>
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-pink-500"               style={{
                background: 'linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                  Address
                </h2>
                <p className="text-sm text-gray-400">
                M2K cinemas,
                <br /> Shop No. 108,
                <br /> First Floor,
                <br /> Aggarwal City Plaza,
                <br /> Sector 3,
                <br /> Rohini, Delhi- 110085
                </p>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4" style={{width:'20rem'}}>
                <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-pink-500"               style={{
                background: 'linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                  Contact
                </h2>
                <p className="text-sm text-gray-400">
                  Phone : <a href="tel:+919717556727" className="text-grey-400 hover:text-yellow-500">+919717556727</a>
                  <br />
                  Email : <a href="info@inkminktattooz.in" className="text-grey-400 hover:text-yellow-500 ">info@inkminktattooz.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} InkMink Tattooz | All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
