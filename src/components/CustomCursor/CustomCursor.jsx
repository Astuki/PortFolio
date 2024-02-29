import React, { useState, useEffect } from "react";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 40, y: 40 });
  const [isOverImage, setIsOverImage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });

      // Check if the cursor is over an image
      const element = document.elementFromPoint(e.clientX, e.clientY);
      setIsOverImage(
        element.tagName === "IMG" || element.classList.contains("SkillContainer")
      );
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div
      className={`custom-cursor ${isOverImage ? 'over-image' : ''}`}
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <div className="light-effect"></div>
    </div>
  );
}
