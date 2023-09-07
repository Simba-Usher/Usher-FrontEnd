import React, { useState } from "react";
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
  
  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=자유");
      setFreeCompost(response.data);
      console.log(freeCompost);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Wrapper>
      <Nav />
      <HomeNav />
      <S.CoWrap>
        <NoticeSec />
        <ComNav />
        {freeCompost
              .map((result, id) => (
                <div key={id}>
                  <ComLists compost={result} />
                </div>
              ))}
        {/* <ComLists  />
        <ComLists />
        <ComLists />
        <ComLists />
        <ComLists /> */}
        <p>페이지넘버링</p>
        <WriteBtn />
      </S.CoWrap>
    </Wrapper>
  );
};
