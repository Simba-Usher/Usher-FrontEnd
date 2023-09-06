import React from 'react'
import * as S from "../style";

export const SiteSec = ({ data }) => {
  return (
    <S.SiteSecWrap>
        <S.LeftSec>
            <S.SiteName>{data.title}</S.SiteName>
            <S.CostExplain>예매 수수료 장당 ￦{data.cost}</S.CostExplain>
        </S.LeftSec>
        <S.RightSec>
            <p>예매처로 이동</p>
            <img src="/go.png" alt="go" />
        </S.RightSec>
    </S.SiteSecWrap>
  )
}