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
  const [data, setData] = useState({});

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
