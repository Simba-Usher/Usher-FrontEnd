import React from "react";
import * as S from "./style";
import { Link, useParams } from "react-router-dom";

export const HomeNav = () => {
  const {pathname} = useParams();
  // console.log(pathname);

  return (
    <S.HomeNavContainer>
      <Link to="/">
        {pathname && pathname === "" ? (
          <S.FocusMenu>홈</S.FocusMenu>
        ) : (
          <div>홈</div>
        )}
      </Link>
      <Link to="/community">
        {pathname & (pathname === "community") ? (
          <S.FocusMenu>커뮤니티</S.FocusMenu>
        ) : (
          <div>커뮤니티</div>
        )}
      </Link>
      <Link to="/my">
        {pathname & (pathname === "my") ? (
          <S.FocusMenu>마이</S.FocusMenu>
        ) : (
          <div>마이</div>
        )}
      </Link>
    </S.HomeNavContainer>
  );
};
