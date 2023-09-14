import React, { useState } from 'react'
import * as S from "./style";

export const FilterPrice = ({
  rangeMinValue,
  setRangeMinValue,
  rangeMaxValue,
  setRangeMaxValue,
}) => {
  const [rangeMinPercent, setrangeMinPercent] = useState(0);
  const [rangeMaxPercent, setrangeMaxPercent] = useState(0);

  const priceGap = 20000;

  const priceRangeMinValueHandler = (e) => {
    setRangeMinValue(parseInt(e.target.value));
  };
  const priceRangeMaxValueHandler = (e) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } else {
      setrangeMinPercent((rangeMinValue / 300000) * 100);
      setrangeMaxPercent(100 - (rangeMaxValue / 300000) * 100);
    }
  };

  return (
    <>
      <S.FilterStarsWrapper>
        <S.FilterTitle>가격별</S.FilterTitle>
        <S.FilterPriceSlide>
          <S.FilterPriceSlideInner
            className="gradient"
            rangeMinPercent={rangeMinPercent}
            rangeMaxPercent={rangeMaxPercent}
          />
        </S.FilterPriceSlide>
        <S.FilterPriceRangeWrap>
          <S.FilterPriceRangeMin
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
          <S.FilterPriceRangeMax
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
        </S.FilterPriceRangeWrap>
        <S.FilterLabelWrap>
          <S.FilterPriceLabel>￦{rangeMinValue.toLocaleString()}</S.FilterPriceLabel>
          <p>~</p>
          <S.FilterPriceLabel>￦{rangeMaxValue.toLocaleString()}</S.FilterPriceLabel>
        </S.FilterLabelWrap>
      </S.FilterStarsWrapper>
    </>
  );
};
