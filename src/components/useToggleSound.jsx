"use client";
import { useState, useEffect, useRef } from "react";

export default function useToggleSound(link) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current === null) {
      audioRef.current = new Audio("/audio/urbanbeat.mp3");
      audioRef.current.volume = 0.02; // Set volume to half
    }
  }, []);

  const toggleMusic = (event) => {
    if (link === "/sound") {
      event.preventDefault();
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
          localStorage.setItem("musicConsent", "true");
        } else {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          localStorage.setItem("musicConsent", "false");
        }
      }
    }
  };

  return toggleMusic;
}
