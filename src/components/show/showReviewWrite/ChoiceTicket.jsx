import React, { useEffect, useState } from "react";
import * as S from "./style";
import { TicketList } from "./TicketList";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import axiosInstance from "../../../api/axios";

export const ChoiceTicket = ({ setSelectedTicket, selectedTicket, allTicket }) => {
  const [isClicked, setisClicked] = useState(false);
  // const [selectedTicket, setSelectedTicket] = useState(null);
  // const [myTicket, setMyTicket] = useState([]);
  // const accessToken = useRecoilValue(accessTokenState);

  const handleSelect = (ticket) => {
    setSelectedTicket(ticket);
    setisClicked(false);
  };
  const handleClick = () => {
    setisClicked((prevIsClicked) => !prevIsClicked);
  };

  // const data = [
  //   {
  //     id: 1,
  //     title: "뮤지컬 <오페라의 유령> - 서울",
  //     ticketNum: "T1234567890",
  //     date: "2023-8-10",
  //     time: "19:30",
  //     review: false,
  //     seat: "VIP석",
  //     discount: "카드 제휴할인",
  //     price: 152000,
  //   },
  //   {
  //     id: 2,
  //     title: "뮤지컬 <레베카> 10주년 기념 공연",
  //     ticketNum: "T0101010101",
  //     date: "2023-8-19",
  //     time: "19:30",
  //     review: false,
  //     seat: "R석",
  //     discount: "카드 제휴할인",
  //     price: 102000,
  //   },
  //   {
  //     id: 3,
  //     title: "뮤지컬 <시카고> 25주년 기념 오리지널 내한",
  //     ticketNum: "T1411111127",
  //     date: "2023-6-18",
  //     time: "14:00",
  //     review: true,
  //     seat: "S석",
  //     discount: "카드 제휴할인",
  //     price: 99000,
  //   },
  // ];

  // const fetchMyTicketData = async () => {
  //   try {
  //     const response = await axiosInstance.get("/api/mypage/ticket",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //     }
  //     });
  //     setMyTicket(response.data);
  //     console.log(myTicket);
  //   } catch (error) {
  //     console.log("티켓 불러오는 중 오류 발생", error);
  //   }
  // }
  // useEffect(() => {
  //   fetchMyTicketData();
  // },[])

  return (
    <S.TicketWrapper>
      <S.TicketWiteBox>
        {selectedTicket ? (
          <S.TicketSelectWrapper>
            <TicketList ticket={selectedTicket} islist={"true"} />
            <S.CloseBtn
              src="/reviewwriteclose.png"
              alt="close"
              onClick={() => setSelectedTicket(null)}
            />
          </S.TicketSelectWrapper>
        ) : (
          <S.PositionRel>
            <S.TicketSelect onClick={handleClick}>
              등록할 티켓을 선택하세요.
              <S.DropIcon
                className={isClicked ? "fas fa-caret-down" : "fas fa-caret-up"}
              />
            </S.TicketSelect>
          </S.PositionRel>
        )}
        {isClicked && (
          <S.TicketListWrapper>
            {allTicket.map((ticket) => (
              <TicketList
                key={ticket.id}
                ticket={ticket}
                onSelect={handleSelect}
              />
            ))}
          </S.TicketListWrapper>
        )}
        {selectedTicket ? (
          <>
            <S.TicketTitle isselected={"true"}>
              {selectedTicket.performance}
            </S.TicketTitle>
            <S.TicketInfo isselected={"true"}>
              {selectedTicket.ticket_number}
            </S.TicketInfo>
            <S.TicketInfo isselected={"true"}>
              {selectedTicket.performance_date.slice(0,10)} · {selectedTicket.performance_date.slice(11,16)}
            </S.TicketInfo>
            <S.TicketInfo isselected={"true"}>
              {selectedTicket.reservation_site}
            </S.TicketInfo>
            <S.TicketInfo isselected={"true"}>
              카드 할인 · {selectedTicket.price}
            </S.TicketInfo>
          </>
        ) : (
          <>
            <S.TicketTitle>공연명</S.TicketTitle>
            <S.TicketInfo>예매 번호</S.TicketInfo>
            <S.TicketInfo>관람 일시</S.TicketInfo>
            <S.TicketInfo>예매처</S.TicketInfo>
            <S.TicketInfo>할인 · 결제액</S.TicketInfo>
          </>
        )}
      </S.TicketWiteBox>
    </S.TicketWrapper>
  );
};
