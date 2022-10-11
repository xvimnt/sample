import React from "react";
import {Wrapper} from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";

export default function SignUp() {
  return (
    <>
      <TopMainNavbar />
      <Wrapper>
        <h1>Hello User: </h1>
      </Wrapper>
      <Footer />
    </>
  )
}