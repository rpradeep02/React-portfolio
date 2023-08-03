import React from "react";

const HelloText = () => {
  // Function to check if the device is in a mobile view
  const isMobileView = () => {
    return window.innerWidth <= 768; // Replace 768 with the appropriate mobile breakpoint
  };

  // Conditionally render the "hello" text for mobile view
  if (isMobileView()) {
    return <p className="hello-text">"Pinch now to reveal the captivating content you've been missing out on!"</p>;
  } else {
    return null; // Render nothing if not in mobile view
  }
};

export default HelloText;
