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
  
  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=질문");
      setQnaCompost(response.data.results);
      console.log(qnaCompost);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    fetchAllData();
  }, [])

  return (
    <Wrapper>
      <Nav />
      <HomeNav />
      <S.CoWrap>
        <NoticeSec />
        <ComNav />
        {qnaCompost.map((result, id) => (
                <div key={id}>
                  <QnaLists compost={result} editorIsTrue={false} />
                </div>
              ))}
        {/* <QnaLists />
        <QnaLists />
        <QnaLists />
        <QnaLists /> */}
        <p>페이지넘버링</p>
        <WriteBtn />
      </S.CoWrap>
    </Wrapper>
  );
};
