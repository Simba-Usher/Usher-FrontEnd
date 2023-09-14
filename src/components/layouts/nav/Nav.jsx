// Nav.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Grade } from "../../my/myMain/style";
import axiosInstance from "../../../api/axios";

export const Nav = ({ toggleModal, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMyPage = location.pathname.startsWith("/my");
  const isCommunityPage = location.pathname.startsWith("/community");

  const [search, setSearch] = useState("");

  const handleSearchURL = () => {
    setSearch(search);
    navigate(`/community/search/?search=${search}`);
  }

  // 엔터키 검색
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      // onClick(search);
      handleSearchURL();
    }
  }

  return (
    <S.NavContainer>
      <img src="/usher_nav.png" alt="logo" onClick={() => navigate("/")} />

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
        <>
          <S.ComSearchSection>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="어떤 공연을 찾으시나요?"
              style={{ cursor: "default" }}
              // 엔터키 검색
              onKeyDown={handleEnterKey}
            />
            <span
              className="material-symbols-outlined"
              onClick={handleSearchURL}
            >
              search
            </span>
          </S.ComSearchSection>
          {/* 사용자 등급 불러오기 */}
          <S.LevelIcon>
            <Grade src="/grade1.png" alt="grade" />
          </S.LevelIcon>
        </>
      )}
      <Link to="/category">
        <S.MoreBtn src="/menu.png" alt="img" />
      </Link>
    </S.NavContainer>
  );
};
