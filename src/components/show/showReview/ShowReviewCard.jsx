import React, { useState } from 'react'
import * as S from "./style";
import { ShowReviewDetail } from './ShowReviewDetail';

export const ShowReviewCard = ({ review }) => {
    const [fold,setFold] = useState(false);
  return (
    <div>
      <div>{review.writer}</div>
      <div>
        {review.where} · {review.discount} · ￦{review.price}
      </div>
      <div>
        {Array(parseInt(review.star))
          .fill(null)
          .map((_, index) => (
            <i key={index} className="fas fa-star" />
          ))}
        {review.date.slice(2)} | {review.time} 공연
      </div>
      <div>
        {review.content.slice(0, 21)} <span>...더보기</span>
      </div>
      <div>
        <span className="material-symbols-outlined">thumb_up</span>
        <div>공감해요 {review.likes}</div>
        <div> · 댓글 {review.cocomments.length}</div>
      </div>
      <span
        onClick={() => setFold((prevFold) => !prevFold)}
        class="material-symbols-outlined"
      >
        {fold ? "expand_less" : "keyboard_arrow_down"}
      </span>
      {fold && <ShowReviewDetail review={review} />}
    </div>
  );
};
