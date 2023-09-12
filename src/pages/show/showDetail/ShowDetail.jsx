// ShowDetail.jsx

import React, { useEffect, useRef, useState } from "react";
import { Nav } from "../../../components/layouts/nav/Nav";
import { PosterSection } from "../../../components/show/showDetail/PosterSection";
import { TitleSection } from "../../../components/show/showDetail/TitleSection";
import { DetailNav } from "../../../components/show/showDetail/DetailNav";
import { ReactionSection } from "../../../components/show/showDetail/ReactionSection";
import { InfoImgSection } from "../../../components/show/showDetail/InfoImgSection";
import { ReviewSection } from "../../../components/show/showDetail/ReviewSection";
import { SearchModal } from "../../searchModal/SearchModal";
import Wrapper from "../../../components/Wrapper";
import { GoSite } from "../../../components/show/showDetail/GoSite";
import axiosInstance from "../../../api/axios";
import { useLocation } from "react-router-dom";

export const ShowDetail = () => {
  const { pathname } = useLocation();
  const scrollRef = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [data, setData] = useState({
    id: 1,
    title: "오페라의 유령 개짱ㅋㅋ",
    content: "냠냠 ㅋㅋ아 백엔드개노잼 ㅋㅋ",
    mainreviews: [],
    mainreviews_cnt: 0,
    image: null,
    like_cnt: 0,
    genre: "뮤지컬",
    location: "경기",
    average_rating: 4,
    reactions: [],
    price: 150000,
    start_date: "2023-07-06",
    end_date: "2023-08-25",
    sentence: "오유 개쩐다는데 봐보쉴?ㅋㅋㅋ",
  });

  useEffect(() => {
    axiosInstance
      // .get(`/api/mainposts/${1}`)
      .get(`/api/mainposts/${pathname.slice(1)}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  },[]);

  return (
    <Wrapper>
      {isModalOpen ? (
        <SearchModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      ) : (
        <div style={{ position: "relative" }}>
          <Nav isModalOpen={isModalOpen} toggleModal={toggleModal} />
          <PosterSection data={data} />
          <TitleSection data={data} />
          <DetailNav scrollRef={scrollRef} />
          <ReactionSection ref={scrollRef} />
          <InfoImgSection ref={scrollRef} />
          <ReviewSection ref={scrollRef} data={data} />

          <GoSite />
        </div>
      )}
    </Wrapper>
  );
};
