// UseUsher.jsx

import React from 'react'
import * as S from "./style";
import { Link } from 'react-router-dom';

export const UseUsher = () => {
  return (
    <>
        <S.UseUsherWrap>
            <div>어셔 활용하기</div>
            <div>이벤트 및 공지사항</div>
            <div>등급별 혜택</div>
            <div><Link to={"https://www.kopis.or.kr/por/main/main.do"} style={{color: "#50575F"}}>KOPIS 바로가기</Link></div>
        </S.UseUsherWrap>
    </>
  )
}