// CoDetail.jsx

import React, { useEffect, useState } from "react";
import * as S from "./style"
import { ReactionBar } from "../../../components/community/ReactionSection/ReactionBar";
import { CommentSection } from "../../../components/community/ReactionSection/CommentSection";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";

export const CoDetail = () => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenState);

  const { detailId } = useParams();
  console.log({ detailId });

  const [detailData, setDetailData] = useState({});

  const fetchCoDetailData = async () => {
    try {
      const response = await axiosInstance.get(`/api/composts/${detailId}`)
      setDetailData(response.data);
      console.log(detailData);
    } catch (error) {
      console.log("각 id에 해당하는 디테일 페이지 가져오는 중 에러 발생", error);
    }
  }
  useEffect(() => {
    fetchCoDetailData();
  }, [detailId])

  // 사용자 닉네임 불러오기
  const Nickname = localStorage.getItem('nickname');
  console.log(Nickname);

  const deleteCom = async () => {
    try {
      const response = await axiosInstance.delete(`/api/composts/${detailId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      alert("글이 삭제되었습니다");
      navigate("/community")
    } catch (error) {
      console.log("커뮤니티 글 삭제하는 중 오류 발생", error);
    }
  }
  const slicedate = (sdate) => {
    return sdate.slice(0, 10);
  };

  // 이전 화살표 nav 연결
  const Cate = detailData.category;
  const PrevPage = Cate === "자유" ? "/community/free" : Cate === "에디터 픽" ? "/community/editor" : Cate === "질문" ? "/community/qna" : Cate === "공지" ? "/community/notice" : "/community/free";

  // 좋아요 post
  // const handleLike = async () => {
  //   try {
  //     const headers = { Authorization: `Bearer ${accessToken}` };

  //     const response = await axiosInstance.post(
  //       `/api/composts/${detailId}/likes`,
  //       {},
  //       { headers }
  //     );
  //     console.log(response.data);
  //   }
  // }

  return (
    <Wrapper>
      <S.CoDetailWrapper>
        <S.CoDetailNav>
          <S.CoNavArrow
            className="material-symbols-outlined"
            onClick={() => navigate(PrevPage)}
          >
            arrow_back
          </S.CoNavArrow>
          <div>{detailData.category}</div>
        </S.CoDetailNav>

        <S.DetailTitle>{detailData.title}</S.DetailTitle>
        <S.DetailUserBox>
          <div>{detailData.writer}</div>
          <span>
            {/* {slicedate(detailData.created_at)} | 조회 {detailData.views} */}
            {detailData.created_at} | 조회 {detailData.views}
          </span>
          {/* accessTocken 확인 후 실제 사용자와 같을시 */}
          {detailData.writer === Nickname && (
            <S.MyWriteDeleteBtn onClick={() => deleteCom()}>
              삭제하기<span className="material-symbols-outlined">delete</span>
            </S.MyWriteDeleteBtn>
          )}
        </S.DetailUserBox>

        {detailData.image && (
          <S.DetailImg>
            <img src={detailData.image} alt="your img" />
          </S.DetailImg>
        )}

        <S.DetailGrayLine />
        <S.DetailBody>{detailData.content}</S.DetailBody>
        <ReactionBar data={detailData} />
        <CommentSection />
      </S.CoDetailWrapper>
    </Wrapper>
  );
};
