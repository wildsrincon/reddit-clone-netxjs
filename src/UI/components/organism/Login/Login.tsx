/* eslint-disable prefer-const */
import { useState, SyntheticEvent, FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Grid,
  Snackbar,
  Alert,
  TextField,
  Typography,
} from "@mui/material";

// Components
import { MainContainer } from "@ui/components/atoms";
import { CardAuth } from "@ui/components/atoms";

import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  password: string;
}

export const Login: FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [signInError, setSignInError] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await Auth.signIn(data.username, data.password);
      router.push(`/`);
    } catch (error) {
      console.error(error);
      setSignInError(error.message);
      setOpen(true);
    }
  };

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <MainContainer>
        <Grid
          container
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardAuth
              elevation={16}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: 700 }}
              >
                Reddit Clone
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                Sign in to the account
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Grid
                  container
                  sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid item sx={{ marginBottom: 3 }}>
                    <TextField
                      fullWidth
                      color="secondary"
                      variant="outlined"
                      label="Username"
                      type="text"
                      id="username"
                      error={errors.username ? true : false}
                      helperText={
                        errors.username ? errors.username.message : null
                      }
                      {...register("username")}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      color="secondary"
                      variant="outlined"
                      label="Password"
                      type="password"
                      error={errors.password ? true : false}
                      helperText={
                        errors.password ? errors.password.message : null
                      }
                      {...register("password")}
                    />
                  </Grid>
                  <Grid
                    style={{
                      marginTop: 16,
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Button variant="contained" type="submit">
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardAuth>
          </Grid>
        </Grid>
      </MainContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {signInError}
        </Alert>
      </Snackbar>
    </>
  );
};
