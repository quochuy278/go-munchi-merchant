import logo from "./logo.svg";
import "./App.css";
import { LayoutWithChecking } from "./components/Layout/Layout";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingPage } from "./pages/SettingPage";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { useAppSelector, useAppDispatch } from './store/hooks';
import { selectSession, set as setSessionState, setBussinessId } from "./store/slices/session";
import { useEffect } from "react";
import { addSessionState, getSessionState } from './utils/preference';
import ProtectedRoute from "./components/Router/ProtectedRoute";
import { Button } from "@mui/material";

const BusinessPage = () => {

  const { businessId } = useAppSelector(selectSession);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Update the document title using the browser API
    if (businessId) {
      navigate('/', { replace: true })
    }

  }, [businessId, navigate]);

  const handleSetBusiness = async () => {
    const businessName = 'Huy Dau Bui Business';
    const businessState = { businessId: businessName };
    await addSessionState(businessState);
    dispatch(setBussinessId(businessName));
  }

  return (
    <>
      <h1>Business Page</h1>
      <Button onClick={handleSetBusiness}>
        Huy Dau Bui Bussiness
      </Button>
    </>
  )
}

function App() {

  // The `state` arg is correctly typed as `RootState` already
  const { init, userId } = useAppSelector(selectSession);
  const dispatch = useAppDispatch()
  console.log('App render');

  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(async () => {
      const sessionState = await getSessionState();
      console.log('preference session state', sessionState);
      dispatch(setSessionState({ ...sessionState, init: true }))
    }, 2000)

  }, [dispatch, init]);

  if (!init) {
    return <h1>Loading</h1>;
  }

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute canAccess={userId != null} />
        }>
        <Route element={<LayoutWithChecking />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route
        element={
          <ProtectedRoute canAccess={userId != null} />
        }>
        <Route path="/business" element={<BusinessPage />} />
      </Route>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
