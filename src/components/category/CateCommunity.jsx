import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

export const CateCommunity = () => {
  return (
    <Link to="/community">
      <S.CateMenu>
        <img src="/community.png" alt="community" />
        커뮤니티
      </S.CateMenu>
    </Link>
  );
};
