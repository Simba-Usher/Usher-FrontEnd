import React from 'react'
import * as S from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import posterImg from "../../../../public/poster.png"

export const PosterSection = () => {
    return (
        <>
            <S.PosterSecWrap>
                <S.PosterImg src="/poster.png" alt="posterImg" />
                <S.AvgStar>
                    <FontAwesomeIcon icon={faStar} />
                    {/* 평점 불러오기 */}
                    4.7
                </S.AvgStar>
            </S.PosterSecWrap>
        </>
    )
}