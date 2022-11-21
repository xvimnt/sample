import React from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <LinkScroll className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <Link  to="/" className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Fanatic
              </Link>
            </LinkScroll>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Milky Ware</span> All Right Reserved
            </StyleP>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;