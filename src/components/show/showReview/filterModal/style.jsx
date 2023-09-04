import { styled } from "styled-components";
import {
    LabelWrap,
    PriceLabel,
    PriceRangeMax,
    PriceRangeMin,
  PriceRangeWrap,
  PriceSlide,
  PriceSlideInner,
} from "../../../searchmodal/style";

// FilterModal.jsx
export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
`;
export const ModalWhiteBox = styled.div`
  position: absolute;
  top: 190px;
  left: 25px;
  width: 380px;
  height: 556px;
  border-radius: 10px;
  background: #fff;
  padding: 17px;
`;
export const ModalNav = styled.div`
  position: relative;
  height: 40px;
  color: #071d36;
  font-size: 20px;
  border-bottom: 2px solid #dde1e7;
  span {
    position: absolute;
    right: 0px;
    font-size: 30px;
    color: #a4a7ac;
    cursor: default;
  }
`;
export const FilterStarsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #dde1e7;
  padding: 15px 0;
`;
export const StarsSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FilterTitle = styled.div`
  color: #73777c;
  font-size: 16px;
  padding-bottom: 10px;
`;
export const FilterTxtBox = styled.div`
  text-align: center;
  width: 50px;
  height: 26px;
  cursor: default;
  border-radius: 5px;
  border: 1px solid #adb0b6;
  background: ${(props) =>
    props.isselected == "true" ? "#7FA7E3" : "#f6f9ff"};
  color: ${(props) => (props.isselected == "true" ? "#fff" : "#ADB0B6")};
`;
export const FilterPriceSlide = styled(PriceSlide)`
  border: 1px solid #d8e0ec;
  width: 310px;
  left: 15px;
`;
export const FilterPriceSlideInner = styled(PriceSlideInner)`
  background: linear-gradient(to right, #c8deff, #e6f0ff, #c8deff);
`;
export const FilterPriceRangeWrap = styled(PriceRangeWrap)`
  width: 310px;
  left: 15px;
  margin-bottom: 20px;
`;
export const FilterPriceRangeMin = styled(PriceRangeMin)`
  top: -13px;
  &::-webkit-slider-thumb {
    border: 2px solid #d8e0ec;
    background-color: #1270b0;
  }
`;
export const FilterPriceRangeMax = styled(FilterPriceRangeMin)`
  right: -23px;
`;
export const FilterLabelWrap = styled(LabelWrap)`
    justify-content: center;
`
export const FilterPriceLabel = styled(PriceLabel)``
export const FilterDiscountTxt = styled(FilterTxtBox)`
  width: 80px;
`;
export const FilterWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    *{
        margin-right: 6px;
        margin-bottom: 6px;
    }
`
export const ResetBtn = styled.div`
  width: 137px;
  height: 55px;
  border-radius: 5px;
  border: 1px solid #a2b4cf;
  background: #f6f9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9da6b6;
  font-size: 24px;
`;
export const SaveBlueBtn = styled(ResetBtn)`
  width: 200px;
  background: #4483e3;
  color: #fff;
`;
export const BtnWrapper = styled.div`
height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`