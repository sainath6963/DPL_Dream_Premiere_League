import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/AdminSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa"; // Spinner icon

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  // ✅ Form state handling
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(loginUser(formData));

      if (res.payload && res.payload.success) {
        toast.success("🏆 Login Successful! Redirecting...", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });

        // ✅ Redirect after success
        setTimeout(() => navigate("/admin"), 2000);
      } else {
        toast.error("🚨 Invalid credentials. Please try again.", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("❌ Server error. Please try again later.", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg border border-yellow-500"
      >
        {/* ✅ Page Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          🏏 Admin Login
        </motion.h2>

        {/* ✅ Login Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* ✅ Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-yellow-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
              required
            />
          </motion.div>

          {/* ✅ Password Field */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4"
          >
            <label className="block text-sm font-medium text-yellow-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
              required
            />
          </motion.div>

          {/* ✅ Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full mt-6 bg-yellow-400 text-gray-800 py-2 rounded-md font-bold hover:bg-yellow-500 transition duration-300 flex justify-center items-center ${
              loading ? "opacity-75 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
