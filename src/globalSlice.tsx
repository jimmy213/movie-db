import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    isInitialized: false,
    currentMovieId: null
  },
  reducers: {
    initialize: (state, action) => {
      return { ...state, ...action.payload, isInitialized: true };
    },
    setCurrentMovieId: (state, action) => {
      state.currentMovieId = action.payload;
    }
  }
});

export const { initialize, setCurrentMovieId } = globalSlice.actions;

export default globalSlice.reducer;
