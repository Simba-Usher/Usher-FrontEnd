import React from 'react'
import * as S from "../style";
import { Link } from 'react-router-dom';

export const SiteSec = ({ data }) => {
  return (
    <S.SiteSecWrap>
        <S.LeftSec>
            <S.SiteName>{data.title}</S.SiteName>
            <S.CostExplain>예매 수수료 장당 ￦{data.cost}</S.CostExplain>
        </S.LeftSec>
        <S.RightSec>
            <p>예매처로 이동</p>
            <Link to={"https://tickets.interpark.com/goods/23006740"}>
            <img src="/go.png" alt="go" />
            </Link>
        </S.RightSec>
    </S.SiteSecWrap>
  )
}