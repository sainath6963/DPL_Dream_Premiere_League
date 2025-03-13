import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    loading: false,
    messages: [],
    error: null,
    message: null,
  },
  reducers: {
    getAllMessagesRequest(state) {
      state.loading = true;
      state.error = null;
      state.messages = [];
    },
    getAllMessagesSuccess(state, action) {
      state.loading = false;
      state.messages = action.payload;
      state.error = null;
    },
    getAllMessagesFailed(state, action) {
      state.loading = false;
      state.messages = []; // Ensure old messages are cleared on failure
      state.error = action.payload;
    },
    deleteMessageRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteMessageSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    deleteMessageFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    resetMessageSlice(state) {
      state.error = null;
      state.messages = [];
      state.message = null;
      state.loading = false;
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});

export const getAllMessages = () => async (dispatch) => {
  dispatch(messageSlice.actions.getAllMessagesRequest());
  try {
    const { data } = await axios.get("", {
      withCredentials: true,
    });
    dispatch(messageSlice.actions.getAllMessagesSuccess(data.messages));
  } catch (error) {
    dispatch(
      messageSlice.actions.getAllMessagesFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const deleteMessage = (id) => async (dispatch) => {
  dispatch(messageSlice.actions.deleteMessageRequest());
  try {
    const { data } = await axios.delete(`/message/delete/${id}`, {
      withCredentials: true,
    });
    dispatch(messageSlice.actions.deleteMessageSuccess(data.message));
  } catch (error) {
    dispatch(
      messageSlice.actions.deleteMessageFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const clearAllMessageErrors = () => (dispatch) => {
  dispatch(messageSlice.actions.clearAllErrors());
};

export const resetMessagesSlice = () => (dispatch) => {
  dispatch(messageSlice.actions.resetMessageSlice());
};

export default messageSlice.reducer;
