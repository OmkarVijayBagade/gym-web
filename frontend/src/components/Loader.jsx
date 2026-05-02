"use client";

import { useState, useEffect } from "react";

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
        <p className="loader-text">IRON PUMP</p>
      </div>
    </div>
  );
};

export default Loader;
