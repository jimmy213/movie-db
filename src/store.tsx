import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import modalReducer from "./components/Modal/modalSlice";

export default configureStore({
  reducer: {
    global: globalReducer,
    modal: modalReducer
  }
});
