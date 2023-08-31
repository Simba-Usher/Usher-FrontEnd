import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const GenreSection = ({ IconColor }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.HomeArticle>
        <p>장르별</p>
        <S.ShowGenre>
          <S.FlexColumn onClick={() => navigate("showlist")}>
            <img src="/musical.png" alt="musical" />
            뮤지컬
          </S.FlexColumn>
          <S.FlexColumn onClick={() => navigate("showlist")}>
            <img src="/theater.png" alt="theater" />
            연극
          </S.FlexColumn>
          <S.FlexColumn onClick={() => navigate("showlist")}>
            <img src="/classic.png" alt="classic" />
            클래식
          </S.FlexColumn>
          <S.FlexColumn onClick={() => navigate("showlist")}>
            <img src="/dance.png" alt="dance" />
            무용
          </S.FlexColumn>
          <S.FlexColumn onClick={() => navigate("showlist")}>
            <S.SmallImg src="/concert.png" alt="concert" />
            콘서트
          </S.FlexColumn>
          <S.FlexColumn onClick={() => navigate("showlist")}>
            <S.SmallImg src="/family.png" alt="family" />
            아동/가족
          </S.FlexColumn>
        </S.ShowGenre>
      </S.HomeArticle>
      <S.HomeLine />
    </>
  );
};
