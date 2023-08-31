import React from "react";
import * as S from "../home/style";
import { useNavigate } from "react-router-dom";

export const SearchGenre = () => {
  const navigate = useNavigate();

  return (
    <S.HomeArticle>
      <p>장르별</p>
      <S.ShowGenre>
        <S.FlexColumn>
          <img src="/s_musical.png" alt="musical" />
          뮤지컬
        </S.FlexColumn>
        <S.FlexColumn>
          <img src="/s_theater.png" alt="theater" />
          연극
        </S.FlexColumn>
        <S.FlexColumn>
          <img src="/s_classic.png" alt="classic" />
          클래식
        </S.FlexColumn>
        <S.FlexColumn>
          <img src="/s_dance.png" alt="dance" />
          무용
        </S.FlexColumn>
        <S.FlexColumn>
          <S.SmallImg src="/s_concert.png" alt="concert" />
          콘서트
        </S.FlexColumn>
        <S.FlexColumn>
          <S.SmallImg src="/s_family.png" alt="family" />
          아동/가족
        </S.FlexColumn>
      </S.ShowGenre>
    </S.HomeArticle>
  );
};
