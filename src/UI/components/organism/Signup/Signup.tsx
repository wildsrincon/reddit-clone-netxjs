/* eslint-disable no-useless-catch */
import { FC, SyntheticEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Snackbar, TextField, Alert, Typography } from "@mui/material";
import { useUser } from "../../../../context/AuthContext";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

// Components
import { MainContainer } from "@ui/components/atoms";
import { CardAuth } from "@ui/components/atoms";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  code: string;
}

export const Signup: FC = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const [showCode, setShowCode] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      if (showCode) {
        confirmSignUp(data);
      } else {
        await signUpWithEmailAndPassword(data);
        setShowCode(true);
      }
    } catch (error) {
      console.error(error);
      setSignUpError(error.message);
      setOpen(true);
    }
  };

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function signUpWithEmailAndPassword(
    data: IFormInput
  ): Promise<CognitoUser> {
    const { username, password, email } = data;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log("Signed up a user:", user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async function confirmSignUp(data: IFormInput) {
    const { username, password, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      console.log("Successs, singed in a user", amplifyUser);
      if (amplifyUser) {
        router.push(`/`);
      } else {
        throw new Error("Something went wrong :'(");
      }
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  console.log("The value of the user from the hook is:", user);

  return (
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
          <CardAuth elevation={16}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: 700 }}
            >
              Reddit Clone
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Register your account
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
                    id="username"
                    label="Username"
                    type="text"
                    error={errors.username ? true : false}
                    helperText={
                      errors.username ? errors.username.message : null
                    }
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Please enter a username.",
                      },
                      minLength: {
                        value: 3,
                        message:
                          "Please enter a username between 3-16 characters.",
                      },
                      maxLength: {
                        value: 16,
                        message:
                          "Please enter a username between 3-16 characters.",
                      },
                    })}
                  />
                </Grid>
                <Grid item sx={{ marginBottom: 3 }}>
                  <TextField
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    id="email"
                    label="Email"
                    type="email"
                    error={errors.email ? true : false}
                    helperText={errors.email ? errors.email.message : null}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter a valid email.",
                      },
                    })}
                  />
                </Grid>
                <Grid item sx={{ marginBottom: 3 }}>
                  <TextField
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    id="password"
                    label="Password"
                    type="password"
                    error={errors.password ? true : false}
                    helperText={
                      errors.password ? errors.password.message : null
                    }
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter a password.",
                      },
                      minLength: {
                        value: 8,
                        message: "Please enter a stronger password.",
                      },
                    })}
                  />
                </Grid>

                {showCode && (
                  <Grid item>
                    <TextField
                      fullWidth
                      color="secondary"
                      variant="outlined"
                      id="code"
                      label="Verification Code"
                      type="text"
                      error={errors.code ? true : false}
                      helperText={errors.code ? errors.code.message : null}
                      {...register("code", {
                        required: {
                          value: true,
                          message: "Please enter a code.",
                        },
                        minLength: {
                          value: 6,
                          message: "Your verification is 6 characters long.",
                        },
                        maxLength: {
                          value: 6,
                          message: "Your verification is 6 characters long.",
                        },
                      })}
                    />
                  </Grid>
                )}

                <Grid
                  style={{
                    marginTop: 16,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Button variant="contained" type="submit">
                    {showCode ? "Confirm Code" : "Sign Up"}
                  </Button>
                </Grid>
              </Grid>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="error">
                  {signUpError}
                </Alert>
              </Snackbar>
            </form>
          </CardAuth>
        </Grid>
      </Grid>
    </MainContainer>
  );
};
