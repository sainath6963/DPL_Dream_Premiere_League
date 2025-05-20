import React from "react";
import modelphoto from "@/photos/websitephoto.JPG";

const ManagementTeam = () => {
  return (
    <div
      className="max-w-6xl mx-auto p-6 bg-blue-300 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-10 items-start
      animate-fadeInUp"
    >
      {/* Image */}
      <img
        src={modelphoto}
        alt="Mr. Mujib Pathan"
        className="w-full h-[500px] md:col-span-1 rounded-xl object-cover
          transform transition-transform duration-500 hover:scale-105 shadow-md"
      />

      {/* Text content */}
      <div className="md:col-span-2 flex flex-col justify-start space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Meet Mr. Mujib Pathan — The Visionary Behind Dreams Turned Reality
        </h2>

        <p
          className="inline-block bg-blue-100 text-blue-800 text-xl font-semibold px-5 py-3 rounded-lg shadow-md
          tracking-wide drop-shadow-md"
        >
          Mujib Pathan <br />
          Found & MD, Dream Group of Schools & Dream Developers & Builders
        </p>

        <div className="space-y-4 text-justify text-lg leading-relaxed text-gray-700">
          <p>
            Mr. Mujib Pathan is not just a name, but a mission in motion. As the
            Founder and Managing Director of Dream Cricket Club(DCC), he has
            redefined grassroots cricket by creating a powerful platform that
            scouts, supports, and showcases raw talent from across the
            nation—especially from villages where dreams often remain unheard.
          </p>
          <p>
            Hailing from a humble village background himself, Mr. Pathan
            understands the challenges faced by aspiring young minds. With a
            burning desire to bridge the gap between talent and opportunity, he
            built DCC to ensure that no boundary—social or geographical—can stop
            a dreamer from being recognised.
          </p>
          <p>
            In a landmark initiative, he organized the Dream Premier League
            (DPL) in 2025, a vibrant showcase of young, untapped talent from
            villages and small towns and even national players from around
            India. DPL 2025 stood as a testament to his vision — a cricketing
            movement that breaks boundaries and uplifts communities.
          </p>
          <p>But his vision doesn’t stop at cricket.</p>
          <p>
            He is also the dynamic force behind Dream Group of Schools (a chain
            of three institutions shaping future leaders), Dream Developers (a
            growing name in real estate), and Star Apex News (a channel that
            voices stories that matter). A true man with purpose, Mr. Mujib
            Pathan is committed to empowering the next generation through
            education, sports, and media.
          </p>
          <p>
            With every endeavor, he proves that with the right platform, dreams
            don’t just take flight — they soar.
          </p>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default ManagementTeam;
