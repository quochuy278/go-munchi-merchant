import { configureStore } from "@reduxjs/toolkit";
import { munchiApi } from "./slices/api";
import sessionReducer from "./slices/session";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    [munchiApi.reducerPath]: munchiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: true }).concat(
      munchiApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
