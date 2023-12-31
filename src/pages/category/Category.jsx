import React, { useState } from "react";
import * as S from "./style";
import { CategoryNav } from "../../components/category/CategoryNav";
import { SearchModal } from "../searchModal/SearchModal";
import { Link } from "react-router-dom";
import { Footer } from "../../components/layouts/footer/Footer";
import Wrapper from "../../components/Wrapper";
import { CateHome } from "../../components/category/CateHome";
import { CateCommunity } from "../../components/category/CateCommunity";
import { CateMy } from "../../components/category/CateMy";

export const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const menu = [
    [
      {
        name: "실시간 인기글",
        link: "/community",
      },
      {
        name: "자유 게시판",
        link: "/community/free",
      },
      {
        name: "에디터 게시판",
        link: "/community/editor",
      },
      {
        name: "질문 게시판",
        link: "/community/qna",
      },
      {
        name: "커뮤니티 공지",
        link: "/community/notice",
      },
    ],
    [
      {
        name: "메인",
        link: "/my",
      },
      {
        name: "공연 · 글 좋아요",
        link: "/my/like",
      },
      {
        name: "공연 달력",
        link: "/my/showcalendar",
      },
      {
        name: "나의 글 · 후기 관리",
        link: "/my/write",
      },
      {
        name: "티켓 등록",
        link: "/my/ticket",
      },
      {
        name: "기본 정보 수정",
        link: "/my/setting",
      },
    ],
  ];

  return (
    <Wrapper>
      {isModalOpen ? (
        <SearchModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      ) : (
        <S.CateWrapper>
          <CategoryNav toggleModal={toggleModal} />
          <S.CateTitle>카테고리</S.CateTitle>
          <CateHome />
          <CateCommunity />
          {menu[0].map((comenu) => (
            <Link to={comenu.link}>
              <S.CateSubMenu>{comenu.name}</S.CateSubMenu>
            </Link>
          ))}
          <CateMy />
          {menu[1].map((mymenu) => (
            <Link to={mymenu.link}>
              <S.CateSubMenu>{mymenu.name}</S.CateSubMenu>
            </Link>
          ))}
        </S.CateWrapper>
      )}
      <Footer />
    </Wrapper>
  );
};
