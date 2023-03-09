import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface SessionState {
  init: boolean;
  businessId: string | null;
  publicUserId: string | null;
  verifyToken: string | null;
  refreshToken: string | null;
  enabled: boolean | null;
}

const defaultState: SessionState = {
  init: false,
  businessId: null,
  publicUserId: null,
  verifyToken: null,
  refreshToken: null,
  enabled: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: defaultState,
  reducers: {
    setSessionState: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    setBussinessId: (state, action: PayloadAction<string>) => {
      state.businessId = action.payload;
    },
    setBusinessStatus: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload;
    },
    clearSessionState: (state) => {
      return { ...defaultState, init: true };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSessionState, clearSessionState, setBussinessId,setBusinessStatus } =
  sessionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSessionInit = (state: RootState) => state.session.init;
export const selectSessionBusiness = (state: RootState) =>
  state.session.businessId;

export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
