// ComNav.jsx

import React, { useState } from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';
import { Array } from './Array';
import axiosInstance from "../../../api/axios";

export const ComNav = ({ activeArray, handleArraySecClick }) => {
  const navigate = useNavigate();
  const isCommunityHot = location.pathname === "/community";
  const isCommunityFree = location.pathname === "/community/free";
  const isCommunityEditor = location.pathname === "/community/editor";
  const isCommunityQna = location.pathname === "/community/qna";

  const [modalOpen, setModalOpen] = useState(false);
  // const [activeArray, setActiveArray] = useState("최신순");

  // 모달 열기
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  // // 선택한 ArraySec 저장
  // const handleArraySecClick = async (selected, apiUrl) => {
  //   const openModal = () => {
  //     setModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setModalOpen(false);
  //   };
  //   setActiveArray(selected);
  //   // 이제 apiUrl을 사용하여 데이터를 가져올 수 있습니다.
  //   console.log('Selected Array:', selected);
  //   console.log('API URL:', apiUrl);

  //   try {
  //     const response = await axiosInstance.get(apiUrl);
  //     setActiveArray(response.data);
  //     closeModal();
  //   } catch (error) {
  //     console.log("배열 정렬 url GET 시 오류 발생", error);
  //   }
  // };

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
          // <Array
          //   setModalOpen={setModalOpen}
          //   closeModal={closeModal} />
          <Array
            setModalOpen={setModalOpen}
            closeModal={closeModal}
            activeArray={activeArray}
            handleArraySecClick={handleArraySecClick}
          />
        )}

        {modalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: "11"
            }}
            onClick={closeModal}
          />
        )}

      </S.ComNavWrap>
    </>
  )
}