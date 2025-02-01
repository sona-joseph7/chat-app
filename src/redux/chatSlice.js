import { createSlice } from "@reduxjs/toolkit";
import { setUsername } from "./store";

const initialState = {
  username : '',
  message : [],
  users : [],
}

const chatSlice = createSlice({
  name:'chat',
  initialState,
  reducers:{
    setUsername:(state,action)=>{
      state.username = action.payload
    },
    addMessage:(state,action)=>{
      state.messages.push(action,payload);
    },
    setUsers:(state,action)=>{
      state.users = action.payload
    },
  }
})

export const {setUsername, addMessage, setUsers} = chatSlice.actions;
export default chatSlice.reducer;