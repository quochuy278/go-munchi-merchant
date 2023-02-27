import CenterContainer from "../components/Container/CenterContainer";
import { useAppSelector } from "../store/hooks";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { selectSession, set as setSessionState } from "../store/slices/session";
import {Button} from '@mui/material'

export const HomePage = () => {

  // const { businessId } = useAppSelector(selectSession);

  console.log("This is home page");
  return (
    <CenterContainer>
      <Button variant="contained"> Ringing button</Button>
    </CenterContainer>
  );
};
