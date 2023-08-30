import React from "react";
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export const RecentSection = () => {
  const navigate = useNavigate();

  return (
    <S.HomeArticle>
      <p>최근 본 공연</p>
      <div>
        <Swiper slidesPerView={4.5} spaceBetween={10}>
          <SwiperSlide onClick={() => navigate("/1")}>
            <img src="/recent_1.png" alt="포스터" />
            <S.ClosePoster className="material-symbols-outlined">
              close
            </S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/1")}>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster className="material-symbols-outlined">
              close
            </S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/1")}>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster className="material-symbols-outlined">
              close
            </S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/1")}>
            <img src="/recent_1.png" alt="포스터" />
            <S.ClosePoster className="material-symbols-outlined">
              close
            </S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/1")}>
            <img src="/recent_1.png" alt="포스터" />
            <S.ClosePoster className="material-symbols-outlined">
              close
            </S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/1")}>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster className="material-symbols-outlined">
              close
            </S.ClosePoster>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/1")}>
            <img src="/recent_2.png" alt="포스터" />
            <S.ClosePoster className="material-symbols-outlined">
              close
            </S.ClosePoster>
          </SwiperSlide>
        </Swiper>
      </div>
    </S.HomeArticle>
  );
};
