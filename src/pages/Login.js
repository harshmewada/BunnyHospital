import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "../icons/Facebook";
import GoogleIcon from "../icons/Facebook";
import MainLayout from "../components/MainLayout";
import { loginUser } from "../redux/actions";
import useSlowDispatch from "../hooks/slowDispatch";
import useIsLoading from "../hooks/useIsLoading";
const Login = () => {
  const history = useHistory();
  const dispatch = useSlowDispatch();
  const isLoading = useIsLoading();
  const fbLogin = () => window.open("https://www.facebook.com/");
  const gLogin = () =>
    window.open("https://myaccount.google.com/?utm_source=sign_in_no_continue");

  return (
    <>
      <MainLayout>
        <Box
          style={{
            backgroundColor: "background.default",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Must be a valid email")
                  .max(255)
                  .required("Email is required"),
                password: Yup.string()
                  .max(255)
                  .required("Password is required"),
              })}
              onSubmit={(data) => {
                // navigate("/app/dashboard", { replace: true });
                dispatch(loginUser(data), () => {
                  if (
                    data.email === "admin@gmail.com" &&
                    data.password === "admin"
                  ) {
                    history.push("/");
                  } else {
                    alert("Invalid Email or password");
                  }
                });
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box style={{ marginBottom: 10, marginTop: 50 }}>
                    <Typography color="textPrimary" variant="h2">
                      Sign in
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Sign in on the internal platform
                    </Typography>
                  </Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Button
                        color="primary"
                        fullWidth
                        startIcon={<FacebookIcon />}
                        onClick={fbLogin}
                        size="large"
                        variant="contained"
                      >
                        Login with Facebook
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button
                        fullWidth
                        startIcon={<GoogleIcon />}
                        onClick={gLogin}
                        size="large"
                        variant="contained"
                      >
                        Login with Google
                      </Button>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      pb: 1,
                      pt: 3,
                    }}
                  >
                    <Typography
                      align="center"
                      color="textSecondary"
                      variant="body1"
                    >
                      or login with email address
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      disabled={isLoading}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body1">
                    Forgot Password ?
                    <Link component={RouterLink} to="/register" variant="h6">
                      Reset
                    </Link>
                  </Typography>
                </form>
              )}
            </Formik>
          </Container>
        </Box>
      </MainLayout>
    </>
  );
};

export default Login;
