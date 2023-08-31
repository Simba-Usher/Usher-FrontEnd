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

// SearchPrice.jsx
export const PriceBox = styled(AreaBox)`
  width: 430px;
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
  /* left: 30%; */
  left: ${props => props.rangeMinPercent}%;
  /* right: 30%; */
  right: ${props => props.rangeMaxPercent}%;
  height: 14px;
  border-radius: 10px;
  background-color: #b0b0b0;
  /* background-color: linear-gradient(90deg, #CCAFFA 0%, #CCAFFA 0%, #E7D8FF 47.4%, #CCAFFA 100%); */
`;
export const PriceWrap = styled.div`
  border: 1px solid red;
  position: relative;
  width: 382px;
`
export const PriceRangeWrap = styled.div`
  /* border: 1px solid red; */
  position: relative;
  width: 382px;
`;
export const PriceRangeMin = styled.input`
  /* border: 1px solid red; */
  width: 100%;
  height: 7px;
  position: absolute;
  top: -49px;
  background: none;
  /* 막대 기본 속성 제거 */
  -webkit-appearance: none;
  /* 버튼 디자인 */
  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
  }
  pointer-events: none;
  &::-webkit-slider-thumb {
    pointer-events: auto;
  }
`;
export const PriceRangeMax = styled(PriceRangeMin)`
  
`;
export const PriceLabel = styled.div`
  border: 1px solid red;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #666;
`