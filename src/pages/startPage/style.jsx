import { styled } from "styled-components";

export const LogoImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 100;
  img {
    width: 135px;
  }
`;
export const GoLogin = styled.div`
  position: fixed;
  z-index: 1500;
  bottom: 60px;
  left: 200px;
  width: 220px;
  height: 60px;
  /* border: 2px solid red; */
`;
export const GoMain = styled(GoLogin)`
left: 30px;
width: 150px;
`