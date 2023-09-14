import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyToggle } from "../../../components/my/MyToggle";
import { NumBox } from "../../../components/my/NumBox";
// import { ComWrite } from "../../../components/my/myWrite/ComWrite";/
import { QnaLists } from "../../../components/community/communityMain/QnaLists";
// import { NoticeLists } from "../../../components/community/communityMain/NoticeLists";
import { ComLists } from "../../../components/community/communityMain/ComLists";
import { ShowReviewCard } from "../../../components/show/showReview/ShowReviewCard";
import { useNavigate } from "react-router-dom";
import { ShowWrite } from "../../../components/my/myWrite/ShowWrite";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import { Login } from "../../login/Login";
import { ComLikes } from "../like/ComLikes";
import { QnaLikes } from "../like/QnaLikes";

export const MyWrite = () => {
  const title = "나의 글";

  const accessToken = useRecoilValue(accessTokenState);
  const [selectedButton, setSelectedButton] = useState('toggleA');

  const [likedCom, setLikedCom] = useState([]);
  // const dataLength = data.length;
  const comLength = likedCom.length;

  const navigate = useNavigate();
  const handleCardClick = (review) => {
    navigate(`/${review}`);
  };

  const data = [
    {
      id: 1,
      writer: "뮤라이프",
      price: 152000,
      where: "인터파크 티켓",
      star: 5,
      date: "2023.8.10",
      time: "19:30",
      content:
        "삼천년동안 얼어있던 내 심장이 뛰기 시작하고,,조승우행님 오페라의 유령을 본 이후로 심봉사마냥 두 눈 번쩍 떴습니다... 최고의 뮤지컬,, 두번 볼 의향 충분합니다 좌석은 말할 것도 없이 갓샤롯데.. 시야 완전 잘보여요!!",
      likes: 6,
      comments: 2,
      cocomments:[
        {
          id: 1,
          writer: "익명의코끼리",
          content: "아멘... 이 댓읽고 카드 긁었습니다^-^",
          date: "2023.8.11",
        },
        {
          id: 2,
          writer: "뮤라이프",
          content: "최고의 선택. 후회 없으실겁니다",
          date: "2023.8.11",
        }
      ]
      },
    {
      id: 2,
      writer: "뮤라이프2",
      price: 152000,
      where: "인터파크 티켓2",
      star: 5,
      date: "2023.8.10",
      time: "19:30",
      content:
        "삼천년동안 얼어있던 내 심장이 뛰기 시작하고,,조승우행님 오페라의 유령을 본 이후로 심봉사마냥 두 눈 번쩍 떴습니다... 최고의 뮤지컬,, 두번 볼 의향 충분합니다 좌석은 말할 것도 없이 갓샤롯데.. 시야 완전 잘보여요!!",
      likes: 6,
      comments: 2,
      cocomments:[
        {
          id: 1,
          writer: "익명의코끼리2",
          content: "아멘... 이 댓읽고 카드 긁었습니다^-^",
          date: "2023.8.11",
        },
        {
          id: 2,
          writer: "뮤라이프2",
          content: "최고의 선택. 후회 없으실겁니다",
          date: "2023.8.11",
        }
      ]
      },
  ];
  const dataLength = data.length;

  if (accessToken) {
    return (
      <Wrapper>
        <MyInnerNav title={title} />
        {/* {accessToken ? <></> : <p onClick={() => navigate("/login")} style={{color: "#6B2ED0", fontSize: "18px", textAlign: "center", backgroundColor: "#EFE9FF", padding: "5px 0", textDecoration: "underline"}}>로그인 후 이용가능한 서비스입니다 🧐</p>} */}
        <MyToggle title={title} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
        <NumBox data={selectedButton === 'toggleA' ? dataLength : comLength}/>
        {/* {selectedButton === 'toggleA' ? <ShowReview /> : <ComWrite />} */}
        {selectedButton === 'toggleA' ? (
          <>
            {/* {data.map((show) => (
              <ShowReview
                key={show.id}
                data={show}
                onClick={() => handleCardClick(show.id)}
              />
            ))} */}
            {data.map((review) => (
              <ShowWrite
                key={review.id}
                review={review}
                onClick={() => handleCardClick(review.id)}
              />
            ))}
          </>
        ) : (
          <>
            {/* 나중에 ComWrite에 리스트로 받아와서 ... */}
            {likedCom.map((com, id) => (
              <div key={id}>
                {com.category === "자유" ? (
                  <ComLikes
                    // key={com.id}
                    data={com}
                    editorIsTrue={false}
                    onClick={() => handleCardClick(com.id)}
                  />
                ) : com.category === "질문" ? (
                  <QnaLikes
                    // key={com.id}
                    data={com}
                    editorIsTrue={false}
                    onClick={() => handleCardClick(com.id)}
                  />
                ) : (
                  <ComLikes
                    // key={com.id}
                    data={com}
                    editorIsTrue={true}
                    onClick={() => handleCardClick(com.id)}
                  />
                )}
              </div>
            ))}
            {/* <ComLists />
            <QnaLists />
            <ComLists /> */}
          </>
        )}
      </Wrapper>
    );
  } else {
    return (
      <>
        <Login />
      </>
    )
  }
};
