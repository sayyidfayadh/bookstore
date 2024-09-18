import { configureStore } from "@reduxjs/toolkit";
import  librarySlice  from "./LibrarySlice";

const library=configureStore({
  reducer:{
    librarySlice
  }
})
export default library