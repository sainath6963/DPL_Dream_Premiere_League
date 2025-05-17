import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image1 from "../../photos/";
import image2 from "../../photos/imge2.jpg";
import image3 from "../../photos/imge3.jpg";
import image4 from "../../photos/imge4.jpg";
import image5 from "../../photos/imge5.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Ankit Sharma – Registered Player (Boys' Team)",
    text: "I’m excited to be part of the upcoming Dream Premier League! It’s a fantastic platform to showcase our cricketing skills.",
    img: image1,
  },
  {
    id: 2,
    name: "Rahul Verma ",
    text: "Our team is training hard for the upcoming league. This tournament will be a great opportunity for the boys to showcase their talent and gain valuable experience. Looking forward to some thrilling matches!",
    img: image2,
  },
  {
    id: 3,
    name: "Rohit Kale – Volunteer & Cricket Enthusiast",
    text: "Volunteering at the Dream Premier League was an amazing experience. The organizers ensured smooth execution, and the enthusiasm of the players made it memorable,",
    img: image3,
  },
  {
    id: 4,
    name: "Sahil Patil – Registered Player",
    text: "Can’t wait to be part of the Dream Premier League! It’s going to be an incredible experience competing with skilled players and making unforgettable memories on the field. Let the game begin!",
    img: image4,
  },
  {
    id: 5,
    name: "Aman Deshmukh – Parent",
    text: "I’m looking forward to watching my son compete in this prestigious tournament. It’s a fantastic platform for young cricketers to showcase their potential and grow as players. Best of luck to all the teams!",
    img: image5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-3xl font-extrabold text-gray-800 mb-2"
          >
            What Our Players Say
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto"
          >
            Hear from our passionate players about their experiences and
            excitement for the Dream Premier League.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="p-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-6 flex justify-center">
                    {/* Add a placeholder or default avatar */}
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                      {}{" "}
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      "{data.text}"
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {data.name}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 text-gray-200 text-6xl font-serif">
                    ,,
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
