import React from "react";
import { Nav } from "../../../components/layouts/nav/Nav";
import { PosterSection } from "../../../components/show/showDetail/PosterSection";
import { TitleSection } from "../../../components/show/showDetail/TitleSection";
import { DetailNav } from "../../../components/show/showDetail/DetailNav";
import { ReactionSection } from "../../../components/show/showDetail/ReactionSection";
import { InfoImgSection } from "../../../components/show/showDetail/InfoImgSection";
import { ReviewSection } from "../../../components/show/showDetail/ReviewSection";

export const ShowDetail = () => {
  return (
    <>
      <Nav />
      <PosterSection />
      <TitleSection />
      <DetailNav />
      <ReactionSection />
      <InfoImgSection />
      <ReviewSection />
    </>
  );
};
