import React, { useState } from "react";
import * as S from "./style";

export const SearchDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <S.AreaBox>
        <p>날짜별</p>
        <S.SubGrayTxt>공연 날짜</S.SubGrayTxt>
        <S.DateWrapper>
          <input
            type="date"
            name="startDate"
            // value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <p>~</p>
          <input
            type="date"
            name="endDate"
            // value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </S.DateWrapper>
      </S.AreaBox>
      <S.SearchLine />
    </>
  );
};
