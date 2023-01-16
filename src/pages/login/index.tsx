import Head from "next/head";
import { Login } from "@ui/components/organism/Login/Login";

const LoginView = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Reddit Clone</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginView;
