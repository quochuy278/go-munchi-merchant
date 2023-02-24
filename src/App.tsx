import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingPage } from "./pages/SettingPage";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { useEffect, useState } from "react";
function App() {

  const [init, setInit] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setTimeout(() => {
      // Get data from preference
      // Dispatch app state
      setInit(true);
    }, 5000)
  }, [init]);

  if (init === false) {
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
