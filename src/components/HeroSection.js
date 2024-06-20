import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import "./HeroSection.scss";
import bigFileHomeRightOpen from "../assets/file-home-right-open.webp";
import bigFileHomeLeftOpen from "../assets/file-home-left-open.webp";
import innerMiddle from "../assets/inner-middle.webp";
import innerLeft from "../assets/inner-left.webp";
import innerRight from "../assets/inner-right.webp";
import Line7 from "../assets/svg/Line 7.svg";
import Rect382 from "../assets/svg/Rectangle 382.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
    AOS.refresh();
  }, []);

  return (
    <div className="hero-section-container">
      <section className="hero">
        <h1>Engage . Enhance . Empower </h1>
        <h2>Building next-generation schools for rural India</h2>
        <div className="cta-buttons">
          <button className="teach-with-ai">Teach with AI</button>
          <button className="watch-video">
            <FaPlay style={{ marginRight: 10 }} /> Watch Video
          </button>
        </div>
        <div className="statistics">
          <div className="outer-left" data-aos="fade-right">
            <div className="top-outer-left-box">
              <img src={bigFileHomeRightOpen} alt="" />
              <img src={Line7} alt="" className="line7" />
              <div>
                <h2>4%</h2>
                <span>
                  Only 4% students in rural schools have access to computers and
                  AI.
                </span>
              </div>
            </div>
            <div className="bottom-outer-left-box">
              <span>Let them know AI!</span>
            </div>
          </div>

          <div className="middle">
            <div className="inner-left" data-aos="fade-up">
              <img src={innerLeft} alt="" />
              <div>
                <span>Engaging children through AI</span>
              </div>
            </div>
            <div className="inner-middle" data-aos="fade-up">
              <img src={innerMiddle} alt="" />
              <div>
                <span>
                  Enhancing lives and creating impacts through digitalization.
                </span>
                <button className="teach-with-ai">Teach with VR</button>
              </div>
            </div>
            <div className="inner-right" data-aos="fade-up">
              <img src={innerRight} alt="" />
              <div>
                <span>AI Empowering individuals</span>
                <button className="teach-with-ai">Teach with AI</button>
              </div>
            </div>
          </div>

          <div className="outer-right" data-aos="fade-left">
            <div className="top-outer-right-box">
              <img src={bigFileHomeLeftOpen} alt="" />
              <img src={Rect382} alt="" className="rect382" />
              <div>
                <h2>28%</h2>
                <span>
                  Only 4% students in rural schools have access to computers and
                  AI.
                </span>
              </div>
            </div>
            <div className="bottom-outer-right-box">
              <span>Innovating Schools! Promoting digitalisation!</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroSection;
