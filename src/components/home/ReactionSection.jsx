import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const ReactionSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HomeArticle>
        <p>관람객 반응별</p>
        <S.ReacionArticle>
          <S.PurpleBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>스토리가
            흥미로워요
          </S.PurpleBtn>
          <S.BlueReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>시야
            단차가 좋아요
          </S.BlueReBtn>
          <S.GreenReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>장애인
            전용 시설
          </S.GreenReBtn>
          <S.PurpleBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>연출이
            훌륭해요
          </S.PurpleBtn>
          <S.BlueReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>극장 안이
            깨끗해요
          </S.BlueReBtn>
          <S.GreenReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>
            유아용·수유 시설
          </S.GreenReBtn>
          <S.PurpleBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>무대·소품
            화려해요
          </S.PurpleBtn>
          <S.BlueReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>음향이 잘
            들려요
          </S.BlueReBtn>
          <S.GreenReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>주차 공간
            여유
          </S.GreenReBtn>
          <S.PurpleBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>
            노래·넘버가 좋아요
          </S.PurpleBtn>
          <S.BlueReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>편의
            시설이 많아요
          </S.BlueReBtn>
          <S.GreenReBtn onClick={() => navigate("showlist")}>
            <span className="material-symbols-outlined">thumb_up</span>대중교통
            이용 편리
          </S.GreenReBtn>
        </S.ReacionArticle>
      </S.HomeArticle>
      <S.HomeLine />
    </>
  );
};
