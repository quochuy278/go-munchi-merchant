import { zodResolver } from "@hookform/resolvers/zod";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
  Typography
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TypeOf } from "zod";
import { useAppDispatch } from "../../store/hooks";
import { useSignInMutation } from "../../store/slices/api";
import { setSessionState as setReduxSessionState } from "../../store/slices/session";
import { setSessionState } from "../../utils/preference";
import { signInSchema } from "../../utils/validateSchema";
import Notification from "../Notification/Notification";
type SignInInput = TypeOf<typeof signInSchema>;
const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const [signinUser, { isLoading: loading }] = useSignInMutation();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  });
  const onHandleLogin = async (values: any) => {
    // const sessionState = {
    //   userId: "Huy Bui",
    // };
    const response: any = await signinUser({
      email: values.email,
      password: values.password,
    });
    if (response.error) {
      setError(response.error.data.result);
    }
    const sessionState = {
      publicUserId: response.data.publicId,
      verifyToken: response.data.verifyToken,
      refreshToken: response.data.refreshToken,
      isAuthenticated: true,
      enabled: false
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
        <Box
          component="form"
          onSubmit={handleSubmit(onHandleLogin)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            {...register("email")}
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            type="email"
            error={!!errors["email"]}
            helperText={errors["email"] ? errors["email"].message : ""}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            {...(show ? { type: "text" } : { type: "password" })}
            {...register("password")}
            id="password"
            name="password"
            autoComplete="password"
            error={!!errors["password"]}
            helperText={errors["password"] ? errors["password"].message : ""}
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
            {...(loading ? { disabled: true } : { disabled: false })}
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
      {error && (
        <Box sx={{ marginTop: "20px" }}>
          <Notification message={error} />
        </Box>
      )}
    </Container>
  );
};

export default LoginForm;
