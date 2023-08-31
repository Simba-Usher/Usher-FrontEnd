import { styled } from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  /* justify-content: space-around; */
`;
export const SearchSection = styled.div`
  position: absolute;
  left: 122px;
  input {
    width: 249px;
    height: 33px;
    border-radius: 20px;
    border: 2px solid #90a4c1;
    background: #fafcff;
    padding-left: 15px;
    color: #90a4c1;
    ::placeholder {
      color: #90a4c1;
    }
  }
  span {
    position: absolute;
    right: 13px;
    top: 5px;
    color: #90a4c1;
  }
`;
export const LevelIcon = styled.div`
  position: absolute;
  right: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #d9d9d9;
  color: #808080;
  border-radius: 40px;
  font-size: 0.5rem;
`;
export const MoreBtn = styled.img`
  position: absolute;
  right: 15px;
`