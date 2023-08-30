// InfoImgSection.jsx

import React, { forwardRef } from 'react'
import * as S from "../style";

export const InfoImgSection = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <S.InfoImgSecWrap>
        <S.TapTitle>공연 정보</S.TapTitle>
        <S.InfoImgBox>
          <img src="/showinfodetail.png" />
          <S.ViewDetail>
            <img src='/viewdetail.png' />
            <p style={{margin: "0 10px"}}>공연 정보 상세 보기</p>
          </S.ViewDetail>
        </S.InfoImgBox>
      </S.InfoImgSecWrap>
    </div>
  )
});