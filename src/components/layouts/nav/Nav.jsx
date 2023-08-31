import React, { useState } from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
    const [search,setSearch] = useState("");
    const navigate = useNavigate();

  return (
    <S.NavContainer>
      <img src="/usher_logo.png" alt="logo" onClick={() => navigate("/")} />
      <S.SearchSection>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="어떤 공연을 찾으시나요?"
        />
        <span className="material-symbols-outlined">search</span>
      </S.SearchSection>
      <img src="/menu.png" alt="img" />
    </S.NavContainer>
  );
}
