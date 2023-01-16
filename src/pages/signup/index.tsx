import Head from "next/head";
import { Signup } from "@ui/components/organism/Signup/Signup";

const SignupView = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Reddit Clone</title>
      </Head>
      <Signup />
    </>
  );
};

export default SignupView;
