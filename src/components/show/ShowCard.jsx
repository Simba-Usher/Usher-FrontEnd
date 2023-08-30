import React from 'react'
import * as S from "./style";

export const ShowCard = ({ data, onClick }) => {
  return (
    <S.ShowCardWrapper onClick={onClick}>
      <img src={data.img} alt="poster" />
      <div>
        <S.ShowCardTitle>{data.title}</S.ShowCardTitle>
        <S.ShowCardPlace>{data.place}</S.ShowCardPlace>
        <S.ShowCardDate>
          {data.startdate} ~ {data.enddate}
        </S.ShowCardDate>
        <S.ShowCardReactin>
          <S.ShowCardStar>
            <i className="fas fa-star" />
            {data.star}
          </S.ShowCardStar>
          <S.ShowCardReviews>관람 인증 {data.reviews}</S.ShowCardReviews>
        </S.ShowCardReactin>
        <S.ShowCardComment>"{data.comment}"</S.ShowCardComment>
      </div>
    </S.ShowCardWrapper>
  );
};
