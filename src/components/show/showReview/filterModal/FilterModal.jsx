import React, { useState } from 'react'
import * as S from "./style";
import { FilterStars } from './filterStars';
import { FilterPrice } from './filterPrice';
import { FilterDiscount } from './FilterDiscount';

export const FilterModal = ({ setFilterModal }) => {
  const [stars, setStars] = useState("전체");
  const [rangeMinValue, setRangeMinValue] = useState(0);
  const [rangeMaxValue, setRangeMaxValue] = useState(200000);
  const [discount, setDiscount] = useState("카드 제휴");

  const reset = () =>{
    setStars("전체");
    setRangeMinValue(0);
    setRangeMaxValue(200000);
    setDiscount("카드 제휴");
  }

  return (
    <S.ModalWrapper>
      <S.ModalWhiteBox>
        <S.ModalNav>
          리뷰 검색 필터
          <span
            onClick={() => setFilterModal(false)}
            className="material-symbols-outlined"
          >
            close
          </span>
        </S.ModalNav>
        <FilterStars setStars={setStars} stars={stars} />
        <FilterPrice
          rangeMinValue={rangeMinValue}
          setRangeMinValue={setRangeMinValue}
          rangeMaxValue={rangeMaxValue}
          setRangeMaxValue={setRangeMaxValue}
        />
        <FilterDiscount setDiscount={setDiscount} discount={discount} />
        <S.BtnWrapper>
          <S.ResetBtn onClick={reset}>초기화</S.ResetBtn>
          <S.SaveBlueBtn onClick={() => setFilterModal(false)}>
            적용하기
          </S.SaveBlueBtn>
        </S.BtnWrapper>
      </S.ModalWhiteBox>
    </S.ModalWrapper>
  );
};
