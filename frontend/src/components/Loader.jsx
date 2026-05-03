"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={isHidden ? "hidden" : ""}>
      <div className="loader-content">
        <div className="loader-bar"></div>
        <div className="loader-brand">
          <Image src="/images/ff-v1.webp" alt="Fitness Fort" width={60} height={60} className="loader-logo" priority />
          <span className="loader-brand-text">Fitness Fort</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
