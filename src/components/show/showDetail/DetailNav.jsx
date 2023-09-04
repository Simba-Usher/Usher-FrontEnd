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
        const offset = 45;
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
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - offset < window.scrollY) {
          navRef.current.forEach(ref => {
            ref.className = ref.className.replace(' active', '');
          });

          navRef.current[idx].className += ' active';
        }
      });
    };

    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);


  // 마지막 ref (빈 요소임)
  // const LastEmptyRef = styled.div`
  //   height: 100px;
  //   display: none;
  // `

  return (
    <>
      <S.DetailNavWrap>
        <S.InfoNav>
          {/* <S.NavSec
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
          </S.NavSec> */}
          {DETAIL_NAV.map(({ idx, name }) => (
            <S.NavSec
              key={idx}
              ref={ref => (navRef.current[idx] = ref)}
              onClick={() => {
                setNavIndex(idx);
                handleTabClick(idx);
              }}
            >
              {name}
            </S.NavSec>
          ))}
        </S.InfoNav>
      </S.DetailNavWrap>
    </>
  )
}