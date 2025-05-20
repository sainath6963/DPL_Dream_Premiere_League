import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchVideos,
  uploadVideo,
  deleteVideo,
  selectVideos,
  selectLoading,
  selectError,
} from "../store/slices/videoSlice.js";
import Videos from "./Videos.jsx"; // HLS player component
import { motion, AnimatePresence } from "framer-motion";
import { FiUpload, FiTrash2, FiFilm, FiAlertTriangle } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const VideoManager = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); // State for file name

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : ""); // Set file name
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a video file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    try {
      await dispatch(uploadVideo(formData)).unwrap();
      alert("Video successfully uploaded!"); // Success message
    } catch (err) {
      alert("Video upload failed."); // Failure message
    } finally {
      setFile(null);
      setFileName(""); // Reset file name
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      dispatch(deleteVideo(id));
    }
  };

  return (
    <motion.div className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <motion.h1 className="text-3xl font-semibold text-center mb-8 text-gray-800 flex items-center justify-center">
        <FiFilm className="mr-2 h-6 w-6" /> Video Manager
      </motion.h1>

      {/* Upload Section */}
      <motion.div className="mb-8 p-4 md:p-6 rounded-lg bg-white border border-gray-200 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
        <Input
          id="video-upload"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="video-upload"
          className={cn(
            "inline-flex items-center justify-center px-4 py-2 rounded-md cursor-pointer",
            "bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors",
            "font-medium text-sm whitespace-nowrap"
          )}
        >
          <FiUpload className="mr-2 h-4 w-4" />
          <span>Upload Video</span>
        </label>

        <Button
          onClick={handleUpload}
          disabled={loading}
          className={cn(
            "bg-blue-500 text-white hover:bg-blue-600 transition-colors",
            "px-6 py-2 rounded-md font-semibold whitespace-nowrap",
            loading && "opacity-70 cursor-not-allowed"
          )}
        >
          {loading ? (
            <>
              <ClipLoader size={18} color="#fff" />
              <span className="ml-2">Uploading...</span>
            </>
          ) : (
            "Upload"
          )}
        </Button>

        {/* Display selected file name */}
        {fileName && (
          <p className="mt-2 text-gray-600">Selected File: {fileName}</p>
        )}
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div className="bg-red-50 text-red-700 p-4 mb-6 rounded-md border border-red-200 flex items-center gap-2">
            <FiAlertTriangle className="h-5 w-5" />
            <strong>Error:</strong> {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading & No Videos */}
      {loading && !file && (
        <div className="flex items-center justify-center py-8">
          <ClipLoader size={30} color="#00acc1" />
          <p className="ml-3 text-gray-600">Loading videos...</p>
        </div>
      )}
      {!loading && videos.length === 0 && (
        <p className="text-gray-600 text-center py-8">
          No videos found. Upload one to get started!
        </p>
      )}

      {/* Video List */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
      >
        <AnimatePresence>
          {videos.map((video, index) => {
            const actualVideo = video || {};
            const folderId =
              actualVideo?.path?.split("\\")?.slice(-2, -1)?.[0] ?? null;
            const BASE_URL = import.meta.env.VITE_API; // e.g. http://localhost:5000 (already has protocol)
            const videoSrc = folderId
              ? `${BASE_URL}/videos/${folderId}/index.m3u8`
              : null;

            return (
              <motion.div
                key={actualVideo?._id || `empty-${index}`}
                className={cn(
                  "p-4 rounded-lg bg-white border border-gray-200 shadow-md",
                  "transition-all duration-300",
                  "aspect-w-16 aspect-h-9",
                  "flex flex-col justify-between"
                )}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {actualVideo?.originalName ?? `Video ${index + 1}`}
                  </h3>
                  {videoSrc ? (
                    <div className="relative overflow-hidden rounded-md h-full">
                      <Videos videoSrc={videoSrc} />
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-gray-500 py-8 rounded-md text-center h-full flex items-center justify-center">
                      Video source unavailable
                    </div>
                  )}
                </div>
                <div className="mt-4 flex justify-end">
                  {actualVideo?._id && (
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(actualVideo._id)}
                      disabled={loading}
                      className={cn(
                        "bg-red-500 text-white hover:bg-red-600 transition-colors",
                        "px-4 py-2 rounded-md font-medium flex items-center gap-2",
                        loading && "opacity-70 cursor-not-allowed",
                        "self-end"
                      )}
                    >
                      <FiTrash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default VideoManager;
