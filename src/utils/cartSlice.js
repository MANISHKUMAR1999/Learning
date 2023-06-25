import { createSlice } from "@reduxjs/toolkit";

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
     const filteredCart = state.items.filter((item)=>item.id !== action.payload)

     console.log(filteredCart,"byyyy")

      //state.items.filter((item,index)=> item.id !== action.payload)

    state.items = filteredCart


      
    },

    clearCart:(state,action)=>{
      state.items = [];
    }
  }
})

export const {addItem,removeItem,clearCart} =cartSlice.actions

export default cartSlice.reducer;

