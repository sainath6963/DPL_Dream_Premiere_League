import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    loading: false,
    projects: [],
    error: null,
    message: null,
    singleProject: {},
  },
  reducers: {
    getAllProjectsRequest(state) {
      state.loading = true;
      state.error = null;
      state.projects = [];
    },
    getAllProjectsSuccess(state, action) {
      state.loading = false;
      state.projects = action.payload;
      state.error = null;
    },
    getAllProjectsFailed(state, action) {
      state.loading = false;
      state.projects = []; // Ensure old data is cleared
      state.error = action.payload;
    },
    addNewProjectRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addNewProjectSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    addNewProjectFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    deleteProjectRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteProjectSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    deleteProjectFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    updateProjectRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    updateProjectSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    updateProjectFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    getSingleProjectRequest(state) {
      state.loading = true;
      state.error = null;
      state.singleProject = {};
    },
    getSingleProjectSuccess(state, action) {
      state.loading = false;
      state.singleProject = action.payload;
      state.error = null;
    },
    getSingleProjectFailed(state, action) {
      state.loading = false;
      state.singleProject = {};
      state.error = action.payload;
    },
    resetProjectSlice(state) {
      state.error = null;
      state.projects = [];
      state.message = null;
      state.loading = false;
      state.singleProject = {};
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});

export const getAllProjects = () => async (dispatch) => {
  dispatch(projectSlice.actions.getAllProjectsRequest());
  try {
    const { data } = await axios.get("/projects/getall", {
      withCredentials: true,
    });
    dispatch(projectSlice.actions.getAllProjectsSuccess(data.projects));
  } catch (error) {
    dispatch(
      projectSlice.actions.getAllProjectsFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const addNewProject = (data) => async (dispatch) => {
  dispatch(projectSlice.actions.addNewProjectRequest());
  try {
    const { data: responseData } = await axios.post("/projects/add", data, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(projectSlice.actions.addNewProjectSuccess(responseData.message));
  } catch (error) {
    dispatch(
      projectSlice.actions.addNewProjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const deleteProject = (id) => async (dispatch) => {
  dispatch(projectSlice.actions.deleteProjectRequest());
  try {
    const { data } = await axios.delete("", {
      withCredentials: true,
    });
    dispatch(projectSlice.actions.deleteProjectSuccess(data.message));
  } catch (error) {
    dispatch(
      projectSlice.actions.deleteProjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const updateProject = (id, newData) => async (dispatch) => {
  dispatch(projectSlice.actions.updateProjectRequest());
  try {
    const { data } = await axios.put("", newData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(projectSlice.actions.updateProjectSuccess(data.message));
  } catch (error) {
    dispatch(
      projectSlice.actions.updateProjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const getSingleProject = (id) => async (dispatch) => {
  dispatch(projectSlice.actions.getSingleProjectRequest());
  try {
    const { data } = await axios.get(`/projects/${id}`, {
      withCredentials: true,
    });
    dispatch(projectSlice.actions.getSingleProjectSuccess(data.project));
  } catch (error) {
    dispatch(
      projectSlice.actions.getSingleProjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const resetProjectSlice = () => (dispatch) => {
  dispatch(projectSlice.actions.resetProjectSlice());
};

export const clearAllProjectErrors = () => (dispatch) => {
  dispatch(projectSlice.actions.clearAllErrors());
};

export default projectSlice.reducer;
