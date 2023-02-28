import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectSession } from "../../store/slices/session";


export const LoginPage = () => {

  // The `state` arg is correctly typed as `RootState` already
  const { publicUserId } = useAppSelector(selectSession);
  const navigate = useNavigate();

  useEffect(() => {
    if (publicUserId) {
      navigate('/business', { replace: true })
    }
  }, [publicUserId, navigate]);

  return (
    <LoginForm />
  )
}
