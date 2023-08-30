import React from "react";
import * as S from "./style";
import { Nav } from "../../components/layouts/nav/Nav";
import { HomeNav } from "../../components/layouts/homeNav/HomeNav";
import { Banner } from "../../components/home/Banner";
import { GenreSection } from "../../components/home/GenreSection";
import { AreaSection } from "../../components/home/AreaSection";
import { ReactionSection } from "../../components/home/ReactionSection";
import { RecentSection } from "../../components/home/RecentSection";
import { Footer } from "../../components/layouts/footer/Footer";

export const Home = () => {

  return (
    <>
      <Nav />
      <HomeNav />
      <Banner />
      <GenreSection />
      <AreaSection />
      <ReactionSection />
      <RecentSection />
      <Footer />
    </>
  );
};
