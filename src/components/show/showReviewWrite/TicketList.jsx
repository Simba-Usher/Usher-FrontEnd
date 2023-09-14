import React from "react";
import * as S from "./style";

export const TicketList = ({ ticket, onSelect, islist }) => {
  return (
    <S.ListWrapper
      islist={islist}
      onClick={!ticket.review ? () => onSelect(ticket) : null}
    >
      <S.ListTitle>{ticket.performance}</S.ListTitle>
      <S.ListData>
        <S.ListTxt>예매 번호</S.ListTxt>
        <S.ListDate>{ticket.ticket_number}</S.ListDate>
      </S.ListData>
      <S.ListData>
        <S.ListTxt>관람 일시</S.ListTxt>
        <S.ListDate>
          {ticket.performance_date.slice(0,10)} · {ticket.performance_date.slice(11,16)}
        </S.ListDate>
      </S.ListData>
      {ticket.review ? (
        <S.ListReviewTrue>작성 완료</S.ListReviewTrue>
      ) : (
        <S.ListReviewFalse>후기 미작성</S.ListReviewFalse>
      )}
    </S.ListWrapper>
  );
};
