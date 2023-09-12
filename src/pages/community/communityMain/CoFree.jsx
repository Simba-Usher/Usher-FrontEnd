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

export const CoFree = () => {
  const [freeCompost, setFreeCompost] = useState([]);
  const [activeArray, setActiveArray] = useState("최신순");
  
  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=자유");
      setFreeCompost(response.data.results);
      console.log(freeCompost);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const fetchCompostsByArrayMethod = async (arrayMethod) => {
    try {
      const apiUrl = getApiUrlByArrayMethod(arrayMethod);
      const response = await axiosInstance.get(apiUrl);
      setFreeCompost(response.data.results);
      closeModal();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getApiUrlByArrayMethod = (arrayMethod) => {
    switch (arrayMethod) {
      case '최신순':
          return '/api/composts/recent';
      case '조회순':
          return '/api/composts/views';
      case '좋아요 많은순':
          return '/api/composts/popular';
      case '댓글 많은 순':
          return '/api/composts/cmt';
      default:
          return '/api/composts/recent';
  }
  };

  const handleArraySecClick = (arrayMethod) => {
    // 선택된 정렬 방식 업데이트
    setActiveArray(arrayMethod);
    // 선택된 정렬 방식에 따라 글 목록 가져오기
    fetchCompostsByArrayMethod(arrayMethod);
  };

  useEffect(() => {
    fetchAllData();
  },[]);

  return (
    <Wrapper>
      <Nav />
      <HomeNav />
      <S.CoWrap>
        <NoticeSec />
        <ComNav
          activeArray={activeArray}
          handleArraySecClick={handleArraySecClick}
        />
        {freeCompost.map((result, id) => (
          <div key={id}>
            <ComLists compost={result} />
          </div>
        ))}
        <p>페이지넘버링</p>
        <WriteBtn />
      </S.CoWrap>
    </Wrapper>
  );
};
