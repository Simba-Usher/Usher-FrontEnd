import React from "react";
import * as S from "./style";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Banner = () => {
  return (
    <S.BannerContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <S.BannerImg src="/banner.png" alt="배너1" />
        </SwiperSlide>
        <SwiperSlide>
          <S.BannerImg src="/banner.png" alt="배너2" />
        </SwiperSlide>
        <SwiperSlide>
          <S.BannerImg src="/banner.png" alt="배너3" />
        </SwiperSlide>
      </Swiper>
    </S.BannerContainer>
  );
};
