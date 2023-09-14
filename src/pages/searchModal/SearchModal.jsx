import React, { useEffect, useState } from "react";
import * as S from "./style";
import { SearchGenre } from "../../components/searchmodal/SearchGenre";
import { SearchAraa } from "../../components/searchmodal/SearchAraa";
import { SearchPrice } from "../../components/searchmodal/SearchPrice";
import { SearchDate } from "../../components/searchmodal/SearchDate";
import { SearchReaction } from "../../components/searchmodal/SearchReaction";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

export const SearchModal = ({ isModalOpen, toggleModal }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [area, setarea] = useState("서울");
  const [genre, setgenre] = useState("뮤지컬");
  const [rangeMinValue, setRangeMinValue] = useState(0);
  const [rangeMaxValue, setRangeMaxValue] = useState(300000);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = () => {
    toggleModal();
    navigate(`/mainposts/:${genre}/:${area}/:price_range/:date_range`);
    console.log(`/mainposts/:${genre}/:${area}/:price_range/:date_range`);
  };

  return (
    <Wrapper>
      <S.SearchModalWrapper isopen={isModalOpen ? "true" : "false"}>
        <S.TopTxt>세부 키워드 설정</S.TopTxt>
        <S.CloseBtn className="material-symbols-outlined" onClick={toggleModal}>
          close
        </S.CloseBtn>
        <S.KeywordSearchBar>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색어를 입력해주세요."
          />
          <span className="material-symbols-outlined">search</span>
        </S.KeywordSearchBar>
        <SearchGenre genre={genre} setgenre={setgenre} />
        <SearchAraa area={area} setarea={setarea} />
        <SearchPrice
          rangeMinValue={rangeMinValue}
          setRangeMinValue={setRangeMinValue}
          rangeMaxValue={rangeMaxValue}
          setRangeMaxValue={setRangeMaxValue}
        />
        <SearchDate setStartDate={setStartDate} setEndDate={setEndDate} />
        <SearchReaction />
      </S.SearchModalWrapper>
      <S.BtnLabel>
        <S.PurpleBottomBtn onClick={handleSubmit}>
          키워드 검색
        </S.PurpleBottomBtn>
      </S.BtnLabel>
    </Wrapper>
  );
};
