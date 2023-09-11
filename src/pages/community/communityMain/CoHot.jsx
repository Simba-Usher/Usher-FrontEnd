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
import { useNavigate } from "react-router-dom";

export const CoHot = () => {
  const [hotCompost, setHotCompost] = useState([]);
  
  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts/hot");
      setHotCompost(response.data.results);
      console.log(hotCompost);
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
        {hotCompost
              .map((result, id) => (
                <div key={id}>
                  <ComLists compost={result} editorIsTrue={false} />
                </div>
              ))}
        {/* <ComLists />
        <ComLists />
        <ComLists />
        <ComLists /> */}
        <p>페이지넘버링</p>
        <WriteBtn />
      </S.CoWrap>
    </Wrapper>
  );
};
