import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Async Thunk for Registration
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://dpl-backend-kuxw.onrender.com/api/v1/message/send",
        userData
      );
      return data.message; // Assuming API returns a success message
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload; // Success message from API
        toast.success(action.payload); // Show success toast
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload); // Show error toast
      });
  },
});

export const { clearAllErrors, resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
