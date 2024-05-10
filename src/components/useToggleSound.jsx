import { useState, useEffect } from "react";

export default function useToggleSound(link) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio("/audio/urbanbeat.mp3");
    newAudio.volume = 0.5; // Set volume to half
    setAudio(newAudio);
  }, [link]);

  const startMusic = (event) => {
    event.preventDefault();
    if (audio) {
      audio.play();
    }
  };

  return startMusic;
}
