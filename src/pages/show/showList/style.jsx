import { styled } from "styled-components";

export const ShowListTitle = styled.div`
position: relative;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  span{
    margin-right: 10px;
    font-size: 2rem;
  }
`;
export const FloatRight = styled.p`
  position: absolute;
  right: 10px;
  color: #b1b8c0;
  font-size: 0.8rem;
  font-weight:400;
`;
export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b1b8c0;
  font-size: 0.8rem;
  margin: 20px 0 0 10px;
  :nth-child(2){
    font-weight: 600;
    display: flex;
    align-items: center;
  }
`;