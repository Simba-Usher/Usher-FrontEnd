// MyLike.jsx

import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyToggle } from "../../../components/my/MyToggle";
import { NumBox } from "../../../components/my/NumBox";
import { ShowLike } from "../../../components/my/myLike/ShowLike";
// import { ComLike } from "../../../components/my/myLike/ComLike";
import { useNavigate } from "react-router-dom";
import { QnaLists } from "../../../components/community/communityMain/QnaLists";
import { NoticeLists } from "../../../components/community/communityMain/NoticeLists";
import { ComLists } from "../../../components/community/communityMain/ComLists";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";

export const MyLike = () => {
  const title = "좋아요";

  const [selectedButton, setSelectedButton] = useState('toggleA');

  const navigate = useNavigate();
  const handleCardClick = (showId) => {
    navigate(`/${showId}`);
  };

  // 공연 좋아요 리스트
  const [likedShow, setLikedShow] = useState([]);
  const accessToken = useRecoilValue(accessTokenState);
  // console.log(accessToken);

  const getLikedSHow = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/liked-mainposts", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLikedShow(response.data);
      // console.log(likedShow);
      // console.log(accessToken);
    } catch (error) {
      // console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getLikedSHow();
  }, [])

  // const data = [
  //   {
  //     id: 1,
  //     title: "뮤지컬 <레베카> 10주년 기념공연",
  //     place: "블루스퀘어 신한카드홀",
  //     startdate: "2023.8.19",
  //     enddate: "2023.11.19",
  //     star: 4.9,
  //     reviews: 40,
  //     comment: "완벽함을 넘어선 최고의 뮤지컬",
  //     img: "/poster_1.png",
  //   },
  //   {
  //     id: 2,
  //     title: "뮤지컬 <멤피스>",
  //     place: "충무아트센터 대극장",
  //     startdate: "2023.7.20",
  //     enddate: "2023.10.22",
  //     star: 4.8,
  //     reviews: 32,
  //     comment: "세상에 돌려줄거야! 내 영혼의 음악",
  //     img: "/poster_2.png",
  //   },
  //   {
  //     id: 3,
  //     title: "뮤지컬 <라흐헤스트>",
  //     place: "드림아트센터 1관",
  //     startdate: "2023.6.13",
  //     enddate: "2023.9.3",
  //     star: 4.8,
  //     reviews: 32,
  //     comment: "“찬란한 순간을 지나 예술이 되다”",
  //     img: "/poster_3.png",
  //   },
  //   {
  //     id: 4,
  //     title: "뮤지컬 <오페라의 유령> - 서울",
  //     place: "샤롯데씨어터",
  //     startdate: "2023.7.21",
  //     enddate: "2023.11.17",
  //     star: 4.7,
  //     reviews: 20,
  //     comment: "마침내- 13년 만의 한국어 공연",
  //     img: "/poster_4.png",
  //   },
  //   {
  //     id: 5,
  //     title: "뮤지컬 <곤 투모로우>",
  //     place: "광림아트센터 BBCH홀",
  //     startdate: "2023.8.10",
  //     enddate: "2023.10.22",
  //     star: 4.7,
  //     reviews: 27,
  //     comment: "세 발의 총성 사라진 내일, 갈 수 없는 나라",
  //     img: "/poster_5.png",
  //   },
  //   {
  //     id: 6,
  //     title: "뮤지컬 <와일드 그레이>",
  //     place: "대학로 아트윈씨어터 1관",
  //     startdate: "2023.6.8",
  //     enddate: "2023.9.3",
  //     star: 4.6,
  //     reviews: 48,
  //     comment: "예술과 현실 사이에서 자유를 꿈꾸는 세 사람",
  //     img: "/poster_6.png",
  //   },
  // ];

  return (
    <Wrapper>
      <MyInnerNav title={title} />
      <MyToggle title={title} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      <NumBox />

      {selectedButton === 'toggleA' ? (
        <>
          {likedShow.map((show) => (
            <ShowLike
              key={show.id}
              data={show}
              onClick={() => handleCardClick(show.id)}
            />
          ))}
        </>
      ) : (
        <>
          {/* 나중에 ComLike에 리스트로 받아와서 ... */}
          <QnaLists />
          <NoticeLists />
          <ComLists />
        </>
      )}

    </Wrapper>
  );
};
