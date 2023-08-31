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

export const ShowDetail = () => {
  const reactionSectionRef = useRef(null);
  const infoImgSectionRef = useRef(null);
  const reviewSectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavClick = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen ? (
        <SearchModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      ) : (
        <>
          <Nav isModalOpen={isModalOpen} toggleModal={toggleModal} />
          <PosterSection />
          <TitleSection />
          <DetailNav
            onReactionClick={() => handleNavClick(reactionSectionRef)}
            onInfoImgClick={() => handleNavClick(infoImgSectionRef)}
            onReviewClick={() => handleNavClick(reviewSectionRef)}
          />
          <div ref={reactionSectionRef}>
            <ReactionSection />
          </div>
          <div ref={infoImgSectionRef}>
            <InfoImgSection />
          </div>
          <div ref={reviewSectionRef}>
            <ReviewSection />
          </div>
        </>
      )}
    </>
  );
};
