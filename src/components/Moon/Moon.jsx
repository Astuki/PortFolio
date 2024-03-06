import React, { useEffect, useState } from 'react';


export default function Moon() {

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

  if (screenHeight < 765) {
    return null; // Do not render the Moon component if the screen height is less than 765px
  }

  let orbitSize = "13vh";

  if (screenHeight > 950) {
    orbitSize = "22vh";
  }

  let secondOrbitSize = "15vh";
  let secondAnimationDuration = "6s"

  if (screenHeight > 1050) {
    secondOrbitSize = "15vh";
  }

  return (
    <div className="container" >
      <div className="moon">
        <div className="orbit" style={{ height: orbitSize, width: orbitSize }}>
          <div className="circle"></div>
        </div>
        {screenHeight > 1050 && (
          <div className="orbit" style={{ height: secondOrbitSize, width: secondOrbitSize, animation: `spinSecond ${secondAnimationDuration} infinite linear` }}>
            <div className="circle"></div>
          </div>
        )}
      </div>
    </div>
  );
}
