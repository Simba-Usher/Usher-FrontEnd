import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const ComNav = () => {
  const navigate = useNavigate();

  return (
    <>
        <S.ComNavWrap>
            <S.ComNavSec onClick={() => navigate("/community")}>실시간 인기글</S.ComNavSec>
            <div>|</div>
            <S.ComNavSec onClick={() => navigate("/community/free")}>자유</S.ComNavSec>
            <div>|</div>
            <S.ComNavSec onClick={() => navigate("/community/editor")}>에디터 픽</S.ComNavSec>
            <div>|</div>
            <S.ComNavSec onClick={() => navigate("/community/qna")}>질문</S.ComNavSec>
            <img src="/threedot.png" alt="dot" />
        </S.ComNavWrap>
    </>
  )
}