import React from 'react'
import * as S from "./style";

export const ComNav = () => {
  return (
    <>
        <S.ComNavWrap>
            <S.ComNavSec>실시간 인기글</S.ComNavSec>
            <div>|</div>
            <S.ComNavSec>자유</S.ComNavSec>
            <div>|</div>
            <S.ComNavSec>에디터 픽</S.ComNavSec>
            <div>|</div>
            <S.ComNavSec>질문</S.ComNavSec>
            <img src="/threedot.png" alt="dot" />
        </S.ComNavWrap>
    </>
  )
}