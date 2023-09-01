import React from "react";
import * as S from "./style";
import { Nav } from "../../../components/layouts/nav/Nav";
import { HomeNav } from "../../../components/layouts/homeNav/HomeNav";
import { NoticeSec } from "../../../components/community/communityMain/NoticeSec";
import { ComNav } from "../../../components/community/communityMain/ComNav";
import { ComLists } from "../../../components/community/communityMain/ComLists";
import { WriteBtn } from "../../../components/community/communityMain/WriteBtn";
import Wrapper from "../../../components/Wrapper";

export const CoHot = () => {

  return (
    <Wrapper>
      <Nav />
      <HomeNav />
      <S.CoHotWrap>
        <NoticeSec />
        <ComNav />
        <ComLists />
        <ComLists />
        <ComLists />
        <ComLists />
        <ComLists />
        <p>페이지넘버링</p>
        <WriteBtn />
      </S.CoHotWrap>
    </Wrapper>
  );
};
