// ReviewSection.jsx

import React, { forwardRef } from 'react'
import * as S from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export const ReviewSection = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <div ref={reviewRef => (ref.current[2] = reviewRef)}>
      <S.ReviewSecWrap>
        <S.ReviewSec1>
          <S.TapTitle>관람 후기</S.TapTitle>
          {/* 페이지 연결하기 */}
          <S.ViewMore onClick={()=>navigate(`/${1}/review`)}>관람 후기 더보기</S.ViewMore>
        </S.ReviewSec1>
        <S.ReviewSec2>
          <p>평점</p>
          <S.Star>
            <FontAwesomeIcon icon={faStar} />
            {/* 평점 불러오기 */}
            4.7
          </S.Star>
        </S.ReviewSec2>
        {/* 리뷰 불러오기 */}
        <S.ReviewSec3>
          <S.Reviews onClick={()=>navigate(`/${1}/review`)}>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews onClick={()=>navigate(`/${1}/review`)}>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews onClick={()=>navigate(`/${1}/review`)}>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews onClick={()=>navigate(`/${1}/review`)}>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews onClick={()=>navigate(`/${1}/review`)}>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
        </S.ReviewSec3>
      </S.ReviewSecWrap>
    </div>
  )
});