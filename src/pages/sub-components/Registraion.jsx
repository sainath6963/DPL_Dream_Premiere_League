import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBirthdayCake } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  registerUser,
  clearAllErrors,
  resetRegisterState,
} from "../../store/slices/RegisterSlice.js";

const Registration = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.message);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    role: "Batsman", // Ensuring correct initial state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData); // Debugging role selection
    if (!loading) {
      dispatch(registerUser(formData));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllErrors());
    }
    if (message) {
      dispatch(resetRegisterState());
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        role: "Batsman", // Resetting role properly
      });
    }
  }, [dispatch, error, message]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-purple-400 p-6">
      <motion.div
        className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          DPL Player Registration
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { name: "name", placeholder: "Full Name", icon: <FaUser /> },
            {
              name: "email",
              placeholder: "Email",
              icon: <FaEnvelope />,
              type: "email",
            },
            {
              name: "phone",
              placeholder: "Phone Number",
              icon: <FaPhone />,
              type: "tel",
            },
            {
              name: "age",
              placeholder: "Age",
              icon: <FaBirthdayCake />,
              type: "number",
              min: 16,
            },
          ].map((field) => (
            <motion.div
              key={field.name}
              className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-500 mr-3">{field.icon}</span>
              <input
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700"
                required
                min={field.min || undefined}
              />
            </motion.div>
          ))}

          {/* Fixed Dropdown for Player Role */}
          <motion.div
            className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <select
              name="role" // Fixed name attribute
              value={formData.role} // Ensuring correct state variable
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-700"
            >
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-Rounder">All-Rounder</option>
              <option value="Wicket-Keeper">Wicket-Keeper</option>
            </select>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Registration;
