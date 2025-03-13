import React from "react";
import { FaStar } from "react-icons/fa";

const TournamentData = [
  {
    id: 1,
    // img: img1,
    title: "BPL 2025",
    description: "Experience the biggest cricket battle of the season!",
    status: "Upcoming",
    aosDelay: "0",
  },
  {
    id: 2,
    // img: img2,
    title: "Final Match",
    description: "Witness the thrilling grand finale of BPL.",
    status: "Live",
    aosDelay: "200",
  },
  {
    id: 3,
    // img: img3,
    title: "Team Titans",
    description: "One of the top contenders of this season.",
    status: "Qualified",
    aosDelay: "400",
  },
  {
    id: 4,
    // img: img4,
    title: "Top Scorer",
    description: "Leading batsman with the highest runs in BPL.",
    status: "Updated",
    aosDelay: "600",
  },
  {
    id: 5,
    // img: img5,
    title: "Fastest Bowler",
    description: "Record-breaking pace bowler of the tournament.",
    status: "Highlight",
    aosDelay: "800",
  },
];

const Tournament = () => {
  return (
    <div className="mt-14 mb-12 ">
      <div className="mx-auto">
        {/* header section */}
        <div className=" text-center mb-10 max-w-[700px]  mx-auto">
          <p data-aos="fade-up" className="text-amber-600 text-primary">
            Top Selling Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            veniam qui. Reprehenderit impedit qui iusto id ipsam ratione ex non
            debitis
          </p>
        </div>

        {/* body section */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
            {/* card section */}
            {TournamentData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 "
              >
                <img
                  //   src={data.img}
                  alt=""
                  className="h-[200px] w-[200px] oject-cover rounded-br-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600 ">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
        </div>
        <div className="flex justify-center">
          <button
            data-aos="fade-up"
            className="text-center mt-10 cursor-pointer bg-amber-500 text-white py-1 px-5 rounded-md"
          >
            View All{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
