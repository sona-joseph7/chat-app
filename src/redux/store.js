import { configureStore, createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name:"user",
  initialState : {username : ""},
  reducers:{
    setUsername:(state, action)=>{
      state.username = action.payload;
    }
  }
})

export const {setUsername} = userSlice.actions;
export const store = configureStore({reducer:{user:userSlice.reducer}})