import React, { useState } from 'react'
import * as S from "./style";

export const TicketInput=() =>{
    const [ticketNum,setTicketNum]=useState("");
    const handleSubmit =() =>{
        ticketNum && alert(ticketNum+"등록되었습니다.");
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
