import React, { useState } from 'react'
import * as S from "./style";

export const Nav = () => {
    const [search,setSearch] = useState("");

  return (
    <S.NavContainer>
      <img src="/usher_logo.png" alt="logo" />
      <S.SearchSection>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='어떤 공연을 찾으시나요?'
        />
        <img src="/search.png" alt="" />
      </S.SearchSection>
      <img src="/menu.png" alt="img" />
    </S.NavContainer>
  );
}
