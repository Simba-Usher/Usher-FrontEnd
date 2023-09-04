// InfoImgSection.jsx

import React, { forwardRef } from 'react'
import * as S from "../style";
import { useNavigate } from 'react-router-dom';

export const InfoImgSection = forwardRef((shows, ref) => {
  const navigate = useNavigate();

  return (
    <div ref={infoRef => (ref.current[1] = infoRef)}>
      <S.InfoImgSecWrap>
        <S.TapTitle>공연 정보</S.TapTitle>
        <S.InfoImgBox>
          <S.InfoImg src="/infodetail2.jpg" alt="viewdetail"/>
          <S.ViewDetail onClick={() => navigate(`/${shows.id}/img`)}>
            <img src='/viewdetail.png' />
            <p style={{margin: "0 10px"}}>공연 정보 상세 보기</p>
          </S.ViewDetail>
        </S.InfoImgBox>
      </S.InfoImgSecWrap>
    </div>
  )
});