import React from 'react'
import * as S from "./style";
import { Nav } from '../../../components/layouts/nav/Nav';
import { HomeNav } from '../../../components/layouts/homeNav/HomeNav';
import { NoticeSec } from '../../../components/community/communityMain/NoticeSec';
import { ComNav } from '../../../components/community/communityMain/ComNav';
import { WriteBtn } from '../../../components/community/communityMain/WriteBtn';
import { NoticeLists } from '../../../components/community/communityMain/NoticeLists';
import { NoticeTitle } from '../../../components/community/communityMain/NoticeTitle';
import Wrapper from "../../../components/Wrapper";


export const CoNotice = () => {
  return (
    <Wrapper>
      <Nav />
      <HomeNav />
      <S.CoWrap>
        <NoticeSec />
        <ComNav />
        <NoticeTitle />
        <NoticeLists />
        <NoticeLists />
        <NoticeLists />
        <NoticeLists />
        <NoticeLists />
        <p>페이지넘버링</p>
        {/* <WriteBtn /> */}
      </S.CoWrap>
    </Wrapper>
  )
}