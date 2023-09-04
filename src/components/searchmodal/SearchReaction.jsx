import React, { useState } from "react";
import * as S from "../home/style";

export const SearchReaction = () => {
  const [clicked, setClicked] = useState([]);
  const handleClick = (value) => {
    if (clicked && clicked.includes(value)) {
      setClicked(clicked.filter((item) => item !== value));
    } else setClicked([...clicked, value]);

    // console.log(value, clicked);
  };
  const check = (value) => {
    if (clicked && clicked.includes(value)) {
      return "true";
    } else return "false";
  };

  return (
    <>
      <S.HomeArticle>
        <p>관람객 반응별</p>
        <S.ReacionArticle>
          <S.PurpleBtn onClick={() => handleClick(1)} isclicked={check(1)}>
          {/* <div onClick={() => handleClick(1)} isclicked={check(1)}> */}
            <span className="material-symbols-outlined">thumb_up</span>
            스토리가 흥미로워요
          </S.PurpleBtn>
          <S.BlueReBtn
            onClick={() => handleClick(2)}
            isclicked={check(2)}
          >
            <span className="material-symbols-outlined">thumb_up</span>시야
            단차가 좋아요
          </S.BlueReBtn>
          <S.GreenReBtn
            onClick={() => handleClick(3)}
            isclicked={check(3)}
          >
            <span className="material-symbols-outlined">thumb_up</span>장애인
            전용 시설
          </S.GreenReBtn>
          <S.PurpleBtn
            onClick={() => handleClick(4)}
            isclicked={check(4)}
          >
            <span className="material-symbols-outlined">thumb_up</span>연출이
            훌륭해요
          </S.PurpleBtn>
          <S.BlueReBtn
            onClick={() => handleClick(5)}
            isclicked={check(5)}
          >
            <span className="material-symbols-outlined">thumb_up</span>극장 안이
            깨끗해요
          </S.BlueReBtn>
          <S.GreenReBtn
            onClick={() => handleClick(6)}
            isclicked={check(6)}
          >
            <span className="material-symbols-outlined">thumb_up</span>
            유아용·수유 시설
          </S.GreenReBtn>
          <S.PurpleBtn
            onClick={() => handleClick(7)}
            isclicked={check(7)}
          >
            <span className="material-symbols-outlined">thumb_up</span>
            무대·소품 화려해요
          </S.PurpleBtn>
          <S.BlueReBtn
            onClick={() => handleClick(8)}
            isclicked={check(8)}
          >
            <span className="material-symbols-outlined">thumb_up</span>음향이 잘
            들려요
          </S.BlueReBtn>
          <S.GreenReBtn
            onClick={() => handleClick(9)}
            isclicked={check(9)}
          >
            <span className="material-symbols-outlined">thumb_up</span>주차 공간
            여유
          </S.GreenReBtn>
          <S.PurpleBtn
            onClick={() => handleClick(10)}
            isclicked={check(10)}
          >
            <span className="material-symbols-outlined">thumb_up</span>
            노래·넘버가 좋아요
          </S.PurpleBtn>
          <S.BlueReBtn
            onClick={() => handleClick(11)}
            isclicked={check(11)}
          >
            <span className="material-symbols-outlined">thumb_up</span>편의
            시설이 많아요
          </S.BlueReBtn>
          <S.GreenReBtn
            onClick={() => handleClick(12)}
            isclicked={check(12)}
          >
            <span className="material-symbols-outlined">thumb_up</span>
            대중교통 이용 편리
          </S.GreenReBtn>
        </S.ReacionArticle>
      </S.HomeArticle>
      <S.HomeLine />
    </>
  );
};
