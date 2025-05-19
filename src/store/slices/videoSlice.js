import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  videos: [], // Always an array
  loading: false,
  error: null,
};
const api = import.meta.env.VITE_API;

// Async thunk: Fetch videos
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await axios.get(`${api}/api/v1/video`);
  console.log("vite api now only print", api);

  // If the backend sends { videos: [...] }, return only the array
  if (Array.isArray(response.data)) {
    return response.data;
  } else if (Array.isArray(response.data.videos)) {
    return response.data.videos;
  } else {
    return []; // Fallback to empty array to prevent crashes
  }
});

// Async thunk: Upload video
export const uploadVideo = createAsyncThunk(
  "videos/uploadVideo",
  async (formData) => {
    const response = await axios.post(
      `${api}/api/v1/video/upload/hls`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data; // Should be the uploaded video object
  }
);

// Async thunk: Delete video
export const deleteVideo = createAsyncThunk(
  "videos/deleteVideo",
  async (videoId) => {
    await axios.delete(`${api}/api/v1/video/${videoId}`);
    return videoId; // Return the deleted video's ID
  }
);

// Create the slice
const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch videos.";
      })

      // Upload
      .addCase(uploadVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.videos.push(action.payload);
      })
      .addCase(uploadVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to upload video.";
      })

      // Delete
      .addCase(deleteVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = state.videos.filter(
          (video) => video._id !== action.payload
        );
      })
      .addCase(deleteVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete video.";
      });
  },
});

// Selectors
export const selectVideos = (state) => state.videos.videos;
export const selectLoading = (state) => state.videos.loading;
export const selectError = (state) => state.videos.error;

// Export reducer
export default videoSlice.reducer;
