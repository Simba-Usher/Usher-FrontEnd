// ReactionSection.jsx

import React, { forwardRef } from 'react'
import * as S from "../style";

export const ReactionSection = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
        <S.ReactionSecWrap>
            <S.TapTitle style={{margin: "7px 0"}}>관람객 반응</S.TapTitle>
            <S.ReactionBox></S.ReactionBox>
            <S.Explain>키워드는 실관람객의 ‘한줄 후기’에서 발췌되었습니다.</S.Explain>
        </S.ReactionSecWrap>
    </div>
  )
});