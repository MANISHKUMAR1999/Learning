import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({

  reducer:{
    cart:cartSlice
  }

  /*
  create store
  - configurestore() - Rtx

  provide my store to app

  <Provider store = {store} -> import react-redux


  Slice

  -RTX - createSlice({
    name:"",
    initialstate:
    reducers:{
      addItems:(state,action)=>{
        state = action.payload

      }
    }
  })

  export {addItems,removeItems} = cartSlice.actions
  export default cartSlice.reducer;

  put that slice into the store

  -{
    reducer:{
      cart:cartSlice,
      user:userSlice

    }
  }

  */




});

export default store;