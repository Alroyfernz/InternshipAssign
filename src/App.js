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
      {/* <div className="main_content">
        <div className="top_content">
          <div className="top_left">
            <span className="left">
              <GoPrimitiveDot />
              LIVE
            </span>
            <span className="right">Upcoming Live Coaching</span>
          </div>
          <div className="top_right">
            <span className="left_btn">
              <FiChevronLeft />
            </span>
            <span className="right_btn">
              <FiChevronRight />
            </span>
          </div>
        </div>
        <div className="bottom_content">
          <div className="bottom_wrapper">
            <div className="card_content">
              <div className="card_image" />

              <div className="heading">
                {" "}
                <BiTimeFive />
                15 seats left
              </div>
              <div className="info">
                <div className="title">
                  <h1>Crack top MNC's</h1>
                </div>
                <hr />

                <div className="info_first">
                  <span>
                    {" "}
                    <AiOutlineYoutube />
                    100 coding questions
                  </span>
                </div>
                <div className="info_second">
                  <span className="info_left">60hrs live</span>
                  <span className="info_right"> crack top</span>
                </div>
              </div>
            </div>

            <div className="card_content">
              <div className="card_image" />

              <div className="heading">
                {" "}
                <BiTimeFive />
                15 seats left
              </div>
              <div className="info">
                <div className="title">
                  <h1>Crack top MNC's</h1>
                </div>
                <hr />

                <div className="info_first">
                  <span>
                    {" "}
                    <AiOutlineYoutube />
                    100 coding questions
                  </span>
                </div>
                <div className="info_second">
                  <span className="info_left">60hrs live</span>
                  <span className="info_right"> crack top</span>
                </div>
              </div>
            </div>

            <div className="card_content">
              <div className="card_image" />

              <div className="heading">
                {" "}
                <BiTimeFive />
                15 seats left
              </div>
              <div className="info">
                <div className="title">
                  <h1>Crack top MNC's</h1>
                </div>
                <hr />

                <div className="info_first">
                  <span>
                    {" "}
                    <AiOutlineYoutube />
                    100 coding questions
                  </span>
                </div>
                <div className="info_second">
                  <span className="info_left">60hrs live</span>
                  <span className="info_right"> crack top</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Main /> */}
      <PreviousNextMethods />
    </div>
  );
}

export default App;
