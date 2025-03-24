import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  deleteMessage,
} from "../../store/slices/messageSlice.js";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";

const WicketKeeper = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.AllCricket);

  const [wicketKeepers, setWicketKeepers] = useState([]);
  const [deletingId, setDeletingId] = useState(null); // Track ID being deleted

  // ✅ Fetch messages on component mount
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  // ✅ Filter Wicket Keepers
  useEffect(() => {
    if (messages && Array.isArray(messages)) {
      const filteredData = messages.filter(
        (message) => message.fieldCategory?.toLowerCase() === "wicket keeper"
      );
      setWicketKeepers(filteredData);
    }
  }, [messages]);

  // ✅ Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this wicket-keeper?"
    );
    if (!confirmDelete) return;

    setDeletingId(id);

    try {
      await dispatch(deleteMessage(id)).unwrap();
      setWicketKeepers((prevData) =>
        prevData.filter((keeper) => keeper._id !== id)
      );
      toast.success("Wicket-Keeper deleted successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Failed to delete Wicket-Keeper. Try again!", {
        position: "bottom-right",
      });
    } finally {
      setDeletingId(null);
    }
  };

  // ✅ Format Date Function
  const formatDate = (date) =>
    date ? dayjs(date).format("DD MMM YYYY") : "N/A";

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
          Wicket Keeper List
        </h1>
        <p className="mt-2 text-gray-400">
          List of all registered wicket keepers
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

      {/* ✅ Error Message */}
      {error && (
        <p className="text-red-500 text-center text-lg mt-4">{error}</p>
      )}

      {/* ✅ Wicket Keeper List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {wicketKeepers.length > 0
            ? wicketKeepers.map((keeper) => (
                <motion.div
                  key={keeper._id}
                  className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* ✅ Player Info */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-yellow-400">
                      {keeper.fullName || "N/A"}
                    </h2>

                    <p className="text-sm text-gray-400">
                      <strong>Email:</strong> {keeper.email || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Adhar Number:</strong> {keeper.adharNo || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Phone:</strong> {keeper.mobile || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>DOB:</strong> {formatDate(keeper.dob)}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Address:</strong> {keeper.address || "N/A"}
                    </p>
                  </div>

                  {/* ✅ Physical Attributes */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">
                      <strong>Height:</strong> {keeper.height || "N/A"} cm
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Weight:</strong> {keeper.weight || "N/A"} kg
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Category:</strong> {keeper.category || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Bowler Type:</strong> {keeper.bowlerType || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Arm Category:</strong>{" "}
                      {keeper.armCategory || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Field Category:</strong>{" "}
                      {keeper.fieldCategory || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Created At:</strong>{" "}
                      {formatDate(keeper.createdAt)}
                    </p>
                  </div>

                  {/* ✅ Delete Button */}
                  <motion.button
                    onClick={() => handleDelete(keeper._id)}
                    className={`w-full py-2 rounded-md text-white transition duration-300 ${
                      deletingId === keeper._id
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                    disabled={deletingId === keeper._id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {deletingId === keeper._id ? "Deleting..." : "Delete"}
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
                    No Wicket Keepers found.
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

export default WicketKeeper;
