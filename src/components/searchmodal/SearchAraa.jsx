import React, { useState } from "react";
import * as S from "./style";

export const SearchAraa = () => {
  const [selectedArea, setSelectedArea] = useState("");

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setSelectedArea(area);
    console.log(selectedArea);
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
        {areas.map((area, index) => (
          <S.Isselected
            key={index}
            isselected={selectedArea && selectedArea === area?"true":"false"}
            onClick={() => handleAreaClick(area)}
          >
            {area}
          </S.Isselected>
        ))}
      </S.AreaBox>
      <S.SearchLine />
    </>
  );
};
