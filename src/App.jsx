import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { About, Contact, Experience, Feedbacks, Hero,
Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Show the alert on component mount
    if (showAlert) {
      alert('Vercel is a free hosting service. There might be a few 3D model rendering issues. For the best experience, please use a desktop browser.');
    }
  }, []); // The empty dependency array ensures the alert runs only once on mount

  const handleAlertClose = () => {
    // Handle the "OK" button click to close the alert
    setShowAlert(false);
  };

  return (
    <BrowserRouter>
      <div>
        {/* Render other components and content here */}
        {showAlert && (
          <div>
            <button onClick={handleAlertClose}>OK</button>
          </div>
        )}
      </div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0"> 
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
