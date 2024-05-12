"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef } from "react";

const NavLink = motion(Link);
const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggle = () => {
    const state = !isPlaying;
    setIsPlaying(state);
    state ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("isPlaying", String(state));
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      <audio ref={audioRef} loop>
        <source src="/audio/urbanbeat.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-12 h-12 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"sound"}
        name={"sound"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-auto text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-auto text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
