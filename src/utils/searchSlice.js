import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers:{
    cacheResults: (state,action) =>{
  //  {"ip":["iphone","iphon11"]}
  // state = {...action.payload,...state}
   state = Object.assign(state,action.payload);
    },
  },
});

export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer;

//LRU Cache - least recently used
