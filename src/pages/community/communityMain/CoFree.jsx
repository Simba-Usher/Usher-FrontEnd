// CoFree.jsx

import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Nav } from "../../../components/layouts/nav/Nav";
import { HomeNav } from "../../../components/layouts/homeNav/HomeNav";
import { NoticeSec } from "../../../components/community/communityMain/NoticeSec";
import { ComNav } from "../../../components/community/communityMain/ComNav";
import { ComLists } from "../../../components/community/communityMain/ComLists";
import { WriteBtn } from "../../../components/community/communityMain/WriteBtn";
import Wrapper from "../../../components/Wrapper";
import axiosInstance from "../../../api/axios";
import { useLocation } from "react-router-dom";

export const CoFree = () => {
  const [freeCompost, setFreeCompost] = useState([]);
  const [activeArray, setActiveArray] = useState("최신순");
  const [filteredComposts, setFilteredComposts] = useState([]);
  const location = useLocation();
  const searchValue = new URLSearchParams(location.search).get("search");

  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=자유");
      setFreeCompost(response.data.results);
      console.log(freeCompost);

      const sorted = sortComposts(response.data.results, "최신순");
      setFilteredComposts(sorted);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // 프론트에서 나열한걸로 수정
  const filterCompostsByCategory = (category) => {
    const filtered = freeCompost.filter((item) => item.category === category);
    return filtered;
  };

  const handleArraySecClick = (arrayMethod) => {
    setActiveArray(arrayMethod);

    const category = "자유";
    const filtered = filterCompostsByCategory(category);

    // 선택된 나열순서로 정렬
    const sorted = sortComposts(filtered, arrayMethod);

    // 정렬된 데이터 저장
    setFilteredComposts(sorted);
  };

  const sortComposts = (composts, arrayMethod) => {
    switch (arrayMethod) {
      case '최신순':
        return [...composts].sort((a, b) => b.created_at - a.created_at);
      case '조회순':
        return [...composts].sort((a, b) => b.views - a.views);
      case '좋아요 많은순':
        return [...composts].sort((a, b) => b.like_cnt - a.like_cnt);
      case '댓글 많은 순':
        return [...composts].sort((a, b) => b.comcomments_cnt - a.comcomments_cnt);
      default:
        return [...composts].sort((a, b) => b.created_at - a.created_at);
    }
  };

  const handleSearch = async (searchValue) => {
    try {
        const response = await axiosInstance.get(`/api/composts?search=${searchValue}`)
        // setSearch(response.data.results);
        setSearchResults(response.data.results);
        console.log(response.data.results);
    } catch (error) {
        console.log("검색어 입력 오류", error);
    }
  }

  useEffect(() => {
    fetchAllData();
    handleSearch(searchValue);
  }, [searchValue]);

  return (
    <Wrapper>
      <Nav 
        onClick={handleSearch}
      />
      <HomeNav />
      <S.CoWrap>
        <NoticeSec />
        <ComNav
          activeArray={activeArray}
          handleArraySecClick={handleArraySecClick}
        />
        {filteredComposts.map((result, id) => (
          <div key={id}>
            <ComLists compost={result} />
          </div>
        ))}
        {/* <p>페이지넘버링</p> */}
        <WriteBtn />
      </S.CoWrap>
    </Wrapper>
  );
};
