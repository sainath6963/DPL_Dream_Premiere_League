import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image1 from "../../photos/img1.png";
import image2 from "../../photos/img2.png";
import image3 from "../../photos/img3.png";
import image4 from "../../photos/img4.png";
import image5 from "../../photos/img5.jpeg";
import image6 from "../../photos/img6.png";
import image7 from "../../photos/img7.png";
import image8 from "../../photos/img8.png";
import image9 from "../../photos/img9.png";
import image10 from "../../photos/img10.png";
import image11 from "../../photos/img11.png";
import image12 from "../../photos/img12.png";
import image13 from "../../photos/img13.png";
import image14 from "../../photos/img14.png";
import image15 from "../../photos/img15.png";
import image16 from "../../photos/img16.png";

const TestimonialData = [
  {
    id: 1,
    name: "Dinshaw’s Dairy Foods Pvt. Ltd.",
    text: "Dinshaw's thunderbolts represents Power, precision and legacy. This team stands tall with a blend of experience an explosive young talent. the thunderbolts aim to strike fast and hard - like thunder on the cricket field.",
    img: image1,
  },
  {
    id: 2,
    name: "Patanjali Foods Limited",
    text: "Patanjali Divyashakti represents discipline, power and purity, backed by the legacy of patanjali, Patanjali Divyashakti have a perfect blend of youth energy and experienced minds",
    img: image7,
  },
  {
    id: 3,
    name: "Morarjee Textiles Limited ",
    text: "Morarji Panthers reflect strength, speed and resilience - just like the majestic panther.The team blends tactical aggression with focused discipline. The panthers are driven by ambition and unity",
    img: image6,
  },
  {
    id: 4,
    name: " Butibori Manufacturers’ Association",
    text: "BMA Legends stands for legacy, discipline and champion sprite.The team carries a nice tradition of excellence.The legends are built to inspire and lead - both on and off the pitch. ",
    img: image2,
  },
  {
    id: 5,
    name: "Tulsiramji Gaikwad Patil College of Engineering and Technology ",
    text: "Tech Warriors GPGI represents the fusion of education, energy and excellence.They stand for smart strategy, youth power and visionary leadership. The team reflects the institute's commitment to holistic development - on and off the field",
    img: image3,
  },
  {
    id: 6,
    name: "ENGLISH SCHOOL ASSOCIATION, Nagpur ",
    text: "ESA Strikers represent Energy, Education and execution.This team blends academic discipline with athletic aggression.The strikers showcase smartness, sharpness and swiftness.",
    img: image10,
  },
  {
    id: 7,
    name: "Maya Hospital & Research Institute, Butibori",
    text: "Maya Saviours XI draws inspiration from the life-saving spirit of Maya hospital.This team represents courage, care and commitment.The Saviours combine heart, strategy and grit to tall under pressure",
    img: image5,
  },
  {
    id: 8,
    name: "Choudhari Multi Speciality Hospital, Butibori",
    text: "Dr.Chaudhari Warriors symbolize discipline, determination and dominance.This team stands for fearless cricket and intellectual strategy. The warriors are here to fight every ba battle with integrity and inspire a generation of cricketers.",
    img: image4,
  },
  {
    id: 9,
    name: " ZFM Tradelinks Pvt. Ltd. ",
    text: "ZFM XI represent power, precision, and professionalism. This team mirrors the strength and efficiency of the industrial world. ZFM XI is ready to clean up the compitition in style.",
    img: image8,
  },
  {
    id: 10,
    name: "Savitek Infra Pvt. Ltd.",
    text: "Savitek blazers ignite the field with energy, strategy and speed.This team symbolizes rising network and blazing trails.The blazers are set to set the DPL stage on fire!",
    img: image9,
  },
  {
    id: 11,
    name: "Hotel Mayur (A Unit Of Hotel Aashiyana, Butibori)",
    text: "Mayur Ranger 11 represents precision, class and consistency. This team brings discipline from hospitality to the cricket field. The Rangers are here to dominate the league with grace and grit.",
    img: image11,
  },
  {
    id: 12,
    name: "Golden City Builders & Developers, Butibori ",
    text: "Golden City Lions represent courage, class and commitment. This team mirrors the golden heritage and ambition of it's community. The lions are ready to dominate every innings with power and pride",
    img: image16,
  },
  {
    id: 13,
    name: "SKY Titans Construction Compony, Butibori",
    text: "Sky Titans represent limitless ambition and towering strength. This team have a vision to dominate from the skies, this team combines power-hitters, sharp bowlers, and strategic minds.They are here to conquer the cricketing skies of DPL.",
    img: image14,
  },
  {
    id: 14,
    name: "Arjun Samajik Sangathana, Butibori",
    text: "Arjun Butibori 11 draws its name and spirit from the legendary archer Arjuna, symbolizing focus, determination, and precision — with sharp strategy and fearless execution.",
    img: image12,
  },
  {
    id: 15,
    name: "Taj Royal, Cotton Industry, Nagpur",
    text: "Taj Royal embodies elegance, heritage, dominance.This team reflects royal composure mixed with commutative fire.Taj Royal are ready to rule the game with regal flair and spoting brilliance.",
    img: image15,
  },
  {
    id: 16,
    name: "Ekta Transport Union, Butibori",
    text: "ETU Challengers embody the true spirit of rural determination and fearless ambition.This team is all about rising against odds.They challenge every limit and play with unmatched intensity and pride.",
    img: image13,
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
    autoplaySpeed: 5000,
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
    <div className="py-16 bg-gradient-to-r from-green-200 to-red-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-4xl font-extrabold text-gray-800 mb-2"
          >
            Our Frenchies Team Owners
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-500 text-lg font-medium md:text-base max-w-2xl mx-auto"
          >
            Meet the passionate minds behind the Frenchies cricket teams — the
            owners who bring vision, energy, and a deep love for the game. They
            are the backbone of our squads, playing a vital role in team
            building, strategy, and creating a winning culture both on and off
            the field. With a shared commitment to sportsmanship, talent
            development, and the spirit of cricket, our team owners ensure the
            Frenchies legacy continues to grow stronger with every match.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="p-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-6 flex justify-center">
                    {/* Add a placeholder or default avatar */}
                    <div className="w-60 h-60 rounded-full bg-gray-200 flex items-center justify-center">
                      {} <img src={data.img} alt="" className=" w-40 h-40" />
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
