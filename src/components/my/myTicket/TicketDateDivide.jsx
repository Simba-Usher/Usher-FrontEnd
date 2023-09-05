import React from "react";
import * as S from "./style";

export const TicketDateDivide = ({ ticket, isSelected, setIsSelected }) => {
  const currentDate = new Date();

  const pastTickets = ticket.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate < currentDate;
  });

  const futureTickets = ticket.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= currentDate;
  });

  return (
    <S.TicketDivideLabel>
      <S.TicketDivide
        onClick={() => setIsSelected(1)}
        isselected={isSelected === 1 ? "true" : "false"}
      >
        전체·{ticket.length}
      </S.TicketDivide>
      ｜
      <S.TicketDivide
        onClick={() => setIsSelected(2)}
        isselected={isSelected === 2 ? "true" : "false"}
      >
        관람 예정·{pastTickets.length}
      </S.TicketDivide>
      ｜
      <S.TicketDivide
        onClick={() => setIsSelected(3)}
        isselected={isSelected === 3 ? "true" : "false"}
      >
        관람 완료·{futureTickets.length}
      </S.TicketDivide>
    </S.TicketDivideLabel>
  );
};
