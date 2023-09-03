// MyGrade.jsx

import React from 'react'
import * as S from "./style";

export const MyGrade = () => {
  return (
    <>
        <S.MyGradeWrap>
            {/* 등급이미지 불러오기 */}
            <img src="/grade1.png" alt="grade" />
            {/* 등급단계 불러오기 */}
            <p>리허설</p>
        </S.MyGradeWrap>
    </>
  )
}