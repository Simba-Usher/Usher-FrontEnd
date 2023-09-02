import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

export const CateHome= () => {
  return (
    <Link to="/">
      <S.CateMenu>
        <img src="/home.png" alt="home" />홈
      </S.CateMenu>
    </Link>
  );
};
