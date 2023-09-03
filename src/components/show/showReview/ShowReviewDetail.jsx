import React, { useState } from "react";
import * as S from "./style";
import * as St from "../../community/ReactionSection/style";

export const ShowReviewDetail = ({ review }) => {
  const [comment, setcomment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("cmt: " + cmt + "cocmt: " + cocmt);
  };

  return (
    <>
      <div>
        <div>
          <div>관람 일시</div>
          {review.date} · {review.time}
        </div>
        <div>
          <div>예매처</div>
          {review.where}
        </div>
        <div>
          <div>할인 · 결제액</div>
          {review.discount} · ￦{review.price}
        </div>
        <div>{review.content}</div>
        <div>
          <i className="fas fa-comment"></i>댓글쓰기
        </div>
        <div>
          <span className="material-symbols-outlined">thumb_up</span>공감
        </div>
      </div>
      {review.cocomments.map((cmt) => (
        <div key={cmt.id}>
          <div>{cmt.content}</div>
          <div>
            <span>{cmt.writer}</span>
            <span>
              {cmt.date}
              {cmt.writer != review.writer && "| 신고"}
            </span>
            {(cmt.writer = review.writer && <div>작성자</div>)}
          </div>
        </div>
      ))}
      <S.ReviewCmtWrapper onSubmit={handleSubmit}>
        <S.ReviewCmtInput
          type="text"
          placeholder="내용을 입력해주세요."
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        <S.ReviewCmtPostBtn type="submit">
          댓글 쓰기
        </S.ReviewCmtPostBtn>
      </S.ReviewCmtWrapper>
    </>
  );
};
