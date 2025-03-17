import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./slices/RegisterSlice.js";

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
