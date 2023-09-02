import React from 'react'
import * as S from "./style";

export const MemoCards = ({ activeDate }) => {
    return (
        <>
            <S.ShowCardsWrap>
                <S.CardSec1>
                    <S.DateBox2>
                        <div>{activeDate}</div>
                    </S.DateBox2>
                    <S.Delete>
                        <p>삭제하기</p>
                        <img src="/deleteBtn.png" alt="delete" />
                    </S.Delete>
                </S.CardSec1>
                {/* 메모 제목 불러오기 */}
                <S.CardSec2>
                    <p>대학로 직거래</p>
                </S.CardSec2>
                {/* 메모 부제목 불러오기 */}
                <S.CardSec3>
                    <p>혜화역 5번 출구 앞</p>
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