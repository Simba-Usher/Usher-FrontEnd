// DetailNav.jsx

import React, { useState } from 'react'
import * as S from "../style";

export const DetailNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <S.DetailNavWrap>
        <S.InfoNav>
          <S.NavSec
            onClick={() => handleTabClick(0)}
            style={{
              backgroundColor: activeTab === 0 ? '#0B619C' : 'transparent',
              color: activeTab === 0 ? '#FFF' : '#BABABA',
            }}
          >
            관람객 반응
          </S.NavSec>
          <S.NavSec
            onClick={() => handleTabClick(1)}
            style={{
              backgroundColor: activeTab === 1 ? '#0B619C' : 'transparent',
              color: activeTab === 1 ? '#FFF' : '#BABABA',
            }}
          >
            공연 정보
          </S.NavSec>
          <S.NavSec
            onClick={() => handleTabClick(2)}
            style={{
              backgroundColor: activeTab === 2 ? '#0B619C' : 'transparent',
              color: activeTab === 2 ? '#FFF' : '#BABABA',
            }}
          >
            관람 후기
          </S.NavSec>
        </S.InfoNav>
      </S.DetailNavWrap>
    </>
  )
}