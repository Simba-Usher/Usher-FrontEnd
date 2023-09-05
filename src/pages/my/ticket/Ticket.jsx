import React, { useState } from "react";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { TicketInput } from "../../../components/my/myTicket/TicketInput";
import { TicketDateDivide } from "../../../components/my/myTicket/TicketDateDivide";
import { TicketCard } from "../../../components/my/myTicket/TicketCard";

export const Ticket = () => {
  const [isSelected, setIsSelected] = useState(1);
  const ticket = [
    //내 글만 get
    {
      id: 1,
      showtitle: "뮤지컬 <오페라의 유령> - 서울",
      price: 152000,
      where: "샤롯데씨어터",
      date: "2023.8.10",
      time: "19:30",
      buy: "엔에이치엔(주)",
    },
    {
      id: 2,
      showtitle: "2뮤지컬 <오페라의 유령> - 서울",
      price: 152000,
      where: "2샤롯데씨어터",
      date: "2023.8.10",
      time: "19:30",
      buy: "엔에이치엔(주)",
    },
    {
      id: 3,
      showtitle: "3뮤지컬 <오페라의 유령> - 서울",
      price: 152000,
      where: "3샤롯데씨어터",
      date: "2023.8.10",
      time: "19:30",
      buy: "엔에이치엔(주)",
    },
    {
      id: 4,
      showtitle: "4뮤지컬 <오페라의 유령> - 서울",
      price: 152000,
      where: "4샤롯데씨어터",
      date: "2023.8.10",
      time: "19:30",
      buy: "엔에이치엔(주)",
    },
  ];

  return (
    <Wrapper>
      <S.TicketWrap>
        <MyInnerNav title="티켓 등록" />
        <TicketInput />
        <S.TicketWrapper>
          <S.TicketTxt>등록 티켓</S.TicketTxt>
          <TicketDateDivide
            ticket={ticket}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        </S.TicketWrapper>
        {ticket.map((item) => (
          <TicketCard key={item.id} ticket={item} />
        ))}
        <S.TicketGuide>
          <S.TicketGuideTxt>이용 안내</S.TicketGuideTxt>
          · 티켓 번호는 각 예매 사이트에서 제공한 티켓 고유 번호입니다.
          <br />· 조회되지 않는 티켓 정보는 예매하신 사이트에 티켓 관련 문의
          바랍니다.
        </S.TicketGuide>
      </S.TicketWrap>
    </Wrapper>
  );
};
