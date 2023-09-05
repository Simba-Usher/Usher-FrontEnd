import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const TicketCard = ({ ticket }) => {
    const navigate = useNavigate();

  return (
    <S.TicketLine>
      <S.TicketCardCircle />
      <S.TicketCardWrapper>
        <S.TicketClose src="/reviewwriteclose.png" alt="close" />
        <S.TicketTItle>{ticket.showtitle}</S.TicketTItle>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>장소</S.TicketCardTxt>
          <S.TicketCardData>{ticket.where}</S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>관람 일시</S.TicketCardTxt>
          <S.TicketCardData>
            {ticket.date} · {ticket.time}
          </S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>예매처</S.TicketCardTxt>
          <S.TicketCardData>{ticket.buy}</S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketCardDataLabel>
          <S.TicketCardTxt>할인 결제액</S.TicketCardTxt>
          <S.TicketCardData>
            카드 제휴할인 · ￦{ticket.price.toLocaleString()}
          </S.TicketCardData>
        </S.TicketCardDataLabel>
        <S.TicketLink onClick={()=>navigate(`/${ticket.id}`)}>
          공연 상세페이지로
          <span className="material-symbols-outlined">arrow_right</span>
        </S.TicketLink>
      </S.TicketCardWrapper>
    </S.TicketLine>
  );
};
