import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    getLogsRequest: (state, action) => {
      state.isLoading = true;
    },
    getLogsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getLogsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { getLogsError, getLogsRequest, getLogsSuccess } =
  logsSlice.actions;
export default logsSlice.reducer;
