import React, { useState } from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';
import { AddTicketMemo } from './AddTicketMemo';

export const ShowCards = ({ activeDate, ticketMemoList, setTicketMemoList, addTicketMemoToList, data }) => {
    const navigate = useNavigate();

    const ShowDate = data.performance_date.slice(2, 4) + '.' + data.performance_date.slice(5, 7) + '.' + data.performance_date.slice(8, 10);
    console.log("공연날짜는", ShowDate);

    const currentDate = new Date();
    console.log(currentDate);
    const ticketDate = new Date(data.performance_date);
    console.log(ticketDate);

    const DateState = (ticketDate >= currentDate) ? "관람 예정" : "관람 완료"

    // 공연 메모 모달
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

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
                    {data.performance}
                </S.CardSec2>
                {/* 공연장명, 관람여부 불러오기 */}
                <S.CardSec3>
                    {data.performance_location} | {DateState}
                </S.CardSec3>
                <S.CardSec4>
                    <S.Memo>
                        {data.ticket_memo}
                    </S.Memo>
                    <S.MemoBtn>
                        <img
                            src="/memoBtn.png"
                            alt="btn"
                            onClick={openModal}
                        />
                        <p>200자</p>
                    </S.MemoBtn>
                </S.CardSec4>
            </S.ShowCardsWrap>

            {modalOpen && (
                <AddTicketMemo
                    activeDate={activeDate}
                    closeModal={closeModal}
                    ticketMemoList={ticketMemoList}
                    // addTicketMemoToList={addTicketMemoToList}
                    data={data}
                />
            )}

            {modalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: '11'
                    }}
                    onClick={closeModal}
                />
            )}
        </>
    )
}