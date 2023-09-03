import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const ShowLike = () => {
    const navigate = useNavigate();

  return (
    <>
        {/* 공연정보 불러오기 */}
        <S.ShowLikeWrap onClick={() => navigate("/:detailId")}>
            <img src="/likeposter.png" alt="poster" />
            <S.TextSec>
                <div>뮤지컬 {'<'}레베카{'>'} 10주년 기념공연</div>
                <div>블루스퀘어 신한카드홀</div>
                <div>2023.8.19 ~ 2023.11.19</div>
                <S.StarSec>
                    {/* style={{color: "#FFA826", fontSize: "14px", fontWeight: "600"}} */}
                    <img src="/star.png" alt="star" />
                    <p>4.9</p>
                    <p>관람 인증 40</p>
                </S.StarSec>
                <div>“완벽함을 넘어선 최고의 뮤지컬”</div>
            </S.TextSec>
            <S.XBtn src="/xBtn.png" alt="xBtn" />
        </S.ShowLikeWrap>
    </>
  )
}