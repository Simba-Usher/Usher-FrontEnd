import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const WriteBtnSection = () => {
  const navigate = useNavigate();

  return (
    <S.WriteBtnSectionWrapper>
      <S.BlueTxt>공연은 어떠셨나요?</S.BlueTxt>
      <S.BlueTxt>어셔에서 나만의 후기를 남겨보세요.</S.BlueTxt>
      <S.BlueWriteBtn onClick={() => navigate("/reviewwrite")}>관람후기 작성</S.BlueWriteBtn>
    </S.WriteBtnSectionWrapper>
  );
};
