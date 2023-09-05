// MyTicket.jsx

import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const MyTicket = () => {
    const navigate = useNavigate();

  return (
    <>
        <S.MyTicketWrap>
            <S.TicketBox>
                <S.TopBox>
                    <S.MyTickets>
                        <p>내 티켓</p>
                        <img src="/ticket.png" alt="ticket" />
                        {/* 티켓 수 불러오기 */}
                        <p>3장</p>
                    </S.MyTickets>
                    <S.AddTicket onClick={()=>navigate("/my/ticket")}>
                        <p>티켓 등록하기</p>
                        <img src="/go.png" alt="go" />
                    </S.AddTicket>
                </S.TopBox>
                <S.BottomBox>
                    <div>티켓 등록으로&nbsp;<p style={{color: "#6B2ED0", width: "fit-content"}}>내 티켓 정보</p>를 빠르게 가져오세요!</div>
                </S.BottomBox>
            </S.TicketBox>
        </S.MyTicketWrap>
    </>
  )
}