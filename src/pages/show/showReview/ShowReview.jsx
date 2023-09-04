import React, { useState } from "react";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { OtherNav } from "../../../components/layouts/otherNav/OtherNav";
import { ShowReviewCard } from "../../../components/show/showReview/ShowReviewCard";
import { WriteBtnSection } from "../../../components/show/showReview/WriteBtnSection";
import { FilterModal } from "../../../components/show/showReview/filterModal/FilterModal";

export const ShowReview = () => {
  const [isSort, setIsSort] = useState("최신순");
  const [filterModal,setFilterModal]=useState(false);

  const data = [
    {
      id: 1,
      writer: "뮤라이프",
      price: 152000,
      where: "인터파크 티켓",
      star: 5,
      date: "2023.8.10",
      time: "19:30",
      content:
        "삼천년동안 얼어있던 내 심장이 뛰기 시작하고,,조승우행님 오페라의 유령을 본 이후로 심봉사마냥 두 눈 번쩍 떴습니다... 최고의 뮤지컬,, 두번 볼 의향 충분합니다 좌석은 말할 것도 없이 갓샤롯데.. 시야 완전 잘보여요!!",
      likes: 6,
      comments: 2,
      cocomments:[
        {
          id: 1,
          writer: "익명의코끼리",
          content: "아멘... 이 댓읽고 카드 긁었습니다^-^",
          date: "2023.8.11",
        },
        {
          id: 2,
          writer: "뮤라이프",
          content: "최고의 선택. 후회 없으실겁니다",
          date: "2023.8.11",
        }
      ]
      },
    {
      id: 2,
      writer: "뮤라이프2",
      price: 152000,
      where: "인터파크 티켓2",
      star: 5,
      date: "2023.8.10",
      time: "19:30",
      content:
        "삼천년동안 얼어있던 내 심장이 뛰기 시작하고,,조승우행님 오페라의 유령을 본 이후로 심봉사마냥 두 눈 번쩍 떴습니다... 최고의 뮤지컬,, 두번 볼 의향 충분합니다 좌석은 말할 것도 없이 갓샤롯데.. 시야 완전 잘보여요!!",
      likes: 6,
      comments: 2,
      cocomments:[
        {
          id: 1,
          writer: "익명의코끼리2",
          content: "아멘... 이 댓읽고 카드 긁었습니다^-^",
          date: "2023.8.11",
        },
        {
          id: 2,
          writer: "뮤라이프2",
          content: "최고의 선택. 후회 없으실겁니다",
          date: "2023.8.11",
        }
      ]
      },
  ];
  return (
    <>
      {filterModal && <FilterModal setFilterModal={setFilterModal} />}
      <Wrapper>
        <OtherNav title="관람후기" />
        <S.GrayHr />
        <WriteBtnSection />
        <S.ReviewBlueTxt>관람 후기 ({data.length})</S.ReviewBlueTxt>
        <S.ReviewFilterSection>
          <S.ReviewSort
            onClick={() => setIsSort("최신순")}
            isclicked={isSort == "최신순" ? "true" : "false"}
          >
            최신순
          </S.ReviewSort>
          &nbsp;|&nbsp;
          <S.ReviewSort
            onClick={() => setIsSort("공감순")}
            isclicked={isSort == "공감순" ? "true" : "false"}
          >
            공감순
          </S.ReviewSort>
          <S.FilterBtnWrapper onClick={()=>setFilterModal(true)}>
            <img src="/filter.png" alt="filter" />
            맞춤 필터
          </S.FilterBtnWrapper>
        </S.ReviewFilterSection>
        {data.map((review) => (
          <ShowReviewCard key={review.id} review={review} />
        ))}
      </Wrapper>
    </>
  );
};
