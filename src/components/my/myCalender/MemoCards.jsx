import React from 'react'
import * as S from "./style";

export const MemoCards = ({ data }) => {

    const MemoDate = data.date.slice(2, 4) + '.' + data.date.slice(5, 7) + '.' + data.date.slice(8, 10);
    console.log("메모날짜는", MemoDate);

    return (
        <>
            <S.ShowCardsWrap>
                <S.CardSec1>
                    <S.DateBox2>
                        {/* 메모 날짜 불러오기 */}
                        {/* ex) 23.09.06 */}
                        {MemoDate}
                    </S.DateBox2>
                    <S.Delete>
                        <p>삭제하기</p>
                        <img src="/deleteBtn.png" alt="delete" />
                    </S.Delete>
                </S.CardSec1>
                {/* 메모 제목 불러오기 */}
                <S.CardSec2>
                    {data.title}
                </S.CardSec2>
                {/* 메모 위치 불러오기 */}
                <S.CardSec3>
                    {data.location}
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