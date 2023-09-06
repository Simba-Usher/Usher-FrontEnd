// ShowDetail.jsx

import React, { useRef, useState } from "react";
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

export const ShowDetail = () => {
  const scrollRef = useRef([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      {isModalOpen ? (
        <SearchModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      ) : (
        <div style={{position: "relative"}}>
          <Nav isModalOpen={isModalOpen} toggleModal={toggleModal} />
          <PosterSection />
          <TitleSection />
          <DetailNav
            scrollRef={scrollRef}
          />
          <ReactionSection ref={scrollRef} />
          <InfoImgSection ref={scrollRef} />
          <ReviewSection ref={scrollRef} />

          <GoSite />
        </div>
      )}
    </Wrapper>
  );
};
