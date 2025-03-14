import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./slices/RegisterSlice.js";
// import projectReducer from "./slices/projectSlice.js";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    // projects: projectReducer,
  },
});
