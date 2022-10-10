import React from "react";
import {Wrapper} from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";

export default function NotFound() {
    return (
        <>
            <Wrapper>
                <TopMainNavbar />
                <h1>This page doesnt exists, were sorry...</h1>
                <Footer />
            </Wrapper>
        </>
    )
}

