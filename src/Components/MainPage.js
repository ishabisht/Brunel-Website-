import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroImage from "../img/HeroImage.png";
import Slider from "react-slick";
import Rocket from "../img/Group 1171281573.png";
import Sparkle from "../img/spark, sparkle, 26.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import QuestionBox from "./QuestionBox";
import Footer from "./Footer";
const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (index) => (
      <div
        className="slider-dot"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: index === currentSlide ? "#2DA950" : "#CCCCCC", // Green when active, otherwise gray
          transition: "background-color 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#333333",
          },
        }}
      />
    ),
  };

  const headings = [
    "Enhance fortune 50 company's insights team research capabilities",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <div className="px-8 pt-4">
      <Navbar />
      <div className="text-center">
        <h1 className="text-3xl font-covered text-green-600 mt-8 mb-4 md:mb-6 ">
          Success Stories
        </h1>
        <p className="text-6xl font-manrope font-semibold mb-20">
          Every success journey <br /> we've encountered
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center mb-8">
        <div className="md:w-1/2 relative mb-4 md:mb-0">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full rounded-3xl h-auto max-w-md max-h-md mx-auto"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg">
            <div className="absolute -top-4 -left-2">
              <img
                src={Sparkle}
                alt="Sparkle"
                className="w-20 h-20 font-bold"
              />
            </div>
            <h2 className="text-5xl font-bold mb-2 mt-2">40%</h2>
            <p className="text-lg font-manrope text-gray-400 leading-5">
              Achieved reduction in
              <br /> project execution time <br /> by optimising team <br />
              availability
            </p>
          </div>

          <div className="absolute bottom-0 left-8 bg-white p-2 rounded-full shadow-lg">
            <div className="flex items-center mb-4">
              <img src={Rocket} alt="Rocket" className="w-12 h-12 mr-2 mt-2" />
              <div>
                <h2 className="text-2xl font-bold">10 Days</h2>
                <p className="text-lg text-gray-400 leading-5 font-manrope">
                  Staff Deployment
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 right-8 bg-green-950 p-8 rounded-2xl shadow-lg text-white">
            <div className="flex items-center mb-2">
              <span className="text-6xl font-bold mr-1">$</span>
              <h2 className="text-6xl font-bold">0.5</h2>
              <span className="text-gray-400 text-2xl font-bold ml-2 mt-6">
                Million
              </span>
            </div>
            <p className="text-lg text-gray-300 leading-5 font-manrope">
              Reduced client expenses
              <br /> by saving on hiring and <br /> employee costs.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-16 flex flex-col justify-between">
          <div className="md:w-1/2 mb-20">
            <Slider {...settings}>
              {headings.map((heading, index) => (
                <div key={index}>
                  <div className="text-4xl font-black font-manrope mb-8 mt-12 text-center md:text-left">
                    {heading}
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex justify-center md:justify-start mt-4">
            <button className="text-lg bg-black text-white border  font-bold py-4 px-10 rounded-full">
              Explore More{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <QuestionBox />
      <Footer />
    </div>
  );
};

export default MainPage;
