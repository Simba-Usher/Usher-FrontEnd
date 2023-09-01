import React from 'react'
import { Nav } from '../../../components/layouts/nav/Nav';
import { HomeNav } from '../../../components/layouts/homeNav/HomeNav';
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";

export const My = () => {

  return (
    <Wrapper>
      <Nav />
      <HomeNav />
      mypage
    </Wrapper>
  );
};
