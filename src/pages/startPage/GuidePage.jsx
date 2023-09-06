import React from "react";
import * as S from "./style";
import Wrapper from "../../components/Wrapper";
import { ImgContainer, SuccessImg } from "../login/style";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export const GuidePage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <S.LogoImgWrapper>
        <img src="/usher_logo.png" alt="log" />
      </S.LogoImgWrapper>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: false }}
      >
        <SwiperSlide>
          <ImgContainer>
            <SuccessImg src="/안내화면1.png" alt="loading" />
          </ImgContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImgContainer>
            <SuccessImg src="/안내화면2.png" alt="loading" />
          </ImgContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImgContainer>
            <SuccessImg src="/안내화면3.png" alt="loading" />
          </ImgContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImgContainer>
            <SuccessImg src="/안내화면4.png" alt="loading" />
          </ImgContainer>
          <S.GoLogin onClick={() => navigate("/login")}></S.GoLogin>
          <S.GoMain  onClick={() => navigate("/")}></S.GoMain>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
