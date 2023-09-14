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
  const [filteredComposts, setFilteredComposts] = useState([]);

  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=질문");
      setQnaCompost(response.data.results);
      console.log(qnaCompost);

      const sorted = sortComposts(response.data.results, "최신순");
      setFilteredComposts(sorted);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // 프론트에서 나열한걸로 수정
  const filterCompostsByCategory = (category) => {
    const filtered = qnaCompost.filter((item) => item.category === category);
    return filtered;
  };

  const handleArraySecClick = (arrayMethod) => {
    setActiveArray(arrayMethod);

    const category = "질문";
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

  useEffect(() => {
    fetchAllData();
  }, []);

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
        {filteredComposts.map((result, id) => (
          <div key={id}>
            <QnaLists compost={result} editorIsTrue={false} />
          </div>
        ))}
        {/* <p>페이지넘버링</p> */}
        <WriteBtn />
      </S.CoWrap>
    </Wrapper>
  );
};
