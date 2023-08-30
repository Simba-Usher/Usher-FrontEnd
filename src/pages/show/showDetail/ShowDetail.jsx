// ShowDetail.jsx

import React, { useRef } from "react";
import { Nav } from "../../../components/layouts/nav/Nav";
import { PosterSection } from "../../../components/show/showDetail/PosterSection";
import { TitleSection } from "../../../components/show/showDetail/TitleSection";
import { DetailNav } from "../../../components/show/showDetail/DetailNav";
import { ReactionSection } from "../../../components/show/showDetail/ReactionSection";
import { InfoImgSection } from "../../../components/show/showDetail/InfoImgSection";
import { ReviewSection } from "../../../components/show/showDetail/ReviewSection";

export const ShowDetail = () => {
  const reactionSectionRef = useRef(null);
  const infoImgSectionRef = useRef(null);
  const reviewSectionRef = useRef(null);

  const handleNavClick = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Nav />
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
  );
};
