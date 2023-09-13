import React, { useState } from 'react'
import * as S from "./style";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../../recoil/recoilState';
import { useNavigate } from 'react-router-dom';

export const MemoCards = ({ data, memoList, setMemoList }) => {
    const navigate = useNavigate();
    const MemoDate = data.date.slice(2, 4) + '.' + data.date.slice(5, 7) + '.' + data.date.slice(8, 10);
    console.log("메모날짜는", MemoDate);

    const accessToken = useRecoilValue(accessTokenState);

    const deleteMemo = async () => {
        try {
            const response = await axiosInstance.delete(`/api/mypage/memos/${data.id}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            setMemoList([...memoList.filter((memo) => memo.id !== data.id)]);
            alert("메모가 삭제되었습니다");
            navigate("/my/showcalendar")
        } catch (error) {
            console.log("메모 삭제 중 오류 발생", error);
        }
    }

    return (
        <>
            <S.ShowCardsWrap>
                <S.CardSec1>
                    <S.DateBox2>
                        {/* 메모 날짜 불러오기 */}
                        {/* ex) 23.09.06 */}
                        {MemoDate}
                    </S.DateBox2>
                    <S.Delete onClick={() => deleteMemo()}>
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
                        {/* <img
                            src="/memoBtn.png"
                            alt="btn"
                            onClick={openModal}
                        /> */}
                        <p>200자</p>
                    </S.MemoBtn>
                </S.CardSec4>
            </S.ShowCardsWrap>
        </>
    )
}