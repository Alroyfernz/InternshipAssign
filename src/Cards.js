import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { SiAdobeacrobatreader } from "react-icons/si";
import "./Main.css";
const Cards = () => {
  return (
    <div className="card_content">
      <div className="card_image" />

      <div className="heading">
        {" "}
        <BiTimeFive style={{ marginTop: "3px" }} />
        <span>15 seats left</span>
      </div>
      <div className="info">
        <div className="title">
          <span>IBPS PO & SBI PO Live Coaching</span>
        </div>
        <hr />

        <div className="info_first">
          <span>
            {" "}
            <AiOutlineYoutube style={{ color: "red", marginRight: "4px" }} />
            240+ Live Classes
          </span>
        </div>
        <div className="info_second">
          <span className="info_left">
            {" "}
            <CgNotes style={{ color: "#FFD633" }} /> 9000+ questions
          </span>
          <span className="info_right">
            {" "}
            <SiAdobeacrobatreader
              style={{ color: "red", marginRight: "4px" }}
            />
            120+ Notes
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
