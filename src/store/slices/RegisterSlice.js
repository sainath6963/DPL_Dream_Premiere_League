import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Use environment variable or fallback
const API_BASE_URL = import.meta.env.VITE_API;

// ✅ Async Thunk for Registration
export const registerUser = createAsyncThunk(
  "register/user",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/v1/message/send`,
        userData
      );
      return data; // ✅ Return full backend response (including message)
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
      state.user = null;
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })

      // ✅ Success case (No toast here)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || null;
        state.message = action.payload.message || "Registration successful!";
      })

      // ✅ Error case (No toast here)
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong!";
      });
  },
});

// ✅ Export Actions & Reducer
export const { clearAllErrors, resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
