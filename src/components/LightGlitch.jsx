"use client";
import React from "react";
import { useState, useEffect } from "react";

const createLight = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const LightGlitch = () => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    const addLightPeriodically = () => {
      const newLight = createLight();
      setLights((currentLight) => [...currentLight.slice(-20), newLight]);
    };
    const interval = setInterval(addLightPeriodically, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-o w-full h-full -z-10 overflow-hidden">
      {lights.map((light) => {
        return (
          <div
            key={light.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-light-radial shadow-glass-sm"
            style={{
              top: light.top,
              left: light.left,
              animation: `move ${light.animationDuration} infinite alternate`,
            
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default LightGlitch;
