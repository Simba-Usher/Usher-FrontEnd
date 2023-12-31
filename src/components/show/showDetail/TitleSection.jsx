import React, { useState } from "react";
import * as S from "../style";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import { useLocation, useParams } from "react-router-dom";

export const TitleSection = ({data}) => {
  const {pathname} = useLocation();
  const [like, setLike] = useState(false);
  const accessToken = useRecoilValue(accessTokenState);

  const handleLike = async () => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };

      const response = await axiosInstance.post(
        `/api/mainposts/${pathname.slice(1)}/likes`,
        {},
        { headers }
      );
      console.log(response.data);
      const detail = response.data.detail;
      detail == "좋아요 취소" ? setLike(false) : setLike(true);
    } catch (error) {
      console.error("좋아요 오류 발생:", error);
      throw error;
    }
  };

  return (
    <>
      <S.TitleSecWrap>
        <S.TitleSec1>
          {/* 장르 불러오기 */}
          <S.GenreBox>{data.genre}</S.GenreBox>
          {/* <S.GenreBox>뮤지컬</S.GenreBox> */}
          {/* 지역 불러오기 */}
          <S.AreaBox>{data.location}</S.AreaBox>
          {/* <S.AreaBox>서울</S.AreaBox> */}
          <S.EtcBox>
            <S.EtcBtns src="/share.png" alt="shareBtn" />
            <S.EtcBtns
              onClick={handleLike}
              src={like ? "/fillheart.png" : "/heart.png"}
              alt="heartBtn"
            />
          </S.EtcBox>
        </S.TitleSec1>
        {/* 제목 불러오기 */}
        <S.TitleSec2>{data.title}</S.TitleSec2>
        {/* <S.TitleSec2>뮤지컬 [레베카] 10주년 기념공연</S.TitleSec2> */}
        <S.TitleSec3>
          {/* 관람시간 불러오기 */}
          <p>150분 (인터미션 20분 포함)</p>
          {/* 나이제한 불러오기 */}
          <p style={{ marginLeft: "5px" }}>7세 이상</p>
          {/* 수상여부 불러오기 -> 유무에 따라 보이거나 안보이게 해야함 */}
          <S.TrophyTag src="/trophy.png" alt="trophy" />
        </S.TitleSec3>
        <S.TitleSec4>
          {/* 공연장명 불러오기 */}
          <p>{data.location}. {data.place}</p>
          {/* 공연기간 불러오기 */}
          <p>{data.start_date} ~ {data.end_date}</p>
          {/* <p style={{ color: "#002843" }}>2023.7.21 ~ 2023.11.17</p> */}
        </S.TitleSec4>
      </S.TitleSecWrap>
    </>
  );
};
