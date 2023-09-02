import React from "react";
import * as S from "./style";

export const ChoiceTicket = () => {
  return (
    <S.TicketWrapper>
      <S.TicketWiteBox>
        <S.TicketSelect>등록할 티켓을 선택하세요.</S.TicketSelect>
        <S.TicketInfo>예매 번호</S.TicketInfo>
        <S.TicketInfo>관람 일시</S.TicketInfo>
        <S.TicketInfo>좌석 등급</S.TicketInfo>
        <S.TicketInfo>할인 · 결제액</S.TicketInfo>
      </S.TicketWiteBox>
    </S.TicketWrapper>
  );
};
