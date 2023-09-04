import React, { useState } from "react";
import * as S from "../../show/showReview/style";

export const ShowWriteDetail = ({ review }) => {

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
        <S.ReviewDetailPurpleBtn>
          후기 상세페이지로
        </S.ReviewDetailPurpleBtn>
      </S.ReviewDetailWrapper>
    </>
  );
};
