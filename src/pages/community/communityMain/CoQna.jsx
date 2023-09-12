import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Nav } from "../../../components/layouts/nav/Nav";
import { HomeNav } from "../../../components/layouts/homeNav/HomeNav";
import { NoticeSec } from "../../../components/community/communityMain/NoticeSec";
import { ComNav } from "../../../components/community/communityMain/ComNav";
import { WriteBtn } from "../../../components/community/communityMain/WriteBtn";
import { QnaLists } from "../../../components/community/communityMain/QnaLists";
import Wrapper from "../../../components/Wrapper";
import axiosInstance from "../../../api/axios";

export const CoQna = () => {
  const [qnaCompost, setQnaCompost] = useState([]);
  const [activeArray, setActiveArray] = useState("최신순");

  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=질문");
      setQnaCompost(response.data.results);
      console.log(qnaCompost);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const fetchCompostsByArrayMethod = async (arrayMethod) => {
    try {
      const apiUrl = getApiUrlByArrayMethod(arrayMethod);
      const response = await axiosInstance.get(apiUrl);
      setQnaCompost(response.data.results);
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
        {qnaCompost.map((result, id) => (
          <div key={id}>
            <QnaLists compost={result} editorIsTrue={false} />
          </div>
        ))}
        <p>페이지넘버링</p>
        <WriteBtn />
      </S.CoWrap>
    </Wrapper>
  );
};
