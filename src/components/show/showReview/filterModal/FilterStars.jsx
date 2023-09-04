import React from "react";
import * as S from "./style";

export const FilterStars = ({ setStars, stars }) => {
  const handleClick = (event) => {
    const selectedText = event.target.textContent;
    setStars(selectedText);
  };

  return (
    <S.FilterStarsWrapper>
      <S.FilterTitle>평점</S.FilterTitle>
      <S.StarsSection>
        <S.FilterTxtBox onClick={handleClick} isselected={stars == "전체" ? "true":"false"}>
          전체
        </S.FilterTxtBox>
        <S.FilterTxtBox onClick={handleClick} isselected={stars == "5점" ? "true":"false"}>
          5점
        </S.FilterTxtBox>
        <S.FilterTxtBox onClick={handleClick} isselected={stars == "4점" ? "true":"false"}>
          4점
        </S.FilterTxtBox>
        <S.FilterTxtBox onClick={handleClick} isselected={stars == "3점" ? "true":"false"}>
          3점
        </S.FilterTxtBox>
        <S.FilterTxtBox onClick={handleClick} isselected={stars == "2점" ? "true":"false"}>
          2점
        </S.FilterTxtBox>
        <S.FilterTxtBox onClick={handleClick} isselected={stars == "1점" ? "true":"false"}>
          1점
        </S.FilterTxtBox>
      </S.StarsSection>
    </S.FilterStarsWrapper>
  );
};
