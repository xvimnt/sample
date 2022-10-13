import React from "react";
import { Wrapper } from "../style/components"
// Amplify Auth
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_BPvfBtzpQ", // Please change this value.
    userPoolWebClientId: "1u6j86bkbgs0uboa6filjnvmcj", // Please change this value.
  },
});

export default function Login() {

  return (
    <>
      <TopMainNavbar />
      <Wrapper className="mt-5 mb-3">
        <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </Wrapper>
      <Footer />
    </>
  )
}