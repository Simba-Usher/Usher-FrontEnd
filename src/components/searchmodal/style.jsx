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
  color: ${(props) => (props.isselected === "true" ? "#071d36" : "#8c74a3")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #e5dcff;
  cursor: default;
  background: ${(props) => (props.isselected === "true" ? "#f3ebff" : "#fff")};
  &:hover {
    background: ${(props) =>
      props.isselected === "true" ? "#f3ebff" : "#fff"};
    color: ${(props) => (props.isselected === "true" ? "#071d36" : "#8c74a3")};
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
    width: 124px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #a4a0a9;
    color: #8660c4;
    font-size: 1rem;
    text-align: center;
    padding-right: 4px;
  }
  p {
    width: 50px;
    height: 40px;
    color: #A4A0A9;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 36px;
    font-weight: 400;
  }
`;

// SearchPrice.jsx
export const PriceBox = styled(AreaBox)`
  width: 430px;
  height: 182px;
  padding: 10px 20px;
`
export const PriceSlide = styled.div`
  position: relative;
  height: 14px;
  width: 382px;
  border-radius: 10px;
  background-color: #FEFEFF;
  border: 1px solid #E5DCFF;
`;
export const PriceSlideInner = styled.div`
  position: absolute;
  left: ${props => props.rangeMinPercent}%;
  right: ${props => props.rangeMaxPercent}%;
  height: 14px;
  border-radius: 10px;
  background: linear-gradient(to right, #CCAFFA, #E7D8FF, #CCAFFA);
`;
export const PriceWrap = styled.div`
  border: 1px solid red;
  position: relative;
  width: 382px;
`
export const PriceRangeWrap = styled.div`
  position: relative;
  width: 382px;
`;
export const PriceRangeMin = styled.input`
  width: 100%;
  height: 7px;
  position: absolute;
  top: -31px;
  background: none;
  /* 막대 기본 속성 제거 */
  -webkit-appearance: none;
  /* 버튼 디자인 */
  &::-webkit-slider-thumb {
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 2px solid #E5DCFF;
    background-color: #9259B5;
    -webkit-appearance: none;
    position: relative;
    right: 10px;
  }
  pointer-events: none;
  &::-webkit-slider-thumb {
    pointer-events: auto;
  }
`;
export const PriceRangeMax = styled(PriceRangeMin)`
  right: -23px;
`;
export const LabelWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 334px;
  height: 42px;
  p {
    width: 50px;
    height: 40px;
    color: #A4A0A9;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 36px;
    font-weight: 400;
  }
`;
export const PriceLabel = styled.div`
  /* border: 1px solid red; */
  width: 124px;
  height: 40px;
  color: #071D36;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #A4A0A9;
  background-color: #FFF;
`