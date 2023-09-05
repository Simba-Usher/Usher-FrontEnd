import React, { useState } from "react";
import * as S from "../home/style";

export const SearchGenre = ({ genre, setgenre }) => {

  return (
    <S.HomeArticle>
      <p>장르별</p>
      <S.ShowGenre>
        <S.FlexColumn onClick={() => setgenre("뮤지컬")}>
          {genre == "뮤지컬" ? (
            <img src="/s_musical.png" alt="musical" />
          ) : (
            <img src="/g_musical.png" alt="musical" />
          )}
          뮤지컬
        </S.FlexColumn>
        <S.FlexColumn onClick={() => setgenre("연극")}>
          {genre == "연극" ? (
            <img src="/s_theater.png" alt="theater" />
          ) : (
            <img src="/g_theater.png" alt="theater" />
          )}
          연극
        </S.FlexColumn>
        <S.FlexColumn onClick={() => setgenre("클래식")}>
          {genre == "클래식" ? (
            <img src="/s_classic.png" alt="classic" />
          ) : (
            <img src="/g_classic.png" alt="classic" />
          )}
          클래식
        </S.FlexColumn>
        <S.FlexColumn onClick={() => setgenre("무용")}>
          {genre == "무용" ? (
            <img src="/s_dance.png" alt="dance" />
          ) : (
            <img src="/g_dance.png" alt="dance" />
          )}
          무용
        </S.FlexColumn>
        <S.FlexColumn onClick={() => setgenre("콘서트")}>
          {genre == "콘서트" ? (
            <S.SmallImg src="/s_concert.png" alt="concert" />
          ) : (
            <S.SmallImg src="/g_concert.png" alt="concert" />
          )}
          콘서트
        </S.FlexColumn>
        <S.FlexColumn onClick={() => setgenre("가족")}>
          {genre == "가족" ? (
            <S.SmallImg src="/s_family.png" alt="family" />
          ) : (
            <S.SmallImg src="/g_family.png" alt="family" />
          )}
          아동/가족
        </S.FlexColumn>
      </S.ShowGenre>
    </S.HomeArticle>
  );
};
