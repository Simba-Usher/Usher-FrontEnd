import React, { useEffect, useState } from "react";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { NavArrow } from "../../community/communityWrite/style";
import { ChoiceTicket } from "../../../components/show/showReviewWrite/ChoiceTicket";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import axiosInstance from "../../../api/axios";

export const ReviewWrite = () => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenState);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [star, setStar] = useState(5);
  const [body, setBody] = useState("");
  const [myTicket, setMyTicket] = useState([]);

  const goback = () => {
    navigate(-1);
  };

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
  };

  const handleSubmit = async () => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };

      const response = await axiosInstance.post(
        "/api/mainposts/1/mainreviews",
        {
          ticket: selectedTicket.id,
          content: body,
          rating: star,
        },
        { headers }
      );
      console.log(selectedTicket.id);
      console.log(response.data);
      alert("관람 후기가 작성되었습니다")
    } catch (error) {
      console.error("관람 후기 작성 오류 발생:", error);
      throw error;
    }
  };

  // 티켓 가져오기
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

  return (
    <Wrapper>
      <S.ReviewWriteNav>
        <NavArrow className="material-symbols-outlined" onClick={goback}>
          arrow_back
        </NavArrow>
        관람 후기 작성
        <S.ReviewPost
          isselected={selectedTicket && "true"}
          onClick={handleSubmit}
        >
          등록
        </S.ReviewPost>
      </S.ReviewWriteNav>
      <ChoiceTicket
        setSelectedTicket={handleSelectTicket}
        selectedTicket={selectedTicket}
        allTicket={myTicket}
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
