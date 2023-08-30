import React from "react";
import * as S from "./style";
import { Nav } from "../../../components/layouts/nav/Nav";
import { SelectedList } from "../../../components/show/SelectedList";
import { ShowCard } from "../../../components/show/ShowCard";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/layouts/footer/Footer";

export const ShowList = () => {
  const navigate = useNavigate();
  const handleCardClick = (showId) => {
    navigate(`/${showId}`);
  };

  const data = [
    {
      id: 1,
      title: "뮤지컬 <레베카> 10주년 기념공연",
      place: "블루스퀘어 신한카드홀",
      startdate: "2023.8.19",
      enddate: "2023.11.19",
      star: 4.9,
      reviews: 40,
      comment: "완벽함을 넘어선 최고의 뮤지컬",
      img: "/poster_1.png",
    },
    {
      id: 2,
      title: "뮤지컬 <멤피스>",
      place: "충무아트센터 대극장",
      startdate: "2023.7.20",
      enddate: "2023.10.22",
      star: 4.8,
      reviews: 32,
      comment: "세상에 돌려줄거야! 내 영혼의 음악",
      img: "/poster_2.png",
    },
    {
      id: 3,
      title: "뮤지컬 <라흐헤스트>",
      place: "드림아트센터 1관",
      startdate: "2023.6.13",
      enddate: "2023.9.3",
      star: 4.8,
      reviews: 32,
      comment: "“찬란한 순간을 지나 예술이 되다”",
      img: "/poster_3.png",
    },
    {
      id: 4,
      title: "뮤지컬 <오페라의 유령> - 서울",
      place: "샤롯데씨어터",
      startdate: "2023.7.21",
      enddate: "2023.11.17",
      star: 4.7,
      reviews: 20,
      comment: "마침내- 13년 만의 한국어 공연",
      img: "/poster_4.png",
    },
    {
      id: 5,
      title: "뮤지컬 <곤 투모로우>",
      place: "광림아트센터 BBCH홀",
      startdate: "2023.8.10",
      enddate: "2023.10.22",
      star: 4.7,
      reviews: 27,
      comment: "세 발의 총성 사라진 내일, 갈 수 없는 나라",
      img: "/poster_5.png",
    },
    {
      id: 6,
      title: "뮤지컬 <와일드 그레이>",
      place: "대학로 아트윈씨어터 1관",
      startdate: "2023.6.8",
      enddate: "2023.9.3",
      star: 4.6,
      reviews: 48,
      comment: "예술과 현실 사이에서 자유를 꿈꾸는 세 사람",
      img: "/poster_6.png",
    },
  ];

  return (
    <>
      <Nav />
      <S.ShowListTitle>
        <span className="material-symbols-outlined">arrow_back</span>
        <p>뮤지컬</p>
        <S.FloatRight>키워드 재설정</S.FloatRight>
      </S.ShowListTitle>
      <SelectedList />
      <S.SpaceBetween>
        <p>키워드 적용된 공연입니다</p>
        <p>
          별점 높은순
          <span className="material-symbols-outlined">more_vert</span>
        </p>
      </S.SpaceBetween>
      {data.map((show) => (
        <ShowCard
          key={show.id}
          data={show}
          // onClick={onClick}
          onClick={() => handleCardClick(show.id)}
        />
      ))}
      <Footer />
    </>
  );
};
