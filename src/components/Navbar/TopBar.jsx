import React from "react";

const TopBar = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 dark:text-white text-black py-2">
      <div className="container mx-auto flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center">
        <div className="text-sm text-center sm:text-left mb-2 sm:mb-0">
          <span style={{ fontWeight: "bold", cursor: "pointer" }}>
            M2K cinemas, Shop No. 108, First Floor, Aggarwal City Plaza, Sector 3, Rohini, Delhi- 110085
          </span>
        </div>
        <div className="text-sm text-center sm:text-right">
          <a
            href="tel:+919717556727"
            className="hover:underline"
            style={{ fontWeight: "bold" }}
          >
            +91-9717-556-727
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
