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
  const [freeCompost, setFreeCompost] = useState([
  //   {
  //     "id": 1,
  //     "title": "커뮤니티 글 테스트",
  //     "content": "테스트`~~~",
  //     "created_at": "2023-09-08T04:29:59.921912Z",
  //     "updated_at": "2023-09-08T04:29:59.921912Z",
  //     "comcomments_cnt": 0,
  //     "like_cnt": 0,
  //     "image": null,
  //     "writer": "민경3",
  //     "category": "자유",
  //     "views": 0
  // },
  ]);

  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=자유");
      setFreeCompost(response.data.results);
      console.log(freeCompost);
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
        {freeCompost.map((result, id) => (
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
