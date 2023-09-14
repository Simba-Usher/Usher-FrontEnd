import React, { useState } from "react";
import * as S from "./style";
import { TicketList } from "./TicketList";

export const ChoiceTicket = ({ setSelectedTicket, selectedTicket }) => {
  const [isClicked, setisClicked] = useState(false);

  const [data, setData] = useState({
    id: 1,
    title: "뮤지컬 <오페라의 유령> - 서울",
    ticketNum: "T0897847619",
    date: "2023-8-10",
    time: "19:30",
    review: false,
    seat: "VIP석",
    discount: "카드 제휴할인",
    price: 152000,
  });
/*
  useEffect(() => {
    axiosInstance
      .get("/api/mypage/ticket")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("티켓 요청 실패:", error);
      });
  }, []);
*/
  const handleSelect = (ticket) => {
    setSelectedTicket(ticket);
    setisClicked(false);
  };
  const handleClick = () => {
    setisClicked((prevIsClicked) => !prevIsClicked);
  };

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
            <TicketList ticket={data} onSelect={handleSelect} />
            {/* {data.map((ticket) => (
              <TicketList
                key={ticket.id}
                ticket={ticket}
                onSelect={handleSelect}
              />
            ))} */}
          </S.TicketListWrapper>
        )}
        {selectedTicket ? (
          <>
            <S.TicketTitle isselected={"true"}>
              {selectedTicket.title}
            </S.TicketTitle>
            <S.TicketInfo isselected={"true"}>
              {selectedTicket.ticketNum}
            </S.TicketInfo>
            <S.TicketInfo isselected={"true"}>
              {selectedTicket.date} · {selectedTicket.time}
            </S.TicketInfo>
            <S.TicketInfo isselected={"true"}>
              {selectedTicket.seat}
            </S.TicketInfo>
            <S.TicketInfo isselected={"true"}>
              {selectedTicket.discount} · {selectedTicket.price}
            </S.TicketInfo>
          </>
        ) : (
          <>
            <S.TicketTitle>공연명</S.TicketTitle>
            <S.TicketInfo>예매 번호</S.TicketInfo>
            <S.TicketInfo>관람 일시</S.TicketInfo>
            <S.TicketInfo>좌석 등급</S.TicketInfo>
            <S.TicketInfo>할인 · 결제액</S.TicketInfo>
          </>
        )}
      </S.TicketWiteBox>
    </S.TicketWrapper>
  );
};
