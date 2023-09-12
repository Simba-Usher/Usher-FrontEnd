import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Nav } from "../../../components/layouts/nav/Nav";
import { HomeNav } from "../../../components/layouts/homeNav/HomeNav";
import { NoticeSec } from "../../../components/community/communityMain/NoticeSec";
import { ComNav } from "../../../components/community/communityMain/ComNav";
import { ComLists } from "../../../components/community/communityMain/ComLists";
import Wrapper from "../../../components/Wrapper";
import axiosInstance from "../../../api/axios";

export const CoEditor = () => {
  const [editorPick, setEditorPick] = useState([]);
  const [activeArray, setActiveArray] = useState("최신순");

  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=에디터+픽");
      setEditorPick(response.data.results);
      console.log(editorPick);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const fetchCompostsByArrayMethod = async (arrayMethod) => {
    try {
      const apiUrl = getApiUrlByArrayMethod(arrayMethod);
      const response = await axiosInstance.get(apiUrl);
      setEditorPick(response.data.results);
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
        {editorPick
          .map((result, id) => (
            <div key={id}>
              <ComLists compost={result} editorIsTrue={true} />
            </div>
          ))}
        <p>페이지넘버링</p>
      </S.CoWrap>
    </Wrapper>
  );
};
