import React, { useState } from "react";
import * as S from "./style";
import { SearchGenre } from "../../components/searchmodal/SearchGenre";
import { SearchAraa } from "../../components/searchmodal/SearchAraa";
import { SearchPrice } from "../../components/searchmodal/SearchPrice";
import { SearchDate } from "../../components/searchmodal/SearchDate";
import SearchReaction from "../../components/searchmodal/SearchReaction";

export const SearchModal = () => {
  const [search, setSearch] = useState();

  return (
    <S.TopWrapper>
      <S.SearchModalWrapper>
        <S.TopTxt>세부 키워드 설정</S.TopTxt>
        <S.CloseBtn className="material-symbols-outlined">close</S.CloseBtn>
        <S.KeywordSearchBar>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색어를 입력해주세요."
          />
          <span className="material-symbols-outlined">search</span>
        </S.KeywordSearchBar>
        <SearchGenre />
        <SearchAraa />
        <SearchPrice />
        <SearchDate />
        <SearchReaction />
      </S.SearchModalWrapper>
      <S.PurpleBottomBtn>키워드 검색</S.PurpleBottomBtn>
    </S.TopWrapper>
  );
};
