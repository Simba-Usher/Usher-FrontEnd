import React, { useState } from "react";
import * as S from "./style";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";

export const ShowReviewDetail = ({ review }) => {
  const accessToken = useRecoilValue(accessTokenState);
  const [comment, setcomment] = useState("");
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("comment: " + comment);
  };
  */
  const handleSubmit = async () => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axiosInstance.post(
        `/api/mainreviews/${review.id}/mainrecoms`,
        {
          content: comment,
        },
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.error("관람 후기 작성 오류 발생:", error);
      throw error;
    }
  };

  return (
    <>
      <S.ReviewDetailWrapper>
        <S.ReviewDetailRowBox>
          <S.ReviewDetailGrayTxt>관람 일시</S.ReviewDetailGrayTxt>
          {review.ticket.performance_date.slice(0, 10)} ·{" "}
          {review.ticket.performance_date.slice(11, 16)}
        </S.ReviewDetailRowBox>
        <S.ReviewDetailRowBox>
          <S.ReviewDetailGrayTxt>예매처</S.ReviewDetailGrayTxt>
          {review.ticket.reservation_site}
        </S.ReviewDetailRowBox>
        <S.ReviewDetailRowBox>
          <S.ReviewDetailGrayTxt>할인 · 결제액</S.ReviewDetailGrayTxt>
          카드 제휴 할인 · ￦{parseInt(review.ticket.price).toLocaleString()}
        </S.ReviewDetailRowBox>
        <S.ReviewDetailContent>{review.content}</S.ReviewDetailContent>
        <S.ReviewDetailCmtBtn>
          <i className="fas fa-comment"></i>댓글쓰기
        </S.ReviewDetailCmtBtn>
        <S.ReviewDetailLikeBtn>
          <span className="material-symbols-outlined">thumb_up</span>공감
        </S.ReviewDetailLikeBtn>
      </S.ReviewDetailWrapper>
      {review.mainrecoms.map((cmt) => (
        <S.ReviewCmtSection key={cmt.id}>
          <S.ReviewCmtCentent>{cmt.content}</S.ReviewCmtCentent>
          <S.ReviewCmtData>
            <S.ReviewCmtWriter>{cmt.writer}</S.ReviewCmtWriter>
            <S.ReviewCmtDate>
              {cmt.created_at.slice(0, 10)} | 신고
            </S.ReviewCmtDate>
            {cmt.writer == review.writer && (
              <S.ReviewWriterCmt>작성자</S.ReviewWriterCmt>
            )}
          </S.ReviewCmtData>
        </S.ReviewCmtSection>
      ))}
      <S.ReviewCmtWrapper>
        <S.ReviewCmtInput
          type="text"
          placeholder="내용을 입력해주세요."
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        <S.ReviewCmtPostBtn onClick={handleSubmit}>
          댓글 쓰기
        </S.ReviewCmtPostBtn>
      </S.ReviewCmtWrapper>
    </>
  );
};
