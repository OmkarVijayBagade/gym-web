"use client";

import { useState, useEffect, useRef } from "react";

const Loader = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  const dismiss = () => {
    setIsFading(true);
    setTimeout(() => setIsHidden(true), 600);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fallback: hide after 15 seconds (safety net only)
    const fallback = setTimeout(dismiss, 6500);

    const handleEnded = () => {
      clearTimeout(fallback);
      dismiss();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      clearTimeout(fallback);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div id="loader" className={isFading ? "fading" : ""}>
      <video
        ref={videoRef}
        className="loader-video"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/intro.webm" type="video/webm" />
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loader;
