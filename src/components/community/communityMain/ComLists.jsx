import React from 'react'
import * as S from "./style";

export const ComLists = () => {
  return (
    <>
        <S.ComListsWrap>
            <S.TextSec>
                <S.Sec1Title>23년 하반기 꼭 관람해야하는 뮤지컬</S.Sec1Title>
                <S.Sec2>
                    <p>작성자</p>
                    <p>|</p>
                    <p>2023.7.16</p>
                </S.Sec2>
                <S.Sec3>
                    <img src="/views.png" alt="views" />
                    <p>1,201</p>
                    <img src="/likes.png" alt="likes" />
                    <p>10</p>
                    <img src="comments.png" alt="comments" />
                    <p>5</p>
                </S.Sec3>
            </S.TextSec>
            <S.ImgSec src="/comlistposter.png" />
        </S.ComListsWrap>
    </>
  )
}