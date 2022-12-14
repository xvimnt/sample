import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
// Assets
import {MdMenu} from "react-icons/md";
import LogoIcon from "../../assets/svg/Logo";

export default function AdminSidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            fanatic
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <MdMenu />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeclass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/home"
            offset={-60}
          >
            Dashboard
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeclass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/products"
            offset={-60}
          >
            Products
          </Link>
        </li>
      </UlStyle>
      
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  z-index: 9999;
  left: ${(props) => (props.sidebarOpen ? "0px" : "-300px")};
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  background-color: transparent;
  padding: 10px;
  color: white;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
