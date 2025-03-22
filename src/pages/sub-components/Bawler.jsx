import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  deleteMessage,
} from "../../store/slices/messageSlice.js";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";

const Bowler = () => {
  const dispatch = useDispatch();

  // ✅ Redux state handling
  const { messages, loading, error } = useSelector((state) => state.AllCricket);
  const [bowlers, setBowlers] = useState([]);
  const [deletingId, setDeletingId] = useState(null); // Track ID being deleted

  // ✅ Fetch bowlers on component mount
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  // ✅ Filter bowlers from messages
  useEffect(() => {
    if (messages?.length) {
      const filteredData = messages.filter(
        (msg) => msg.category?.toLowerCase() === "bowler"
      );
      setBowlers(filteredData);
    }
  }, [messages]);

  // ✅ Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this bowler?"
    );
    if (!confirmDelete) return;

    setDeletingId(id);

    try {
      await dispatch(deleteMessage(id)).unwrap();
      setBowlers((prev) => prev.filter((bowler) => bowler._id !== id));
      toast.success("Bowler deleted successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Failed to delete bowler. Try again!", {
        position: "bottom-right",
      });
    } finally {
      setDeletingId(null);
    }
  };

  // ✅ Format Dates
  const formatDate = (date) =>
    date ? dayjs(date).format("DD MMM YYYY") : "N/A";

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      {/* ✅ Page Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-400">Bowler List</h1>
        <p className="mt-2 text-gray-400">
          All registered bowlers with details
        </p>
      </motion.div>

      {/* ✅ Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-10">
          <motion.div
            className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
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

      {/* ✅ Bowlers List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {bowlers.length > 0
            ? bowlers.map((bowler) => (
                <motion.div
                  key={bowler._id}
                  className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* ✅ Bowler Info */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-blue-400">
                      {bowler.fullName || "N/A"}
                    </h2>
                    <p className="text-sm text-gray-400">
                      📄 <strong>Form No:</strong> {bowler.formNo || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📧 <strong>Email:</strong> {bowler.email || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📱 <strong>Mobile:</strong> {bowler.mobile || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      🏠 <strong>Address:</strong> {bowler.address || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📅 <strong>DOB:</strong> {formatDate(bowler.dob)}
                    </p>
                  </div>

                  {/* ✅ Physical Attributes */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">
                      📏 <strong>Height:</strong> {bowler.height || "N/A"} cm
                    </p>
                    <p className="text-sm text-gray-400">
                      ⚖️ <strong>Weight:</strong> {bowler.weight || "N/A"} kg
                    </p>
                    <p className="text-sm text-gray-400">
                      🎳 <strong>Bowler Type:</strong>{" "}
                      {bowler.bowlerType || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      💪 <strong>Arm Category:</strong>{" "}
                      {bowler.armCategory || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      🏏 <strong>Field Category:</strong>{" "}
                      {bowler.fieldCategory || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📆 <strong>Created At:</strong>{" "}
                      {formatDate(bowler.createdAt)}
                    </p>
                  </div>

                  {/* ✅ Delete Button */}
                  <motion.button
                    onClick={() => handleDelete(bowler._id)}
                    className={`w-full py-2 rounded-md text-white transition duration-300 ${
                      deletingId === bowler._id
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                    disabled={deletingId === bowler._id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {deletingId === bowler._id ? "Deleting..." : "Delete"}
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
                  <p className="text-gray-400 text-xl">No bowlers found.</p>
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

export default Bowler;
