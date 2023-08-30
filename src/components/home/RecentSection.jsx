import React from 'react'
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const RecentSection=()=> {
  return (
    <S.HomeArticle>
      <p>최근 본 공연</p>
      <div>
        <Swiper slidesPerView={4.5} spaceBetween={10}>
          <SwiperSlide>
            <img src="/recent_1.png" alt="포스터" />
            <S.ClosePoster>X</S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster>X</S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster>X</S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/recent_1.png" alt="포스터" />
            <S.ClosePoster>X</S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/recent_1.png" alt="포스터" />
            <S.ClosePoster>X</S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster>X</S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster>X</S.ClosePoster>
          </SwiperSlide>
        </Swiper>
      </div>
    </S.HomeArticle>
  );
}
