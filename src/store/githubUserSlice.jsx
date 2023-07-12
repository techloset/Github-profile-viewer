import { createSlice } from "@reduxjs/toolkit";


const githubUserSlice = createSlice({
    name :'githubUserSlice',
    initialState:{
        userName:''
    },
    reducers:{
        setUserName:(state,action)=>{
         console.log("action",action.payload);
         state.userName= action.payload;
        }
    }
});

export const {setUserName}= githubUserSlice.actions;
export default githubUserSlice.reducer;