import {
  Avatar,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { setSessionState } from "../utils/preference";
import { useAppDispatch } from "../store/hooks";
import { set as setReduxSessionState } from "../store/slices/session";
import { useNavigate } from "react-router-dom";
import { SignInData, useSignInMutation } from "../store/slices/api";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const [signinUser, { isLoading: loading }] = useSignInMutation();
  const handleLogin = async (event: any) => {
    event.preventDefault();
    // const sessionState = {
    //   userId: "Huy Bui",
    // };
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"), data.get("password"));
    const response: any = await signinUser({
      email: data.get("email") as string,
      password: data.get("password") as string,
    });
    console.log(response);
    const sessionState = {
      publicUserId: response.data.publicId,
      verifyToken: response.data.verifyToken,
      isAuthenticated: true,
    };
    // console.log("set session state", sessionState);
    await setSessionState(sessionState);
    dispatch(setReduxSessionState(sessionState));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            {...(show ? { type: "text" } : { type: "password" })}
            id="password"
            name="password"
            autoComplete="password"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShow(!show)}>
                  {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
