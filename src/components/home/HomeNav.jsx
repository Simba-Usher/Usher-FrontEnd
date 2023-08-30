import React from 'react'
import * as S from "./style";
import { Link } from 'react-router-dom';

export const HomeNav = () => {
  return (
    <S.HomeNavContainer>
      <Link to="/">
        <S.FocusMenu>홈</S.FocusMenu>
      </Link>
      <Link to="/community">
        <div>커뮤니티</div>
      </Link>
      <Link to="/my">
        <div>마이</div>
      </Link>
    </S.HomeNavContainer>
  );
}
