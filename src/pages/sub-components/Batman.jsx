import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  deleteMessage,
} from "../../store/slices/messageSlice.js";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";

const Batsman = () => {
  const dispatch = useDispatch();

  // ✅ Redux state handling
  const { messages, loading, error } = useSelector((state) => state.AllCricket);
  const [batsmen, setBatsmen] = useState([]);
  const [deletingId, setDeletingId] = useState(null); // Track ID being deleted

  // ✅ Fetch batsmen on component mount
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  // ✅ Filter batsmen from messages
  useEffect(() => {
    if (messages?.length) {
      const filteredData = messages.filter(
        (msg) => msg.category?.toLowerCase() === "batsman"
      );
      setBatsmen(filteredData);
    }
  }, [messages]);

  // ✅ Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this batsman?"
    );
    if (!confirmDelete) return;

    setDeletingId(id);

    try {
      await dispatch(deleteMessage(id)).unwrap();
      setBatsmen((prev) => prev.filter((batsman) => batsman._id !== id));
      toast.success("Batsman deleted successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Failed to delete batsman. Try again!", {
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
        <h1 className="text-5xl font-extrabold text-green-400">Batsman List</h1>
        <p className="mt-2 text-gray-400">
          All registered batsmen with detailed information.
        </p>
      </motion.div>

      {/* ✅ Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-10">
          <motion.div
            className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"
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

      {/* ✅ Batsmen List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {batsmen.length > 0
            ? batsmen.map((batsman) => (
                <motion.div
                  key={batsman._id}
                  className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* ✅ Batsman Info */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-green-400">
                      {batsman.fullName || "N/A"}
                    </h2>
                    <p className="text-sm text-gray-400">
                      📄 <strong>Form No:</strong> {batsman.formNo || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📧 <strong>Email:</strong> {batsman.email || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      🏠 <strong>Address:</strong> {batsman.address || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📱 <strong>Mobile:</strong> {batsman.mobile || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📅 <strong>DOB:</strong> {formatDate(batsman.dob)}
                    </p>
                  </div>

                  {/* ✅ Physical Attributes */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">
                      📏 <strong>Height:</strong> {batsman.height || "N/A"} cm
                    </p>
                    <p className="text-sm text-gray-400">
                      ⚖️ <strong>Weight:</strong> {batsman.weight || "N/A"} kg
                    </p>
                    <p className="text-sm text-gray-400">
                      ✋ <strong>Hand:</strong> {batsman.hand || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      🎯 <strong>Category:</strong> {batsman.category || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      🏏 <strong>Field Category:</strong>{" "}
                      {batsman.fieldCategory || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400">
                      📆 <strong>Created At:</strong>{" "}
                      {formatDate(batsman.createdAt)}
                    </p>
                  </div>

                  {/* ✅ Delete Button */}
                  <motion.button
                    onClick={() => handleDelete(batsman._id)}
                    className={`w-full py-2 rounded-md text-white transition duration-300 ${
                      deletingId === batsman._id
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                    disabled={deletingId === batsman._id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {deletingId === batsman._id ? "Deleting..." : "Delete"}
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
                  <p className="text-gray-400 text-xl">No batsmen found.</p>
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

export default Batsman;
