import React, { useState, useEffect } from "react";


import CustomCursor from "../components/CustomCursor/CustomCursor";
import Rod from "../components/Rod/Rod";
import HomepageImg from "../components/HomepageImg/HomepageImg";
import Stars from "../components/Stars/Stars";
import TextStyled from "../components/TextStyled/TextStyled";
import PageChange from "../components/PageChange/PageChange";
import Moon from "../components/Moon/Moon";

export default function Landing() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landingPlacement" style={{ height: `${screenHeight}px` }}>
      <CustomCursor />
      <Stars />
      <main className="flexbox" style={{ height: `${screenHeight}px`}}>
        <HomepageImg />
        <Rod />
        <TextStyled />
        <Moon />
      </main>
      <footer className="on-bottom">
        <PageChange/>
      </footer>
    </div>
  );
}
