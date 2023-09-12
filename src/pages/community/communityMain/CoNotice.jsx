import React, { useEffect, useState } from 'react'
import * as S from "./style";
import { Nav } from '../../../components/layouts/nav/Nav';
import { HomeNav } from '../../../components/layouts/homeNav/HomeNav';
import { NoticeSec } from '../../../components/community/communityMain/NoticeSec';
import { ComNav } from '../../../components/community/communityMain/ComNav';
import { WriteBtn } from '../../../components/community/communityMain/WriteBtn';
import { NoticeLists } from '../../../components/community/communityMain/NoticeLists';
import { NoticeTitle } from '../../../components/community/communityMain/NoticeTitle';
import Wrapper from "../../../components/Wrapper";
import axiosInstance from "../../../api/axios";

export const CoNotice = () => {
  const [noticeCompost, setNoticeCompost] = useState([]);

  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/composts?category=공지");
      setNoticeCompost(response.data.results);
      console.log(noticeCompost);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    fetchAllData();
  }, [])

  return (
    <Wrapper>
      <Nav
        onClick={handleSearch}
      />
      <HomeNav />
      <S.CoWrap>
        <NoticeSec />
        <ComNav />
        {noticeCompost.map((result, id) => (
          <div key={id}>
            <NoticeLists notice={result} />
          </div>
        ))}
        <p>페이지넘버링</p>
      </S.CoWrap>
    </Wrapper>
  )
}