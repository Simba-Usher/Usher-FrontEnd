import React, { useEffect, useState } from "react";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { NavArrow } from "../../community/communityWrite/style";
import { ChoiceTicket } from "../../../components/show/showReviewWrite/ChoiceTicket";
import { useNavigate } from "react-router-dom";

export const ReviewWrite = () => {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [star, setStar] = useState(5);
  const [body, setBody] = useState("");

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleInputNum = (e) => {
    let newValue = e.target.value;
    if (newValue < 0) {
      newValue = 0;
    } else if (newValue > 5) {
      newValue = 5;
    }
    setStar(newValue);
  }

  const handleSubmit = ()=>{
    alert("ticket: "+selectedTicket.title+"/ 별점: "+star+"/ 본문: "+body)
  }

  return (
    <Wrapper>
      <S.ReviewWriteNav>
        <NavArrow
          className="material-symbols-outlined"
          onClick={() => navigate("/community")}
        >
          arrow_back
        </NavArrow>
        관람 후기 작성
        <S.ReviewPost isselected={selectedTicket&&"true"} onClick={handleSubmit}>등록</S.ReviewPost>
      </S.ReviewWriteNav>
      <ChoiceTicket
        setSelectedTicket={handleSelectTicket}
        selectedTicket={selectedTicket}
      />
      <S.ReviewWriteSection>
        <S.FlexRow_>
          <S.StarTxt>별점</S.StarTxt>
          <S.StarInput
            type="number"
            value={star}
            onChange={handleInputNum}
            min="0"
            max="5"
          />
          {Array(parseInt(star))
            .fill(null)
            .map((_, index) => (
              <S.StarIcon key={index} className="fas fa-star" />
            ))}
          {Array(parseInt(5 - star))
            .fill(null)
            .map((_, index) => (
              <S.StarIcon key={index} className="far fa-star" />
            ))}
        </S.FlexRow_>
        <S.Txtarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="내용을 입력하세요"
        />
      </S.ReviewWriteSection>
    </Wrapper>
  );
};
