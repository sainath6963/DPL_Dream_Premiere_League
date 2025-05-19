import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/RegisterSlice.js";
import authReducer from "./slices/AdminSlice.js";
import cricket from "../store/slices/messageSlice.js";
import videoReducer from "../store/slices/videoSlice.js";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    AllCricket: cricket,
    auth: authReducer, // Handles authentication if needed
    videos: videoReducer,
  },
});
