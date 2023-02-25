import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface SessionState {
  init: boolean;
  businessId: string | null;
  publicUserId: string | null;
  verifyToken: string | null;
}

const defaultState: SessionState = {
  init: false,
  businessId: null,
  publicUserId: null,
  verifyToken: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: defaultState,
  reducers: {
    set: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    setBussinessId: (state, action: PayloadAction<string>) => {
      state.businessId = action.payload;
    },
    clear: (state) => {
      return { ...defaultState, init: true };
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, clear, setBussinessId } = sessionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSessionInit = (state: RootState) => state.session.init;
export const selectSessionBusiness = (state: RootState) =>
  state.session.businessId;

export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
