import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  deleteMessage,
} from "../../store/slices/messageSlice.js";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";

const AllRounder = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.AllCricket);
  const [allRounders, setAllRounders] = useState([]);

  // ✅ Fetch messages on component mount
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  // ✅ Filter All-Rounders
  useEffect(() => {
    if (messages?.length) {
      const filteredData = messages.filter(
        (player) => player.category?.toLowerCase() === "all-rounder"
      );
      setAllRounders(filteredData);
    }
  }, [messages]);

  // ✅ Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this all-rounder?"
    );
    if (!confirmDelete) return;

    try {
      await dispatch(deleteMessage(id)).unwrap();
      setAllRounders((prev) => prev.filter((player) => player._id !== id));
      toast.success("All-Rounder deleted successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Failed to delete all-rounder. Try again!", {
        position: "bottom-right",
      });
    }
  };

  // ✅ Format DOB into readable format
  const formatDate = (dob) => dayjs(dob).format("DD MMM YYYY");

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      {/* ✅ Header Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-yellow-400">
          All-Rounder List
        </h1>
        <p className="mt-2 text-gray-400">
          List of all registered all-rounders
        </p>
      </motion.div>

      {/* ✅ Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-10">
          <motion.div
            className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      {/* ✅ Error State */}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* ✅ All-Rounders List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {allRounders.length > 0
            ? allRounders.map((player) => (
                <motion.div
                  key={player._id}
                  className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* ✅ Player Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-400">
                      {player.fullName}
                    </h2>

                    <p className="text-sm text-gray-400">
                      <strong>Email:</strong> {player.email}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Adhar Number:</strong> {player.adharNo}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Mobile:</strong> {player.mobile}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Address:</strong> {player.address}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>DOB:</strong> {formatDate(player.dob)}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Height:</strong> {player.height} cm
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Weight:</strong> {player.weight} kg
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Hand:</strong> {player.hand}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Bowler Type:</strong> {player.bowlerType || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Arm Category:</strong>{" "}
                      {player.armCategory || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Field Category:</strong> {player.fieldCategory}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Created At:</strong>{" "}
                      {formatDate(player.createdAt)}
                    </p>
                  </div>

                  {/* ✅ Delete Button */}
                  <motion.button
                    onClick={() => handleDelete(player._id)}
                    className="mt-5 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Delete
                  </motion.button>
                </motion.div>
              ))
            : !loading && (
                <motion.div
                  className="col-span-3 text-center mt-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-400 text-xl">
                    No all-rounders found.
                  </p>
                  <motion.img
                    src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                    alt="No Data"
                    className="w-48 mx-auto mt-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllRounder;
