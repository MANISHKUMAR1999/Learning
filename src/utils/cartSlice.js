import { createSlice } from "@reduxjs/toolkit";
import { current } from 'immer';

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  reducers:{
    addItem:(state,action)=>{ 
      state.items.push(action.payload)

    },

    removeItem: (state, action) =>{

      //console.log(id)

     // console.log(action.payload.id,"yyyyyyyyyyyyyyyyyy")
     const filteredCart = state.items.filter((item)=>item.id !== action.payload.id)

    state.items = filteredCart


      
    },

    clearCart:(state,action)=>{
      state.items = [];
    }
  }
})

export const {addItem,removeItem,clearCart} =cartSlice.actions

export default cartSlice.reducer;

