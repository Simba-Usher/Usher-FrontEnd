import { styled } from "styled-components";

export const SearchLine = styled.hr`
  width: 100%;
  border: 3px solid #fff;
`;

export const AreaBox = styled.div`
  width: 100%;
  height: 170px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    width: 100%;
    color: #062b56;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
export const Isselected = styled.div`
  color: ${(props) => (props.isselected ? "#071d36" : "#8c74a3")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #e5dcff;
  cursor: default;
  background: ${(props) => (props.isselected ? "#f3ebff" : "#fff")};
  &:hover {
    background: ${(props) => (props.isselected ? "#f3ebff" : "#fff")};
    color: ${(props) => (props.isselected ? "#071d36" : "#8c74a3")};
  }
`;
export const SubGrayTxt = styled.div`
  font-size: 1.2rem;
  color: #747177;
  font-weight: 600;
  width: 100%;
`;
export const DateWrapper = styled.div`
  display: flex;
  input {
    width: 118px;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #a4a0a9;
    background: #fcfaff;
    color: #8660c4;
    font-size: 1rem;
    text-align: center;
    padding-right: 4px;
  }
  p {
    width: 50px;
    text-align: center;
    color: #747177;
  }
`;
