import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const ShowCards = ({ data }) => {
    const navigate = useNavigate();

    const ShowDate = data.date.slice(2, 4) + '.' + data.date.slice(5, 7) + '.' + data.date.slice(8, 10);
    console.log("공연날짜는", ShowDate);

    return (
        <>
            <S.ShowCardsWrap>
                <S.CardSec1>
                    <S.DateBox>
                        {ShowDate}
                        {/* {activeDate} */}
                    </S.DateBox>
                    <S.ToDetail onClick={() => navigate("/:detailId")}>
                        <p>상세페이지로</p>
                        <img src="/todetail.png" alt="todetail" />
                    </S.ToDetail>
                </S.CardSec1>
                {/* 공연명 불러오기 */}
                <S.CardSec2>
                    {data.title}
                </S.CardSec2>
                {/* 공연장명, 관람여부 불러오기 */}
                <S.CardSec3>
                    {data.location}
                    <p>|</p>
                    <p>관람 완료</p>
                </S.CardSec3>
                <S.CardSec4>
                    <S.Memo>
                        {data.content}
                    </S.Memo>
                    <S.MemoBtn>
                        <img src="/memoBtn.png" alt="btn" />
                        <p>200자</p>
                    </S.MemoBtn>
                </S.CardSec4>
            </S.ShowCardsWrap>
        </>
    )
}