import React, { useState } from "react";
import * as S from "./style";
import { ShowReviewDetail } from "./ShowReviewDetail";
// import { useRecoilValue } from "recoil";
// import { accessTokenState } from "../../../recoil/recoilState";
// 주석 처리한 부분은 로그인 한 username을 가지고 올 부분

export const ShowReviewCard = ({ review }) => {
  // const accessToken = useRecoilValue(accessTokenState);
  const [fold, setFold] = useState(false);

  return (
    <S.ReviewCardWrapper>
      {/* accessTocken 확인 후 실제 사용자와 같을시 */}
      {review.writer === "뮤라이프" ? (
        <S.ShowWriteDeleteBtn>
          삭제하기<span className="material-symbols-outlined">delete</span>
        </S.ShowWriteDeleteBtn>
      ) : (
        <S.ReviewNotify>신고</S.ReviewNotify>
      )}
      {/*  */}
      <S.ReviewWriter>{review.writer}</S.ReviewWriter>
      <S.ReviewData>
        {review.ticket.reservation_site} · 카드 제휴 할인 · ￦
        {parseInt(review.ticket.price).toLocaleString()}
      </S.ReviewData>
      <S.ReviewRowBox>
        {Array(parseInt(review.rating))
          .fill(null)
          .map((_, index) => (
            <S.ReviewStars key={index} className="fas fa-star" />
          ))}
        {review.ticket.performance_date.slice(0, 10)} |{" "}
        {review.ticket.performance_date.slice(11,16)} 공연
      </S.ReviewRowBox>
      <S.ReviewContent>
        {review.content.slice(0, 21)} <span>...더보기</span>
      </S.ReviewContent>
      <S.ReviewRow>
        <S.SmallBlueIcon className="material-symbols-outlined">
          thumb_up
        </S.SmallBlueIcon>
        <S.SmallBlueTxt>공감해요 {review.like_cnt}</S.SmallBlueTxt>
        <S.SmallGrayTxt>&nbsp;· 댓글 {review.mainrecoms_cnt}</S.SmallGrayTxt>
        <span
          onClick={() => setFold((prevFold) => !prevFold)}
          className="material-symbols-outlined"
        >
          {fold ? "expand_less" : "keyboard_arrow_down"}
        </span>
      </S.ReviewRow>
      {fold && <ShowReviewDetail review={review} />}
    </S.ReviewCardWrapper>
  );
};
