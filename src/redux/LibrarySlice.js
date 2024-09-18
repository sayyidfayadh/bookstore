import { createSlice } from "@reduxjs/toolkit";
const librarySlice=createSlice({
  name:"library",
  initialState:{
    book:[]
  },
  reducers:{
    addToLibrary:(state,action)=>{
      state.library.push(action.payload)
    },
    removeFromLibrary:(state,action)=>{
      state.library=state.library.filter(book=>book.id!=action.payload)
    }
    // replaceFromLibrary:(state,action)=>{
    //   state.library=state.library.fill()
    // }
  }

})
export default librarySlice.reducer
export const{addToLibrary,removeFromLibrary}=librarySlice.actions