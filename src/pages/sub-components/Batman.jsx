import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  deleteMessage,
} from "../../store/slices/messageSlice.js";
import { toast } from "react-toastify";

const Batsman = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.AllCricket);
  const [batsmanData, setBatsmanData] = useState([]);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {
    if (messages) {
      const filteredData = messages.filter(
        (message) => message.role?.toLowerCase() === "batsman"
      );
      setBatsmanData(filteredData);
    }
  }, [messages]);

  // Handle Delete Function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this batsman?"
    );
    if (!confirmDelete) return;

    try {
      setBatsmanData((prevData) =>
        prevData.filter((batsman) => batsman._id !== id)
      ); // Optimistic UI update
      await dispatch(deleteMessage(id)).unwrap();
      toast.success("Batsman deleted successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Failed to delete batsman. Try again!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold">Batsman List</h1>
      <p className="mt-2 text-gray-300">List of all registered batsmen.</p>

      {loading && <p className="mt-4 animate-pulse">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {batsmanData.length > 0 ? (
          batsmanData.map((message) => (
            <div
              key={message._id}
              className="p-4 bg-gray-800 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{message.name}</p>
                <p className="text-sm text-gray-400">Email: {message.email}</p>
                <p className="text-sm text-gray-400">
                  Phone: {message.phoneNumber}
                </p>
                <p className="text-sm text-gray-400">Age: {message.age}</p>
              </div>
              <button
                onClick={() => handleDelete(message._id)}
                className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="mt-4 text-gray-400">No batsman registrations found.</p>
        )}
      </div>
    </div>
  );
};

export default Batsman;
