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
  // const editorIsTrue = true;
  const [editorPick, setEditorPick] = useState([]);
  
  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=에디터+픽");
      setEditorPick(response.data.results);
      console.log(editorPick);
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
        {editorPick
              .map((result, id) => (
                <div key={id}>
                  <ComLists compost={result} editorIsTrue={true} />
                </div>
              ))}
        {/* <ComLists />
        <ComLists />
        <ComLists />
        <ComLists /> */}
        <p>페이지넘버링</p>
      </S.CoWrap>
    </Wrapper>
  );
};
