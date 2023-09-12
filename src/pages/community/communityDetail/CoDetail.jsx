// CoDetail.jsx

import React, { useEffect, useState } from "react";
import * as S from "./style"
import { ReactionBar } from "../../../components/community/ReactionSection/ReactionBar";
import { CommentSection } from "../../../components/community/ReactionSection/CommentSection";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import axiosInstance from "../../../api/axios";

export const CoDetail = () => {
  const navigate = useNavigate();

  const { detailId } = useParams();
  console.log({ detailId });

  const [detailData, setDetailData] = useState({});

  const fetchCoDetailData = async () => {
    try {
      const respose = await axiosInstance.get(`/api/composts/${detailId}`)
      setDetailData(respose.data);
      console.log(detailData);
    } catch (error) {
      console.log("각 id에 해당하는 디테일 페이지 가져오는 중 에러 발생", error);
    }
  }
  useEffect(() => {
    fetchCoDetailData();
  }, [detailId])


  //   const data = {
  //     // id: id,
  //     // title: title,
  //     // writer: writer,
  //     // content: content,
  //     // created_at: created_at,
  //     // updated_at: updated_at,
  //     // comcomments: comcomments,
  //     // comcomments_cnt: comcomments_cnt,
  //     // image: image,
  //     // like_cnt: like_cnt,
  //     // category: category,
  //     // views: views,


  //     id: 1,
  //     group: "자유 게시판",
  //     title: "코노에서 부를 수 있는 뮤지컬 노래",
  //     username: "뮤라이프",
  //     date: "2023.8.17",
  //     views: 120,
  //     img: "/comu_detail.png",
  //     body: `코인 노래방에서 뮤지컬 넘버를 부를 수 있다는 사실을 아시나요? TJ 노래방에 등록되어 있는 넘버들을 살펴보아요👍 

  // 1. EMK 뮤지컬 노래
  //  뮤지컬의 명가라 하는 emk 뮤지컬의 넘버들을 코노에서 만날 수 있어요. <레베카> <모차르트> <웃는 남자> 등 뮤지컬 넘버가 다수 등록돼 있어요. 대표적으로 ‘그 눈을 떠’, ‘레베카’, ‘황금별’ 넘버를 부를 수 있어요✨

  // 2. OD 컴퍼니 뮤지컬 노래
  //  스릴러 뮤지컬의 끝판왕, OD 컴퍼니의 작품 <데스노트> <지킬앤하이드> 뮤지컬 넘버도 코노에서 만날 수 있어요. 대표적으로 ‘지금 이 순간’ ‘데스노트’ 등이 있습니다!

  // 3. 그 외 다양한 뮤지컬 노래
  // <아이다> <시카고> <위키드> 등 유명 뮤지컬 넘버들도 TJ노래방에 등록돼있으니, 코노에 가시게 된다면 ‘뮤지컬’이라고 검색해보시길 바라요! 함께 뮤심 차오르는 라이프 즐겨용🥰


  // `,
  //     likes: 7,
  //     comments: 2,
  //     comments_list: [
  //       {
  //         id: 1,
  //         username: "연뮤신강림",
  //         date: "2023.8.17",
  //         body: "혹시 코노에 엘리자벳,,, 넘버도 있을까요? 레드북 넘버도 있는지 궁금합니다",
  //       },
  //     ],
  //   };

  return (
    <Wrapper>
      <S.CoDetailWrapper>
        <S.CoDetailNav>
          <S.CoNavArrow
            className="material-symbols-outlined"
            onClick={() => navigate("/community")}
          >
            arrow_back
          </S.CoNavArrow>
          {/* <div>{data.group}</div> */}
          <div>{detailData.category}</div>
        </S.CoDetailNav>

        {/* <S.DetailTitle>{data.title}</S.DetailTitle> */}
        <S.DetailTitle>{detailData.title}</S.DetailTitle>
        <S.DetailUserBox>
          {/* <div>{data.username}</div> */}
          <div>{detailData.writer}</div>
          <span>
            {/* {data.date} | 조회 {data.views} */}
            {detailData.created_at} | 조회 {detailData.views}
          </span>
          {/* accessTocken 확인 후 실제 사용자와 같을시 */}
          {/* {data.username === "뮤라이프" && (
            <S.MyWriteDeleteBtn>
              삭제하기<span className="material-symbols-outlined">delete</span>
            </S.MyWriteDeleteBtn>
          )} */}
          {detailData.writer === "뮤라이프" && (
            <S.MyWriteDeleteBtn>
              삭제하기<span className="material-symbols-outlined">delete</span>
            </S.MyWriteDeleteBtn>
          )}
          {/*  */}
        </S.DetailUserBox>

        {detailData.image &&
          <S.DetailImg>
            {/* <img src={data.img} alt="your img" /> */}
            <img src={detailData.image} alt="your img" />
          </S.DetailImg>
        }
        
        <S.DetailGrayLine />
        {/* <S.DetailBody>{data.body}</S.DetailBody> */}
        <S.DetailBody>{detailData.content}</S.DetailBody>
        <ReactionBar />
        <CommentSection />
      </S.CoDetailWrapper>
    </Wrapper>
  );
};
