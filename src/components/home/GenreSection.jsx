import React from 'react'
import * as S from "./style";

export const GenreSection = () => {
  return (
    <>
      <S.HomeArticle>
        <p>장르별</p>
        <S.ShowGenre>
          <S.FlexColumn>
            <img src="/musical.png" alt="musical" />
            뮤지컬
          </S.FlexColumn>
          <S.FlexColumn>
            <img src="/theater.png" alt="theater" />
            연극
          </S.FlexColumn>
          <S.FlexColumn>
            <img src="/classic.png" alt="classic" />
            클래식
          </S.FlexColumn>
          <S.FlexColumn>
            <img src="/dance.png" alt="dance" />
            무용
          </S.FlexColumn>
          <S.FlexColumn>
            <S.SmallImg src="/concert.png" alt="concert" />
            콘서트
          </S.FlexColumn>
          <S.FlexColumn>
            <S.SmallImg src="/family.png" alt="family" />
            아동/가족
          </S.FlexColumn>
        </S.ShowGenre>
      </S.HomeArticle>
    </>
  );
}
