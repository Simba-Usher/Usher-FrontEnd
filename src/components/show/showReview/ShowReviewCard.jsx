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
      {/* {review.writer == accessToken} 로그인 중인 사용자명과 같을 때는 없어져야함 */}
      <S.ReviewNotify>신고</S.ReviewNotify>
      <S.ReviewWriter>{review.writer}</S.ReviewWriter>
      <S.ReviewData>
        {review.where} · 카드 제휴 할인 · ￦{review.price.toLocaleString()}
      </S.ReviewData>
      <S.ReviewRowBox>
        {Array(parseInt(review.star))
          .fill(null)
          .map((_, index) => (
            <S.ReviewStars key={index} className="fas fa-star" />
          ))}
        {review.date.slice(2)} | {review.time} 공연
      </S.ReviewRowBox>
      <S.ReviewContent>
        {review.content.slice(0, 21)} <span>...더보기</span>
      </S.ReviewContent>
      <S.ReviewRow>
        <S.SmallBlueIcon className="material-symbols-outlined">
          thumb_up
        </S.SmallBlueIcon>
        <S.SmallBlueTxt>공감해요 {review.likes}</S.SmallBlueTxt>
        <S.SmallGrayTxt>&nbsp;· 댓글 {review.cocomments.length}</S.SmallGrayTxt>
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
