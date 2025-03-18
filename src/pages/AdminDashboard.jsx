import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetRegisterState } from "../store/slices/RegisterSlice";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate, Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error } = useSelector((state) => state.message);

  useEffect(() => {
    if (message) toast.success(message);
    if (error) toast.error(error);
  }, [message, error]);

  // Handle Logout
  const handleLogout = () => {
    dispatch(resetRegisterState());
    toast.info("Logged out successfully!", { position: "bottom-right" });
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-gray-800 p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-yellow-400">🏏 Admin Panel</h2>
        <ul className="mt-6 space-y-4">
          <li>
            <Link
              to="batman" // ✅ Corrected to relative path
              className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Batman Registrations
            </Link>
          </li>
          <li>
            <Link
              to="balwer" // ✅ Corrected to relative path
              className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Bawler Registrations
            </Link>
          </li>
          <li>
            <Link
              to="AllRounder" // ✅ Corrected to relative path
              className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              All-Rounder Registrations
            </Link>
          </li>
          <li>
            <Link
              to="Wicket-Keeper" // ✅ Corrected to relative path
              className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Wicket-Keeper Registrations
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </motion.div>

      {/* Main Content - Dynamic Page Rendering */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-8 overflow-y-auto"
      >
        <Outlet /> {/* ✅ Batman Registration will load here */}
      </motion.div>

      <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
    </div>
  );
};

export default AdminDashboard;
