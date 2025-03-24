import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaBirthdayCake,
  FaEnvelope,
  FaRulerVertical,
  FaWeight,
  FaHashtag,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  registerUser,
  clearAllErrors,
  resetRegisterState,
} from "../../store/slices/RegisterSlice.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Registration = () => {
  const dispatch = useDispatch();

  // ✅ Redux state
  const { loading, error, message } = useSelector((state) => state.register);

  // ✅ Form Data State
  const [formData, setFormData] = useState({
    formNo: "",
    fullName: "",
    email: "",
    address: "",
    mobile: "",
    dob: new Date(), // Initialize dob as a Date object
    height: "",
    weight: "",
    category: "Batsman",
    hand: "Right",
    bowlerType: "Fast",
    fieldCategory: "General",
    armCategory: "Right",
  });

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle Date Change
  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      dob: date,
    }));
  };

  // ✅ Form Validation
  const validateForm = () => {
    const { formNo, fullName, email, address, mobile, dob, height, weight } =
      formData;

    if (
      !formNo ||
      !fullName ||
      !email ||
      !address ||
      !mobile ||
      !dob ||
      !height ||
      !weight
    ) {
      toast.error("❌ Please fill in all required fields.");
      return false;
    }
    return true;
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formattedDOB = formData.dob.toISOString();

    // ✅ Prepare Form Data for Submission
    const formDataToSend = {
      ...formData,
      dob: formattedDOB,
      height: Number(formData.height),
      weight: Number(formData.weight),
    };

    console.log("Submitting Form Data:", formDataToSend);

    if (!loading) {
      dispatch(registerUser(formDataToSend));
    }
  };

  // ✅ Handle Errors and Success Responses
  useEffect(() => {
    if (error) {
      toast.error(`❌ ${error}`);
      dispatch(clearAllErrors());
    }

    if (message && message.trim() !== "") {
      toast.success(`✅ ${message}`);
      dispatch(resetRegisterState());

      // ✅ Reset Form
      setFormData({
        formNo: "",
        fullName: "",
        email: "",
        address: "",
        mobile: "",
        dob: new Date(),
        height: "",
        weight: "",
        category: "Batsman",
        hand: "Right",
        bowlerType: "Fast",
        fieldCategory: "General",
        armCategory: "Right",
      });
    }
  }, [dispatch, error, message]);

  // ✅ Render Form
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-purple-400 p-6">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          {/* Form Fields */}
          {[
            { name: "fullName", placeholder: "Full Name", icon: <FaUser /> },
            {
              name: "email",
              placeholder: "Email",
              icon: <FaEnvelope />,
              type: "email",
            },
            {
              name: "address",
              placeholder: "Address",
              icon: <FaMapMarkerAlt />,
            },
            {
              name: "mobile",
              placeholder: "Mobile Number",
              icon: <FaPhone />,
              type: "tel",
            },
            {
              name: "height",
              placeholder: "Height (cm)",
              icon: <FaRulerVertical />,
              type: "number",
            },
            {
              name: "weight",
              placeholder: "Weight (kg)",
              icon: <FaWeight />,
              type: "number",
            },
          ].map((field) => (
            <motion.div
              key={field.name}
              className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100"
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
              />
            </motion.div>
          ))}

          {/* Date Picker */}
          <motion.div className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100">
            <span className="text-gray-500 mr-3 font-bold">DOB</span>
            <DatePicker
              selected={formData.dob}
              onChange={handleDateChange}
              dateFormat="dd-MM-yyyy"
              className="w-full bg-transparent outline-none text-gray-700"
              placeholderText="Date of Birth"
            />
          </motion.div>

          {/* Category Dropdown */}
          <motion.div className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-700"
            >
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-Rounder">All-Rounder</option>
            </select>
          </motion.div>

          {/* Field Category Dropdown */}
          <motion.div className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100">
            <select
              name="fieldCategory"
              value={formData.fieldCategory}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-700"
            >
              <option value="General">General</option>
              <option value="Wicket Keeper">Wicket Keeper</option>
            </select>
          </motion.div>

          {/* Conditional Fields */}
          {formData.category === "Batsman" && (
            <motion.div className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100">
              <select
                name="hand"
                value={formData.hand}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700"
              >
                <option value="Right">Right</option>
                <option value="Left">Left</option>
              </select>
            </motion.div>
          )}

          {(formData.category === "Bowler" ||
            formData.category === "All-Rounder") && (
            <>
              <motion.div className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100">
                <select
                  name="bowlerType"
                  value={formData.bowlerType}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-700"
                >
                  <option value="Fast">Fast</option>
                  <option value="Medium">Medium</option>
                  <option value="Spinner">Spinner</option>
                </select>
              </motion.div>

              <motion.div className="flex items-center border rounded-lg p-3 shadow-sm bg-gray-100">
                <select
                  name="armCategory"
                  value={formData.armCategory}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-700"
                >
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                </select>
              </motion.div>
            </>
          )}

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Registration;
