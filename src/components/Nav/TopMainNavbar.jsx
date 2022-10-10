import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom"
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopMainNavbar() {
    const [y, setY] = useState(window.scrollY);
    const [sidebarOpen, toggleSidebar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        };
    }, [y]);


    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
            <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
                <NavInner className="container flexSpaceCenter">

                    <LinkScroll className="pointer flexNullCenter" to="home" smooth={true}>
                        <LogoIcon />
                        <Link to="/" style={{ marginLeft: "15px" }} className="font20 extraBold">
                            fanatic
                        </Link>
                    </LinkScroll>
                    <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
                        <BurgerIcon />
                    </BurderWrapper><UlWrapperRight className="flexNullCenter">
                        <li className="semiBold font15 pointer">
                            <Link to="/login" style={{ padding: "10px 30px 10px 0" }}>
                                Log in
                            </Link>
                        </li>
                        <li className="semiBold font15 pointer flexCenter">
                            <Link to="/signup" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                                Get Started
                            </Link>
                        </li>
                    </UlWrapperRight>
                </NavInner>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


