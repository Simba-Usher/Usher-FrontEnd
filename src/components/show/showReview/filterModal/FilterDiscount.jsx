import React from "react";
import * as S from "./style";

export const FilterDiscount = ({ discount, setDiscount }) => {
  const handleClick = (event) => {
    const selectedText = event.target.textContent;
    setDiscount(selectedText);
  };

  const data = [
    "카드 제휴",
    "마티네",
    "조기예매",
    "통신사",
    "지역 할인",
    "소셜 할인",
    "학생할인",
    "국가유공자",
    "장애인",
    "스탭 할인",
  ];
  return (
    <S.FilterStarsWrapper>
      <S.FilterTitle>할인 유형</S.FilterTitle>
      <S.FilterWrap>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "카드 제휴" ? "true":"false"}>카드 제휴</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "마티네" ? "true":"false"}>마티네</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "조기예매" ? "true":"false"}>조기예매</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "통신사" ? "true":"false"}>통신사</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "지역 할인" ? "true":"false"}>지역 할인</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "소셜 할인" ? "true":"false"}>소셜 할인</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "학생 할인" ? "true":"false"}>학생 할인</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "국가유공자" ? "true":"false"}>국가유공자</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "장애인" ? "true":"false"}>장애인</S.FilterDiscountTxt>
        <S.FilterDiscountTxt onClick={handleClick} isselected={discount == "스탭 할인" ? "true":"false"}>스탭 할인</S.FilterDiscountTxt>
      </S.FilterWrap>
    </S.FilterStarsWrapper>
  );
};
