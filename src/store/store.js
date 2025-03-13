import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./slices/messagesSlice.js";

import projectReduser from "./slices/projectSlice.js";

export const store = configureStore({
  reducer: {
    messages: messageReducer,

    Projects: projectReduser,
  },
});
