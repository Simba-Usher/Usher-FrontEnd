import React from 'react'
import * as S from "./style";

export const CalendarBar = () => {
    return (
        <>
            <S.CalendarBarWrap>
                <S.ShowNumSec>
                    <p>관람공연</p>
                    {/* 관람공연수 불러오기 */}
                    <p>3건</p>
                </S.ShowNumSec>
                <S.AddMemoSec>
                    <p>메모 추가하기</p>
                    <img src="/memo.png" alt="add" />
                </S.AddMemoSec>
            </S.CalendarBarWrap>
        </>
    )
}