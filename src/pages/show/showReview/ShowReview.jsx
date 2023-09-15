import React, { useEffect, useState } from "react";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { OtherNav } from "../../../components/layouts/otherNav/OtherNav";
import { ShowReviewCard } from "../../../components/show/showReview/ShowReviewCard";
import { WriteBtnSection } from "../../../components/show/showReview/WriteBtnSection";
import { FilterModal } from "../../../components/show/showReview/filterModal/FilterModal";
import axiosInstance from "../../../api/axios";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import { Login } from "../../login/Login";

export const ShowReview = () => {
  const [isSort, setIsSort] = useState("최신순");
  const [filterModal,setFilterModal]=useState(false);
  const {pathname} = useLocation();
  const accessToken = useRecoilValue(accessTokenState);

  const [data, setData] = useState([]);

    useEffect(() => {
      axiosInstance
        .get(`/api/mainposts/${pathname.slice(1, 2)}/mainreviews`)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error("API 요청 실패:", error);
        });
    },[]);

  if (accessToken) {
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
  } else {
    return (
      <>
        <Login />
      </>
    )
  }
};
