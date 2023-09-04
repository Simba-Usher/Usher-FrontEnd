import React from 'react'
import * as S from "./style";

export const NumBox = () => {
  return (
    <>
        <S.NumBoxWrap>
            <div>전체 ·</div>
            {/* 전체 개수 불러오기 */}
            &nbsp;<div>5</div>
        </S.NumBoxWrap>
    </>
  )
}