import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// API Base URL from .env (fallback to localhost)
const API_BASE_URL = "https://dpl-backend-kuxw.onrender.com";

// Async Thunk for Registration
export const registerUser = createAsyncThunk(
  "registerUser", // ✅ Added type prefix
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/v1/message/send`,
        userData
      );
      return data.message; // ✅ API should return a message on success
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Registration failed. Please try again!"
      );
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    clearAllErrors: (state) => {
      state.error = null;
    },
    resetRegisterState: (state) => {
      state.message = null;
      state.user = null;
      state.error = null; // ✅ Also clearing errors
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null; // ✅ Reset message on new request
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        toast.success(action.payload, { position: "bottom-right" }); // ✅ Consistent toast
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload, { position: "bottom-right" }); // ✅ Consistent toast
      });
  },
});

export const { clearAllErrors, resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
