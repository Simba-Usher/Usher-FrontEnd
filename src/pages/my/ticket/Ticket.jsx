import React, { useEffect, useState } from "react";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { TicketInput } from "../../../components/my/myTicket/TicketInput";
import { TicketDateDivide } from "../../../components/my/myTicket/TicketDateDivide";
import { TicketCard } from "../../../components/my/myTicket/TicketCard";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import { Login } from "../../login/Login";

export const Ticket = () => {
  const [isSelected, setIsSelected] = useState(1);
  const [myTicket, setMyTicket] = useState([]);
  const accessToken = useRecoilValue(accessTokenState);

  const fetchMyTicketData = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/ticket",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
      }
      });
      setMyTicket(response.data);
      console.log(myTicket);
    } catch (error) {
      console.log("티켓 불러오는 중 오류 발생", error);
    }
  }
  useEffect(() => {
    fetchMyTicketData();
  },[])

  // if (accessToken) {
    return (
      <Wrapper>
        <S.TicketWrap>
          <MyInnerNav title="티켓 등록" />
          {accessToken ? <></> : <p onClick={() => navigate("/login")} style={{color: "#6B2ED0", fontSize: "18px", textAlign: "center", backgroundColor: "#EFE9FF", padding: "5px 0", textDecoration: "underline"}}>로그인 후 이용가능한 서비스입니다 🧐</p>}
          <TicketInput />
          <S.TicketWrapper>
            <S.TicketTxt>등록 티켓</S.TicketTxt>
            <TicketDateDivide
              ticket={myTicket}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          </S.TicketWrapper>
          {myTicket.map((item) => (
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
  // } else {
  //   return (
  //     <>
  //       <Login />
  //     </>
  //   )
  // }
};
