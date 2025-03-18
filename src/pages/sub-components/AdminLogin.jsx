import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/AdminSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginUser({ email, password }));

    if (res.payload && res.payload.success) {
      toast.success("🏆 Login Successful! Redirecting...", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
      setTimeout(() => navigate("/admin"), 2000);
    } else {
      toast.error("🚨 Login Failed! Invalid credentials.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg border border-yellow-400"
      >
        <h2 className="text-3xl font-bold text-center text-yellow-400">
          🏏 Cricket Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="mt-6">
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
              value={email}
              onChange={handleInputChange(setEmail)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
              required
            />
          </motion.div>

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
              value={password}
              onChange={handleInputChange(setPassword)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-yellow-400 text-gray-800 py-2 rounded-md font-bold hover:bg-yellow-500 transition duration-300"
            disabled={loading}
          >
            {loading ? "🏏 Logging in..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
