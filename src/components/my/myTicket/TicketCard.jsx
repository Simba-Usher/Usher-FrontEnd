import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const TicketCard = ({ ticket }) => {
    const navigate = useNavigate();
    const ticketDate = ticket.performance_date.slice(0,10);
    const ticketTime = ticket.performance_date.slice(11,16);

  return (
    <S.TicketLine>
      <S.TicketCardCircle />
      <S.TicketCardWrapper>
        <S.TicketClose src="/reviewwriteclose.png" alt="close" />
        <S.TicketTItle>{ticket.performance}</S.TicketTItle>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>장소</S.TicketCardTxt>
          <S.TicketCardData>{ticket.performance_location}</S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>관람 일시</S.TicketCardTxt>
          <S.TicketCardData>
            {/* 2023-08-10T15:00:00.000000000 */}
            {ticketDate} · {ticketTime}
          </S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>예매처</S.TicketCardTxt>
          <S.TicketCardData>{ticket.reservation_site}</S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>할인 결제액</S.TicketCardTxt>
          <S.TicketCardData>
          카드제휴할인 · ￦{ticket.price.toLocaleString()}
            {/* {ticket.discount_method} · ￦{ticket.price.toLocaleString()} */}
          </S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketLink onClick={()=>navigate(`/${1}`)}>
          공연 상세페이지로
          <span className="material-symbols-outlined">arrow_right</span>
        </S.TicketLink>
      </S.TicketCardWrapper>
    </S.TicketLine>
  );
};
