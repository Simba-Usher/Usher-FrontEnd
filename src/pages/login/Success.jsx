import React from "react";
import successIMG from "/회원가입3.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

export const Success = () => {
  const navigate = useNavigate();

  const handleBtn = (e) => {
    e.preventDefault();
    navigate("/login");
    console.log("클릭");
  };

  return (
    <Wrapper>
      <S.ImgContainer>
        <S.SuccessImg src={successIMG} alt="" />
      </S.ImgContainer>
      <S.SuccessBtn onClick={handleBtn}>어셔 홈으로</S.SuccessBtn>
    </Wrapper>
  );
};
