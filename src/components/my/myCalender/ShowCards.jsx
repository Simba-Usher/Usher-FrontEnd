import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const ShowCards = ({ activeDate }) => {
    const navigate = useNavigate();

    return (
        <>
            <S.ShowCardsWrap>
                <S.CardSec1>
                    <S.DateBox>
                        <div>{activeDate}</div>
                    </S.DateBox>
                    <S.ToDetail onClick={() => navigate("/:detailId")}>
                        <p>상세페이지로</p>
                        <img src="/todetail.png" alt="todetail" />
                    </S.ToDetail>
                </S.CardSec1>
                {/* 공연명 불러오기 */}
                <S.CardSec2>
                    <p>[뮤지컬] 오페라의 유령 - 서울</p>
                </S.CardSec2>
                {/* 공연장명, 관람여부 불러오기 */}
                <S.CardSec3>
                    <p>샤롯데씨어터</p>
                    <p>|</p>
                    <p>관람 완료</p>
                </S.CardSec3>
                <S.CardSec4>
                    <S.Memo />
                    <S.MemoBtn>
                        <img src="/memoBtn.png" alt="btn" />
                        <p>200자</p>
                    </S.MemoBtn>
                </S.CardSec4>
            </S.ShowCardsWrap>
        </>
    )
}