import React from 'react'
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const OtherNav=({title})=> {
  const navigate = useNavigate();  

  const goback = () => {
    navigate(-1);
  };

    return (
      <S.NavWrapper>
        <S.Left>
          <img src="/usher_nav.png" alt="logo" onClick={() => navigate("/")} />
        </S.Left>
        <div>{title}</div>
        <S.Right onClick={goback}>
          <span className="material-symbols-outlined">close</span>
        </S.Right>
      </S.NavWrapper>
    );
}
