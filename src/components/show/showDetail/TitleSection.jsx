import React from 'react';
import * as S from "../style";
// import ShareBtn from "../../../../public/share.png";
// import HeartBtn from "../../../../public/heart.png";
// import Trophy from "../../../../public/trophy.png";

export const TitleSection = () => {
    return (
        <>
            <S.TitleSecWrap>
                <S.TitleSec1>
                    {/* 장르 불러오기 */}
                    <S.GenreBox>뮤지컬</S.GenreBox>
                    {/* 지역 불러오기 */}
                    <S.AreaBox>서울</S.AreaBox>
                    <S.EtcBox>
                        <S.EtcBtns src="/share.png" alt='shareBtn' />
                        <S.EtcBtns src="/heart.png" alt='heartBtn' />
                    </S.EtcBox>
                </S.TitleSec1>
                {/* 제목 불러오기 */}
                <S.TitleSec2>
                    오페라의 유령 - 서울
                </S.TitleSec2>
                <S.TitleSec3>
                    {/* 관람시간 불러오기 */}
                    <p>150분 (인터미션 20분 포함)</p>
                    {/* 나이제한 불러오기 */}
                    <p style={{marginLeft: "5px"}}>7세 이상</p>
                    <S.TrophyTag src="/trophy.png" alt="trophy" />
                </S.TitleSec3>
                <S.TitleSec4>
                    {/* 공연장명 불러오기 */}
                    <p style={{color: "#002C4A"}}>서울 잠실. 샤롯데 씨어터</p>
                    {/* 공연기간 불러오기 */}
                    <p style={{color: "#002843"}}>2023.7.21 ~ 2023.11.17</p>
                </S.TitleSec4>
            </S.TitleSecWrap>
        </>
    )
}