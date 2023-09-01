import React, { useState } from "react";
import * as S from "./style";

export const ReactionBar = () => {
  const [isHeart, setisHeart] = useState(false);
  const handleHeartClick = () => {
    setisHeart((prevIsHeart) => !prevIsHeart);
  };

  const data = {
    likes: 7,
    comments: 2,
  };

  return (
    <S.ReactionWrapper>
      <S.InnerWrapper>
        <S.ReactionBtn>
          <S.PurpleColor className="fas fa-heart" /> {data.likes}
        </S.ReactionBtn>
        <S.ReactionBtn>
          <S.GrayColor className="fas fa-comment-alt" /> {data.comments}
        </S.ReactionBtn>
      </S.InnerWrapper>
      <S.LikeBtn onClick={handleHeartClick}>
        {isHeart ? (
          <S.PurpleColor className="fas fa-heart" />
        ) : (
          <S.PurpleColor className="far fa-heart" />
        )}
        <p>좋아요</p>
      </S.LikeBtn>
    </S.ReactionWrapper>
  );
};
