import React, { useState } from "react";
import * as S from "./style";
import * as St from "../../community/ReactionSection/style";

export const ShowReviewDetail = ({ review }) => {
  const [comment, setcomment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("comment: " + comment);
  };

  return (
    <>
      <S.ReviewDetailWrapper>
        <S.ReviewDetailRowBox>
          <S.ReviewDetailGrayTxt>관람 일시</S.ReviewDetailGrayTxt>
          {review.date} · {review.time}
        </S.ReviewDetailRowBox>
        <S.ReviewDetailRowBox>
          <S.ReviewDetailGrayTxt>예매처</S.ReviewDetailGrayTxt>
          {review.where}
        </S.ReviewDetailRowBox>
        <S.ReviewDetailRowBox>
          <S.ReviewDetailGrayTxt>할인 · 결제액</S.ReviewDetailGrayTxt>
          카드 제휴 할인 · ￦{review.price.toLocaleString()}
        </S.ReviewDetailRowBox>
        <S.ReviewDetailContent>{review.content}</S.ReviewDetailContent>
        <S.ReviewDetailCmtBtn>
          <i className="fas fa-comment"></i>댓글쓰기
        </S.ReviewDetailCmtBtn>
        <S.ReviewDetailLikeBtn>
          <span className="material-symbols-outlined">thumb_up</span>공감
        </S.ReviewDetailLikeBtn>
      </S.ReviewDetailWrapper>
      {review.cocomments.map((cmt) => (
        <S.ReviewCmtSection key={cmt.id}>
          <S.ReviewCmtCentent>{cmt.content}</S.ReviewCmtCentent>
          <S.ReviewCmtData>
            <S.ReviewCmtWriter>{cmt.writer}</S.ReviewCmtWriter>
            <S.ReviewCmtDate>{cmt.date} | 신고</S.ReviewCmtDate>
            {cmt.writer == review.writer && (
              <S.ReviewWriterCmt>작성자</S.ReviewWriterCmt>
            )}
          </S.ReviewCmtData>
        </S.ReviewCmtSection>
      ))}
      <S.ReviewCmtWrapper onSubmit={handleSubmit}>
        <S.ReviewCmtInput
          type="text"
          placeholder="내용을 입력해주세요."
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        <S.ReviewCmtPostBtn type="submit">댓글 쓰기</S.ReviewCmtPostBtn>
      </S.ReviewCmtWrapper>
    </>
  );
};
