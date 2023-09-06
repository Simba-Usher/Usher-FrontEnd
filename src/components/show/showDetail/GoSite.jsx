import React from 'react'
import * as S from "../style";
import { useNavigate } from 'react-router-dom';

export const GoSite = (shows) => {
    const navigate = useNavigate();

  return (
    <S.GoSiteWrap onClick={() => navigate(`/${shows.id}/site`)}>
        예매처 바로 가기
    </S.GoSiteWrap>
  )
}