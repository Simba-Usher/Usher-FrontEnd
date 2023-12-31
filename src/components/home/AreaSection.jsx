import React from "react";
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export const AreaSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HomeArticle_nomargin>
        <p>지역별</p>
        <S.AreaArticle>
          <Swiper slidesPerView={3.5} spaceBetween={20}>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:서울/:price_range/:date_range")
                }
              >
                <img src="/Seoul.png" alt="img" />
                <p>서울</p>
              </S.AreaImg>
              <S.FakeMargin>&nbsp;</S.FakeMargin>
            </SwiperSlide>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:경기/:price_range/:date_range")
                }
              >
                <img src="/Gyeonggi.png" alt="img" />
                <p>경기</p>
              </S.AreaImg>
            </SwiperSlide>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:인천/:price_range/:date_range")
                }
              >
                <img src="/Incheon.png" alt="img" />
                <p>인천</p>
              </S.AreaImg>
            </SwiperSlide>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:강원/:price_range/:date_range")
                }
              >
                <img src="/Gangwon.png" alt="img" />
                <p>강원</p>
              </S.AreaImg>
            </SwiperSlide>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:충청/:price_range/:date_range")
                }
              >
                <img src="/Chungcheong.png" alt="img" />
                <p>충청</p>
              </S.AreaImg>
            </SwiperSlide>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:경상/:price_range/:date_range")
                }
              >
                <img src="/Gyeongsang.png" alt="img" />
                <p>경상</p>
              </S.AreaImg>
            </SwiperSlide>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:전라/:price_range/:date_range")
                }
              >
                <img src="/Jeolla.png" alt="img" />
                <p>전라</p>
              </S.AreaImg>
            </SwiperSlide>
            <SwiperSlide>
              <S.AreaImg
                onClick={() =>
                  navigate("/mainposts/:genre/:제주/:price_range/:date_range")
                }
              >
                <img src="/Jeju.png" alt="img" />
                <p>제주</p>
              </S.AreaImg>
            </SwiperSlide>
          </Swiper>
        </S.AreaArticle>
      </S.HomeArticle_nomargin>
      <S.HomeLine />
    </>
  );
};
