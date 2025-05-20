import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchVideos,
  selectVideos,
  selectLoading,
  selectError,
} from "@/store/slices/videoSlice";
import Videos from "@/pages/Videos.jsx";
import { ClipLoader } from "react-spinners";
import { FiAlertTriangle, FiFilm } from "react-icons/fi";
import { motion } from "framer-motion";

const WatchVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [uploadedVideos, setUploadedVideos] = useState([]);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  useEffect(() => {
    const filtered = videos.filter((video) => video?.path);
    setUploadedVideos(filtered);
  }, [videos]);

  return (
    <div className="min-h-screen w-full p-4 md:p-8 bg-gradient-to-br from-sky-100 via-white to-blue-100">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 flex items-center text-gray-800"
      >
        <FiFilm className="mr-2 h-6 w-6 text-blue-600" /> Watch Videos
      </motion.h1>

      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <ClipLoader size={35} color="#0284c7" />
          <p className="mt-4 text-gray-600 text-lg">
            Fetching amazing content for you...
          </p>
        </div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-50 text-red-700 p-4 mb-6 rounded-md border border-red-200 flex items-center gap-2"
        >
          <FiAlertTriangle className="h-5 w-5" />
          <strong>Error:</strong> {error}
        </motion.div>
      )}

      {!loading && uploadedVideos.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 text-center py-10 text-lg"
        >
          No videos uploaded yet. Stay tuned!
        </motion.p>
      )}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {uploadedVideos.map((video, index) => {
          const folderId = video?.path?.split("\\").slice(-2, -1)[0];
          const BASE_URL = import.meta.env.VITE_API;
          const videoSrc = folderId
            ? `https://${BASE_URL}/uploads/hls/${folderId}/index.m3u8`
            : null;

          return (
            <motion.div
              key={video._id || index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-lg font-semibold truncate mb-2 text-gray-800">
                {video.originalName || `Video ${index + 1}`}
              </h3>
              {videoSrc ? (
                <div className="aspect-video overflow-hidden rounded-md">
                  <Videos videoSrc={videoSrc} />
                </div>
              ) : (
                <div className="bg-gray-100 text-gray-500 py-8 rounded-md text-center h-full flex items-center justify-center">
                  Video source unavailable
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WatchVideos;
