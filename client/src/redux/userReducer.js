import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    isFetching: false,
    error: false,
    isLoading: false,
  },
  // login user
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isLoading = true;
    },
    loginSuccess: (state, actions) => {
      state.isFetching = false;
      state.currentUser = actions.payload;
      state.error = false;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoading = false;
    },
    // update user
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isLoading = true;
    },
    updateUserSuccess: (state, actions) => {
      state.isFetching = false;
      // state.currentUser[
      //   state.currentUser((item) => (item._id = actions.payload.id))
      // ] = actions.payload.user;
      state.currentUser = state.currentUser((item) =>
        item.id === actions.payload.id ? actions.payload : item
      );
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginFailure,
  loginStart,
  loginSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
