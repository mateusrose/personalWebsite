"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook that returns the current screen size.
 * @returns {number} The current screen size.
 */
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }
    function handleResize() {
      setScreenSize(getScreenSize());
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};

export default useScreenSize;
