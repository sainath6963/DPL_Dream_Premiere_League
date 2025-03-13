import React from "react";
import Slider from "react-slick";
import cricket1 from "../../photos/cricket1.png";
import cricket2 from "../../photos/cricket2.png";
import cricket3 from "../../photos/cricket3.png";

const ImageList = [
  {
    id: 1,
    img: cricket1, // Replace with actual image path
    title: "Join the Ultimate Cricket Experience",
    description:
      "Get ready to showcase your skills on the grandest stage of cricket! Dream Premier League Cricket Association offers top-tier matches, exciting rewards, and a platform to shine.",
  },
  {
    id: 2,
    img: cricket2, // Replace with actual image path
    title: "Exciting Rewards & Recognition",
    description:
      "Compete with the best and stand a chance to win trophies, medals, and exclusive merchandise. Elevate your cricketing journey with DPLCA!",
  },
  {
    id: 3,
    img: cricket3, // Replace with actual image path
    title: "Register Now & Be a Part of History",
    description:
      "Don't miss this golden opportunity! Secure your spot in the Dream Premier League Cricket Association today and make every match count.",
  },
];

const Dashboard = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-300 flex justify-center items-center duration-200">
      <div className="h-[700px] w-[700px] bg-gray-900/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 "></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="sm:text-sm lg:text-2xl "
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  ></div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[500px] h-[500px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Dashboard;
