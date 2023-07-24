import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Light setup and other objects */}
      {/* ... */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const orbitControlsRef = useRef();

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default context menu behavior
  };

  // Disable orbit controls on right-click
  const handleMouseDown = (event) => {
    if (event.button === 2) {
      setControlsEnabled(false);
    }
  };

  // Enable orbit controls again on mouse up
  const handleMouseUp = (event) => {
    if (event.button === 2) {
      setControlsEnabled(true);
    }
  };

  return (
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onContextMenu={handleContextMenu} // Attach the event handler
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Attach orbit controls with ref */}
        <OrbitControls 
          ref={orbitControlsRef} 
          enabled={controlsEnabled}
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
