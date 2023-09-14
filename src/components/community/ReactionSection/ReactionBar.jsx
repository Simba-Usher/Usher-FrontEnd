import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import axiosInstance from "../../../api/axios";
import { useLocation } from "react-router-dom";

export const ReactionBar = ({ data }) => {
  const [like, setLike] = useState(false);
  const { pathname } = useLocation();
  const accessToken = useRecoilValue(accessTokenState);

  const handleLike = async () => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };

      const response = await axiosInstance.post(
        `/api/composts/${pathname.slice(11)}/likes`,
        {},
        { headers }
      );
      console.log(response.data);
      const detail = response.data.detail;
      detail == "좋아요 취소" ? setLike(false) : setLike(true);
    } catch (error) {
      console.log("좋아요 오류 발생", error);
    }
  };

  useEffect(() => {
    setLike(data.isLiked);
  }, [data.isLiked]);

  return (
    <S.ReactionWrapper>
      <S.InnerWrapper>
        <S.ReactionBtn>
          <S.PurpleColor2 className="fas fa-heart" /><p>{data.like_cnt}</p>
        </S.ReactionBtn>
        <S.ReactionBtn>
          <S.GrayColor className="fas fa-comment-alt" /><p>{data.comcomments_cnt}</p>
        </S.ReactionBtn>
      </S.InnerWrapper>
      <S.LikeBtn onClick={handleLike}>
        <S.PurpleColor
          className={like ? "fas fa-heart" : "far fa-heart"}
        />
        <p>좋아요</p>
      </S.LikeBtn>
    </S.ReactionWrapper>
  );
};
