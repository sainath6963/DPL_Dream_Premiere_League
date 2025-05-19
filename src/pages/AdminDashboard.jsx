import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetRegisterState } from "../store/slices/RegisterSlice";
import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error } = useSelector((state) => state.AllCricket);
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar state

  // ✅ Redirect to Batman by default
  useEffect(() => {
    navigate("/admin/batman");
  }, []);

  useEffect(() => {
    if (message) toast.success(message);
    if (error) toast.error(error);
  }, [message, error]);

  // ✅ Handle Logout
  const handleLogout = () => {
    dispatch(resetRegisterState());
    toast.info("Logged out successfully!", { position: "bottom-right" });
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gray-800">
        <h2 className="text-xl font-bold text-yellow-400">🏏 Admin Panel</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-400 focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.4 }}
            className="md:w-64 w-72 fixed md:relative bg-gray-800 p-6 shadow-lg z-20"
          >
            <h2 className="text-2xl font-bold text-yellow-400">
              🏏 Admin Panel
            </h2>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="batman"
                  className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Batman Registrations
                </Link>
              </li>
              <li>
                <Link
                  to="balwer"
                  className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Bawler Registrations
                </Link>
              </li>
              <li>
                <Link
                  to="AllRounder"
                  className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  All-Rounder Registrations
                </Link>
              </li>
              <li>
                <Link
                  to="Wicket-Keeper"
                  className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Wicket-Keeper Registrations
                </Link>
              </li>
              <li>
                <Link
                  to="videosManager"
                  className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Videos Manager
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
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-8 overflow-y-auto"
      >
        <Outlet />
      </motion.div>

      <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
    </div>
  );
};

export default AdminDashboard;
