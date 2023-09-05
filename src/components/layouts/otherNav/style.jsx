import { styled } from "styled-components";

export const NavWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
export const Left = styled.div`
  position: absolute;
  left: 5%;
`;
export const Right = styled.div`
  position: absolute;
  right: 5%;
  top: 22px;
  span{
    font-size: 2rem;
    color: #A2B4CF;
  }
`;