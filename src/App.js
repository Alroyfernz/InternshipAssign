import "./App.css";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import Main from "./Main";
import PreviousNextMethods from "./PreviousNextMethods";

function App() {
  return (
    <div className="container">
      <PreviousNextMethods />
    </div>
  );
}

export default App;
