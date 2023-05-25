import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMousePosition(e) {
    setX(e.clientX);
    setY(e.clientY);
    console.log("mouse moving");
  }
  useEffect(() => {
    console.log("use Effect called from mouse hook");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("mouse event is stoped");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      X: {x} _ Y: {y}
    </div>
  );
};

export default HookMouse;
