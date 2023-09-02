import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// 사용시, toggleModal 추가
export const CategoryNav = ({ toggleModal }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); 
  };

  return (
    <S.CateNav>
      <S.CateSearchSection>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="어떤 공연을 찾으시나요?"
          onClick={toggleModal}
          style={{ cursor: "default" }}
        />
        <S.CateSearchBtn className="material-symbols-outlined">
          search
        </S.CateSearchBtn>
      </S.CateSearchSection>
      <S.CateCloseBtn onClick={goBack} className="material-symbols-outlined">
        close
      </S.CateCloseBtn>
    </S.CateNav>
  );
};
