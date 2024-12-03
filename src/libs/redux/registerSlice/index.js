import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerData: null,
  loginData: null,
  status: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addRegisterData: (state, { payload }) => {
      state.registerData = payload;
      localStorage.setItem("user", JSON.stringify(state.registerData));
    },
    addLoginData: (state, { payload }) => {
      state.loginData = payload;
      console.log(state.loginData);
      if (
        state.loginData?.email === state.registerData?.email &&
        state.loginData?.password === state.registerData?.password
      ) {
       state.status = !state.status;
      } else {
        
        //  console.log("Hello");
         
         alert("Your email and password must match")
      }
    },
  },
});

const registerActions = {
  ...registerSlice.actions,
};

const registerReducer = registerSlice.reducer;

export { registerActions, registerReducer };
