import { styled } from "styled-components";

export const GrayHr = styled.hr`
  border: 1px solid #dde1e7;
  margin: 0;
`;
export const ReviewBlueTxt = styled.div`
  color: #062b56;
  font-size: 18px;
  padding: 10px 0 0 15px;
`;
export const ReviewFilterSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #caced5;
  font-size: 16px;
  padding: 5px;
  margin: 10px;
  border-bottom: 2px solid #dde1e7;
`;
export const ReviewSort = styled.span`
  color: ${(props) => (
    props.isclicked == "true" ? "#5e91dd" : "#CACED5;"
  )};
  font-size: 16px;
  cursor: default;
`;
export const FilterBtnWrapper = styled.div`
  position: absolute;
  right: 5px;
  color: #5e91dd;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: default;
`;
