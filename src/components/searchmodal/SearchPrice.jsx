import React, { useState } from 'react'
import * as S from "./style";

export const SearchPrice = () => {
  // 막대의 left, right 값으로 줄 백분율
  const [rangeMinPercent, setrangeMinPercent] = useState(0);
  const [rangeMaxPercent, setrangeMaxPercent] = useState(0);

  // onChange -> 현재값을 state에
  const fixedMinPrice = 0;
  const fixedMaxPrice = 200000;
  const priceGap = 20000;
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice);
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);

  const priceRangeMinValueHandler = e => {
    setRangeMinValue(parseInt(e.target.value));
  };
  const priceRangeMaxValueHandler = e => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  // onChange -> 현재값을 막대의 left, right 값으로 주기위해 백분율로
  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } else {
      setrangeMinPercent((rangeMinValue / fixedMaxPrice) * 100);
      setrangeMaxPercent(100 - (rangeMaxValue / fixedMaxPrice) * 100);
    }
  };

  return (
    <>
      <S.PriceBox>
        <p>가격별</p>
        <S.PriceSlide>
          <S.PriceSlideInner
            class="gradient"
            rangeMinPercent={rangeMinPercent}
            rangeMaxPercent={rangeMaxPercent}
          />
        </S.PriceSlide>
        <S.PriceRangeWrap>
          {/* <S.PriceWrap> */}
          <S.PriceRangeMin
            type="range"
            min={fixedMinPrice}
            max={fixedMaxPrice - priceGap}
            step="1000"
            value={rangeMinValue}
            onChange={e => {
              priceRangeMinValueHandler(e);
              twoRangeHandler();
            }}
          />
          {/* 가격 정보 표시 */}
          {/* <S.PriceLabel>{rangeMinValue.toLocaleString()}원</S.PriceLabel> */}
          {/* </S.PriceWrap> */}
          {/* <S.PriceWrap> */}
          <S.PriceRangeMax
            type="range"
            min={fixedMinPrice + priceGap}
            max={fixedMaxPrice}
            step="1000"
            value={rangeMaxValue}
            onChange={e => {
              priceRangeMaxValueHandler(e);
              twoRangeHandler();
            }}
          />
          {/* 가격 정보 표시 */}
          {/* <S.PriceLabel>{rangeMaxValue.toLocaleString()}원</S.PriceLabel> */}
          {/* </S.PriceWrap> */}
        </S.PriceRangeWrap>
        <S.LabelWrap>
          <S.PriceLabel>{rangeMinValue.toLocaleString()}원</S.PriceLabel>
          <p>~</p>
          <S.PriceLabel>{rangeMaxValue.toLocaleString()}원</S.PriceLabel>
        </S.LabelWrap>
      </S.PriceBox>
      <S.SearchLine />
    </>
  );
}
