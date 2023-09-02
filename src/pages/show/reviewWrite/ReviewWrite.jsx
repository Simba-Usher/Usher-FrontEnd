import React from "react";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { NavArrow } from "../../community/communityWrite/style";
import { ChoiceTicket } from "../../../components/show/showReviewWrite/ChoiceTicket";

export const ReviewWrite = () => {
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
        <S.ReviewPost>등록</S.ReviewPost>
      </S.ReviewWriteNav>
      <ChoiceTicket />
    </Wrapper>
  );
};
