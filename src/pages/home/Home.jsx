import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/layouts/nav/Nav";
import { HomeNav } from "../../components/layouts/homeNav/HomeNav";
import { Banner } from "../../components/home/Banner";
import { GenreSection } from "../../components/home/GenreSection";
import { AreaSection } from "../../components/home/AreaSection";
import { ReactionSection } from "../../components/home/ReactionSection";
import { RecentSection } from "../../components/home/RecentSection";
import { Footer } from "../../components/layouts/footer/Footer";
import { SearchModal } from "../searchModal/SearchModal";
import Wrapper from "../../components/Wrapper";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      {isModalOpen ? (
        <SearchModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      ) : (
        <>
          <Nav toggleModal={toggleModal} />
          <HomeNav />
          <Banner />
          <GenreSection />
          <AreaSection />
          <ReactionSection />
          <RecentSection />
          <Footer />
        </>
      )}
    </Wrapper>
  );
};
