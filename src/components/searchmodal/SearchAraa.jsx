import React, { useState } from "react";
import * as S from "./style";

export const SearchAraa = ({ area, setarea }) => {

  const handleAreaClick = (data) => {
    setarea(data);
    console.log(data);
  };

  const areas = [
    "서울",
    "경기",
    "인천",
    "강원",
    "충청",
    "경상",
    "전라",
    "제주",
  ];

  return (
    <>
      <S.SearchLine />
      <S.AreaBox>
        <p>지역별</p>
        {areas.map((data, index) => (
          <S.Isselected
            key={index}
            isselected={area && data === area ? "true" : "false"}
            onClick={() => handleAreaClick(data)}
          >
            {data}
          </S.Isselected>
        ))}
      </S.AreaBox>
      <S.SearchLine />
    </>
  );
};
