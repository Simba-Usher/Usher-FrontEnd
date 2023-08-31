import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const Nav = ({ toggleModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMyPage = location.pathname.startsWith("/my");
  const isCommunityPage = location.pathname.startsWith("/community");

  const [search, setSearch] = useState("어떤 공연을 찾으시나요?");

  return (
    <S.NavContainer>
      <img src="/usher_logo.png" alt="logo" onClick={() => navigate("/")} />

      {!isMyPage && !isCommunityPage && (
        <S.SearchSection>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="어떤 공연을 찾으시나요?"
            onClick={toggleModal}
            style={{ cursor: "default" }}
          />
          <span className="material-symbols-outlined">search</span>
        </S.SearchSection>
      )}

      {isCommunityPage && (
        <S.LevelIcon>
          <p>등급</p>
          <p>아이콘</p>
        </S.LevelIcon>
      )}

      <S.MoreBtn src="/menu.png" alt="img" />
    </S.NavContainer>
  );
};
