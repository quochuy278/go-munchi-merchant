import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface SessionState {
  init: boolean;
}

const defaultState: SessionState = {
  init: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: defaultState,
  reducers: {
    init: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
    clear: (state) => {
      state = defaultState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { init, clear } = sessionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSessionInit = (state: RootState) => state.session.init;

export default sessionSlice.reducer;
