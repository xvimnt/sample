import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 80px;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "")};
  width: 100%;
  min-height: 95vh;
  text-align: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;