import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [
    { voted_number: "1", amount: 1 },
    { voted_number: "2", amount: 1 },
    { voted_number: "3", amount: 1 },
    { voted_number: "4", amount: 1 },
    { voted_number: "5", amount: 1 },
    { voted_number: "6", amount: 1 },
    { voted_number: "7", amount: 1 },
    { voted_number: "8", amount: 1 },
    { voted_number: "9", amount: 1 },
  ],
  isLoading: false,
  error: null,
  noDataMes: null,
};
const votesSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    createVoteRequest: (state, action) => {
      state.isLoading = true;
    },
    createVoteSuccess: (state, action) => {
      state.isLoading = false;
      state.data = state.data.map((i) => {
        if (i.voted_number === action.payload) {
          return i.amount++;
        }
      });
    },
    createVoteError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getVoteRequest: (state, action) => {
      state.isLoading = true;
    },
    getVoteByDateSuccess: (state, action) => {
      state.isLoading = false;
      state.data =
        action.payload.length === 0 ? initialState.data : action.payload;
      state.noDataMes =
        action.payload.length === 0 ? "No data for this date" : null;
    },
    getVoteError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  createVoteRequest,
  createVoteSuccess,
  createVoteError,
  getVoteError,
  getVoteRequest,
  getVoteByDateSuccess,
} = votesSlice.actions;
export default votesSlice.reducer;
