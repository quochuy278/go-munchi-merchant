import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectSession } from "../store/slices/session";


export const LoginPage = () => {

  // The `state` arg is correctly typed as `RootState` already
  const { userId } = useAppSelector(selectSession);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate('/business', { replace: true })
    }
  }, [userId, navigate]);

  return (
    <LoginForm />
  )
}
