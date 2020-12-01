import React, { useState } from "react";
import ImgTest from "../assets/test.png";

const App = () => {
  const [number, setNumber] = useState(0);

  const onClickPlus = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <h1>Hello, Webpack~!!!</h1>
      <h3>현재 숫자 : {number}</h3>
      <button onClick={onClickPlus}>PLUS</button>
      <img src={ImgTest} alt="IMGTEST" />
    </>
  );
};

export default App;
