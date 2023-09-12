import React from "react";
import * as S from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import posterImg from "../../../../public/poster.png"

export const PosterSection = ({ data }) => {
  return (
    <S.PosterSecWrap>
      <S.PosterImg src={data.image} alt="posterImg" />
      <S.AvgStar>
        <FontAwesomeIcon icon={faStar} />
        {/* 4.7 */}
        {data.like_cnt}
      </S.AvgStar>
    </S.PosterSecWrap>
  );
};
