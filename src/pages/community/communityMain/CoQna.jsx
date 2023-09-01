import React from "react";
import * as S from "./style";
import { Nav } from "../../../components/layouts/nav/Nav";
import { HomeNav } from "../../../components/layouts/homeNav/HomeNav";
import { NoticeSec } from "../../../components/community/communityMain/NoticeSec";
import { ComNav } from "../../../components/community/communityMain/ComNav";
import { WriteBtn } from "../../../components/community/communityMain/WriteBtn";
import { QnaLists } from "../../../components/community/communityMain/QnaLists";

export const CoQna = () => {

  return (
    <>
      <Nav />
      <HomeNav />
      <S.CoWrap>
        <NoticeSec />
        <ComNav />
        <QnaLists />
        <QnaLists />
        <QnaLists />
        <QnaLists />
        <QnaLists />
        <p>페이지넘버링</p>
        <WriteBtn />
      </S.CoWrap>
    </>
  );
};
