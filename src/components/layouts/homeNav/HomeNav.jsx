import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";

export const HomeNav = () => {
  const location = useLocation();

  return (
    <S.HomeNavContainer>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        홈
      </Link>
      <Link
        to="/community"
        className={location.pathname === "/community" ? "active" : ""}
      >
        커뮤니티
      </Link>
      <Link to="/my" className={location.pathname === "/my" ? "active" : ""}>
        마이
      </Link>
    </S.HomeNavContainer>
  );
};
