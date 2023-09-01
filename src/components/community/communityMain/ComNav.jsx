import React, { useState } from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';
import { Array } from './Array';

export const ComNav = () => {
  const navigate = useNavigate();
  const isCommunityHot = location.pathname === "/community";
  const isCommunityFree = location.pathname === "/community/free";
  const isCommunityEditor = location.pathname === "/community/editor";
  const isCommunityQna = location.pathname === "/community/qna";

  const [modalOpen, setModalOpen] = useState(false);

  // 모달 열기 함수
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <S.ComNavWrap>
        <S.ComNavSec
          onClick={() => navigate("/community")}
          className={isCommunityHot ? "active" : ""}
        >
          실시간 인기글
        </S.ComNavSec>
        <div>|</div>
        <S.ComNavSec
          onClick={() => navigate("/community/free")}
          className={isCommunityFree ? "active" : ""}
        >
          자유
        </S.ComNavSec>
        <div>|</div>
        <S.ComNavSec
          onClick={() => navigate("/community/editor")}
          className={isCommunityEditor ? "active" : ""}
        >
          에디터 픽
        </S.ComNavSec>
        <div>|</div>
        <S.ComNavSec
          onClick={() => navigate("/community/qna")}
          className={isCommunityQna ? "active" : ""}
        >
          질문
        </S.ComNavSec>
        <img
          src="/threedot.png"
          alt="dot"
          onClick={openModal}
          style={{
            padding: "10px"
          }}
        />
        {modalOpen && (
          <Array
            setModalOpen={setModalOpen}
            closeModal={closeModal} />
        )}
      </S.ComNavWrap>
    </>
  )
}