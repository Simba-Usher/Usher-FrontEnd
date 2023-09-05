// DetailNav.jsx

import React, { useEffect, useRef, useState } from 'react'
import * as S from "../style";
// import { styled } from 'styled-components';

const DETAIL_NAV = [
  { idx: 0, name: '관람객 반응' },
  { idx: 1, name: '공연 정보' },
  { idx: 2, name: '관람 후기' },
];

export const DetailNav = ({ scrollRef }) => {
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (navIndex !== null) {
      // 네비게이션을 클릭했을 때 스크롤 위치를 계산하여 설정
      const targetRef = scrollRef.current[navIndex];
      if (targetRef) {
        const offset = 46;
        const offsetTop = targetRef.offsetTop - offset;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
      setNavIndex(null);
    }
  }, [scrollRef, navIndex]);

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
  useEffect(() => {
    const offset = 46;

    const changeNavBtnStyle = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight;

      // 각 ref 요소의 위치를 계산하여 현재 활성화된 ref 인덱스를 찾습니다.
      let currentIdx = null;
      for (let idx = 0; idx < scrollRef.current.length; idx++) {
        const ref = scrollRef.current[idx];
        if (ref.offsetTop - offset <= scrollPosition) {
          currentIdx = idx;
        }
      }

      // 현재 활성화된 ref 인덱스를 기반으로 activeTab을 설정합니다.
      if (currentIdx !== null) {
        setActiveTab(currentIdx);
      }
    };
    
    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <>
      <S.DetailNavWrap>
        <S.InfoNav>
          {DETAIL_NAV.map(({ idx, name }) => (
            <S.NavSec
              key={idx}
              ref={ref => (navRef.current[idx] = ref)}
              onClick={() => {
                // handleTabClick(idx);
                setNavIndex(idx);
              }}
              className={activeTab === idx ? 'active' : ''}
            >
              {name}
            </S.NavSec>
          ))}
        </S.InfoNav>
      </S.DetailNavWrap>
    </>
  )
}