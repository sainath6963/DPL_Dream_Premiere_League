import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  deleteMessage,
} from "../../store/slices/messageSlice.js";
import { toast } from "react-toastify";

const AllRounder = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.AllCricket);
  const [allRounders, setAllRounders] = useState([]); // State for filtered all-rounders

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {
    if (messages) {
      const filteredData = messages.filter(
        (message) => message.role?.toLowerCase() === "all-rounder"
      );
      setAllRounders(filteredData);
    }
  }, [messages]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this all-rounder?"
    );
    if (!confirmDelete) return;

    try {
      await dispatch(deleteMessage(id)).unwrap();
      setAllRounders((prevData) =>
        prevData.filter((player) => player._id !== id)
      );
      toast.success("All-Rounder deleted successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Failed to delete all-rounder. Try again!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold">All-Rounder List</h1>
      <p className="mt-2 text-gray-300">List of all registered all-rounders.</p>

      {loading && <p className="mt-4 animate-pulse">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {allRounders.length > 0 ? (
          allRounders.map((player) => (
            <div
              key={player._id}
              className="p-4 bg-gray-800 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{player.name}</p>
                <p className="text-sm text-gray-400">Email: {player.email}</p>
                <p className="text-sm text-gray-400">
                  Phone: {player.phoneNumber}
                </p>
                <p className="text-sm text-gray-400">Age: {player.age}</p>
              </div>
              <button
                onClick={() => handleDelete(player._id)}
                className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="mt-4 text-gray-400">
            No all-rounder registrations found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllRounder;
