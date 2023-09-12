import React, { useState } from 'react'
import * as S from "./style";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../../recoil/recoilState';

export const TicketInput=() =>{
    const [ticketNum, setTicketNum] = useState("");
    const accessToken = useRecoilValue(accessTokenState);
    // const handleSubmit = () => {
    //     ticketNum && alert(ticketNum+"등록되었습니다.");
    // }

    const handleSubmit = async () => {
      try {
        const response = await axiosInstance.post(
          "/api/mypage/ticket",
          {
            ticket_number: ticketNum,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }
        );
        console.log(response.data);
        ticketNum && alert(ticketNum+"등록되었습니다.");
      } catch (error) {
        console.log("티켓 추가 중 오류 발생", error);
      }
    }

  return (
    <S.TicketInputWrapper>
      <S.TicketBox1>
        예매하신<span>티켓 번호</span>를 입력해주세요
      </S.TicketBox1>
      <S.TicketBox2>
        <S.TicketInput
          type="text"
          placeholder="티켓 번호를 입력해주세요."
          value={ticketNum}
          onChange={(e) => setTicketNum(e.target.value)}
        />
      </S.TicketBox2>
      <S.TicketPostBtn onClick={handleSubmit} ischange={ticketNum!==""?"true":"false"}>
        <span className="material-symbols-outlined">add</span>&nbsp;티켓 등록하기
      </S.TicketPostBtn>
    </S.TicketInputWrapper>
  );
}
