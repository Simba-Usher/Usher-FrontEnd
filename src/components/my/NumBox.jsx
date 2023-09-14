import React from 'react'
import * as S from "./style";

export const NumBox = ({ data }) => {
  // console.log(data.length);
  console.log(data);
  return (
    <>
        <S.NumBoxWrap>
            <div>전체 ·</div>
            {/* 전체 개수 불러오기 */}
            &nbsp;<div>{data}</div>
        </S.NumBoxWrap>
    </>
  )
}