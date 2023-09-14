import React, { useState } from 'react'
import * as S from "./style";

export const SearchPrice = ({
  rangeMinValue,
  setRangeMinValue,
  rangeMaxValue,
  setRangeMaxValue,
}) => {
  // 막대의 left, right 값으로 줄 백분율
  const [rangeMinPercent, setrangeMinPercent] = useState(0);
  const [rangeMaxPercent, setrangeMaxPercent] = useState(0);

  // onChange -> 현재값을 state에
  // const fixedMinPrice = 0;
  // const fixedMaxPrice = 200000;
  const priceGap = 20000;
  // const [rangeMinValue, setRangeMinValue] = useState(0);
  // const [rangeMaxValue, setRangeMaxValue] = useState(300000);

  const priceRangeMinValueHandler = (e) => {
    setRangeMinValue(parseInt(e.target.value));
  };
  const priceRangeMaxValueHandler = (e) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  // onChange -> 현재값을 막대의 left, right 값으로 주기위해 백분율로
  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } else {
      setrangeMinPercent((rangeMinValue / 300000) * 100);
      // setrangeMinPercent((rangeMinValue / fixedMaxPrice) * 100);
      setrangeMaxPercent(100 - (rangeMaxValue / 300000) * 100);
      // setrangeMaxPercent(100 - (rangeMaxValue / fixedMaxPrice) * 100);
    }
  };

  return (
    <>
      <S.PriceBox>
        <p>가격별</p>
        <S.PriceSlide>
          <S.PriceSlideInner
            className="gradient"
            rangeMinPercent={rangeMinPercent}
            rangeMaxPercent={rangeMaxPercent}
          />
        </S.PriceSlide>
        <S.PriceRangeWrap>
          <S.PriceRangeMin
            type="range"
            min="0"
            // min={fixedMinPrice}
            max={300000 - priceGap}
            // max={fixedMaxPrice - priceGap}
            step="1000"
            value={rangeMinValue}
            onChange={(e) => {
              priceRangeMinValueHandler(e);
              twoRangeHandler();
            }}
          />
          <S.PriceRangeMax
            type="range"
            min={priceGap}
            // min={fixedMinPrice + priceGap}
            max="300000"
            // max={fixedMaxPrice}
            step="1000"
            value={rangeMaxValue}
            onChange={(e) => {
              priceRangeMaxValueHandler(e);
              twoRangeHandler();
            }}
          />
        </S.PriceRangeWrap>
        <S.LabelWrap>
          <S.PriceLabel>￦{rangeMinValue.toLocaleString()}</S.PriceLabel>
          <p>~</p>
          <S.PriceLabel>￦{rangeMaxValue.toLocaleString()}</S.PriceLabel>
        </S.LabelWrap>
      </S.PriceBox>
      <S.SearchLine />
    </>
  );
};
