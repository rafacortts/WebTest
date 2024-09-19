import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    const colors = ['#FFC107', '#FF5722', '#4CAF50', '#2196F3'];
    const changeColor = () => {
      let index = 0;
      const interval = setInterval(() => {
        setBgColor(colors[index]);
        index = (index + 1) % colors.length;
      }, 4000); // change color every 4 seconds
      return () => clearInterval(interval);
    };
    changeColor();
  }, []);

  return (
    <span
      style={{
        backgroundColor: bgColor,
        padding: '0.2em 0.5em',
        borderRadius: '0.2em',
        transition: 'background-color 0.5s ease',
      }}
    >
      <TypeAnimation
        sequence={[
          "Text One",
          1000,
          "Text Two",
          1000,
          "Text Three",
          1000,
          "Text Four",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "inherit", display: "inline-block" }}
        repeat={Infinity}
      />
    </span>
  );
};

export default AnimatedText;
