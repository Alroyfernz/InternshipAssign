import React, { Component } from "react";
import Slider from "react-slick";
import "./Main.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiAdobeacrobatreader } from "react-icons/si";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="main_content">
        <div className="top_content">
          <div className="top_left">
            <span className="left">
              <GoPrimitiveDot />
              LIVE
            </span>
            <span className="right">Upcoming Live Coaching</span>
          </div>
          <div className="top_right">
            <span className="left_btn" onClick={this.previous}>
              <FiChevronLeft />
            </span>
            <span className="right_btn" onClick={this.next}>
              <FiChevronRight />
            </span>
          </div>
        </div>
        <div className="bottom_content">
          {/* <div className="bottom_wrapper"> </div> */}
          <Slider ref={(c) => (this.slider = c)} {...settings}>
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
                    <AiOutlineYoutube
                      style={{ color: "red", marginRight: "4px" }}
                    />
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
            <div className="card_content">
              <div className="card_image" />

              <div className="heading">
                {" "}
                <BiTimeFive style={{ marginTop: "3px" }} />
                <span>Starts in 15 days</span>
              </div>
              <div className="info">
                <div className="title">
                  <span>Civil Junior Engineer Live Coaching Batch 2</span>
                </div>
                <hr />

                <div className="info_first">
                  <span>
                    {" "}
                    <AiOutlineYoutube
                      style={{ color: "red", marginRight: "4px" }}
                    />
                    200+ Live Classes
                  </span>
                </div>
                <div className="info_second">
                  <span className="info_left">
                    {" "}
                    <CgNotes style={{ color: "#FFD633" }} /> 5000+ questions
                  </span>
                  <span className="info_right">
                    {" "}
                    <SiAdobeacrobatreader
                      style={{ color: "red", marginRight: "4px" }}
                    />
                    80+ Notes
                  </span>
                </div>
              </div>
            </div>
            <div className="card_content">
              <div className="card_image" />

              <div
                className="heading"
                style={{
                  backgroundImage:
                    "-webkit-gradient(linear,right top,left top,color-stop(99%,#4bb376),color-stop(-3%,#059b37))",
                }}
              >
                {" "}
                <BiTimeFive style={{ marginTop: "3px" }} />
                <span>Batch closes in 2 days</span>
              </div>
              <div className="info">
                <div className="title">
                  <span>UPSC CDS-2 2021 Live Coaching</span>
                </div>
                <hr />

                <div className="info_first">
                  <span>
                    {" "}
                    <AiOutlineYoutube
                      style={{ color: "red", marginRight: "4px" }}
                    />
                    220+ Live Classes
                  </span>
                </div>
                <div className="info_second">
                  <span className="info_left">
                    {" "}
                    <CgNotes style={{ color: "#FFD633" }} /> 6000+ questions
                  </span>
                  <span className="info_right">
                    {" "}
                    <SiAdobeacrobatreader
                      style={{ color: "red", marginRight: "4px" }}
                    />
                    100+ Notes
                  </span>
                </div>
              </div>
            </div>
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
                    <AiOutlineYoutube
                      style={{ color: "red", marginRight: "4px" }}
                    />
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
                    <AiOutlineYoutube
                      style={{ color: "red", marginRight: "4px" }}
                    />
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
                    <AiOutlineYoutube
                      style={{ color: "red", marginRight: "4px" }}
                    />
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
          </Slider>
        </div>
      </div>
    );
  }
}
