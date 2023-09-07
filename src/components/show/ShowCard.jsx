import React from 'react'
import * as S from "./style";

export const ShowCard = ({ data, onClick }) => {
  return (
    <S.ShowCardWrapper onClick={onClick}>
      <img src={data.image} alt="poster" />
      <div>
        <S.ShowCardTitle>{data.title}</S.ShowCardTitle>
        <S.ShowCardPlace>{data.place}</S.ShowCardPlace>
        <S.ShowCardDate>
          {data.start_date} ~ {data.end_date}
        </S.ShowCardDate>
        <S.ShowCardReactin>
          <S.ShowCardStar>
            <i className="fas fa-star" />
            4.9
            {/* {data.average_rating} */}
          </S.ShowCardStar>
          <S.ShowCardReviews>
            관람 인증 {data.mainreviews_cnt}
          </S.ShowCardReviews>
        </S.ShowCardReactin>
        <S.ShowCardComment>"{data.sentence}"</S.ShowCardComment>
      </div>
    </S.ShowCardWrapper>
  );
};
