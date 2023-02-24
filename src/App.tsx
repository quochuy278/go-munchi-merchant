import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingPage } from "./pages/SettingPage";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { useAppSelector, useAppDispatch } from './store/hooks';
import { selectSessionInit, init as initSessionState } from "./store/slices/session";
import { useEffect } from "react";

function App() {

  // The `state` arg is correctly typed as `RootState` already
  const init = useAppSelector(selectSessionInit);
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(() => {
      dispatch(initSessionState({ init: true }))
    }, 2000)

  }, [dispatch, init]);

  if (!init) {
    return <h1>Loading</h1>;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
