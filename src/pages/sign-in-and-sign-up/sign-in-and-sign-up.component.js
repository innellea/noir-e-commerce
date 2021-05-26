 /* eslint-disable */ 
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-named-as-default-member
import SignIn from "../../components/sign-in/sign-in.component";
// eslint-disable-next-line import/no-named-as-default-member
import SignUp from "../../components/sign-up/sign-up.component";

import SignInAndSignUpContainer from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
