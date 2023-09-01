import React from 'react'
import * as S from "./style";

export const QnaLists = () => {
  return (
    <>
    <S.ComListsWrap>
        <S.QnaSec>
            <S.Sec1Title>Q. 23년 하반기 꼭 관람해야하는 뮤지컬</S.Sec1Title>
            <S.Sec2Content>
            안녕하세요, 뮤지컬을 처음 보러가는 뮤린이입니다. 뮤지컬 하면 시체 관극 이런 말이 있듯,,, 뮤지컬 예절이 엄격하다는 이야기를 들...
            </S.Sec2Content>
            <S.Sec3>
                <img src="/views.png" alt="views" />
                <p>1,201</p>
                <img src="/likes.png" alt="likes" />
                <p>10</p>
                <img src="/comments.png" alt="comments" />
                <p>5</p>
            </S.Sec3>
        </S.QnaSec>
    </S.ComListsWrap>
</>
  )
}