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
import { QnaLikes } from "./QnaLikes";
import { ComLikes } from "./ComLikes";
import { Login } from "../../login/Login";

export const MyLike = () => {
  const title = "좋아요";

  const [selectedButton, setSelectedButton] = useState('toggleA');

  const navigate = useNavigate();
  const handleCardClick = (detailId) => {
    navigate(`/${detailId}`);
  };

  const [likedShow, setLikedShow] = useState([]);
  const [likedCom, setLikedCom] = useState([]);
  const accessToken = useRecoilValue(accessTokenState);
  // console.log(accessToken);

  // 공연 좋아요 불러오기
  const getLikedShow = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/liked-mainposts", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLikedShow(response.data);
      console.log(likedShow);
      // console.log(accessToken);
    } catch (error) {
      // console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getLikedShow();
  }, [])


  // 커뮤니티 좋아요 불러오기
  const getLikedCom = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/liked-composts", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLikedCom(response.data);
      console.log(likedCom);
      // console.log(accessToken);
    } catch (error) {
      // console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getLikedCom();
  }, [])

  if (accessToken) {
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
            {/* <QnaLists />
            <NoticeLists />
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
