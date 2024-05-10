import React, { useState, useEffect, useRef } from "react";
import { Volume2 } from "lucide-react";

const SoundIcon = () => {

  return (
    <div className="w-full h-auto"  >
      <Volume2 strokeWidth={1.5} />
      
    </div>
  );
};

export default SoundIcon;