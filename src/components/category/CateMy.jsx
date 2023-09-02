import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

export const CateMy = () => {
  return (
    <Link to="/my">
      <S.CateMenu>
        <img src="/mypage.png" alt="community" />
        마이
      </S.CateMenu>
    </Link>
  );
};
