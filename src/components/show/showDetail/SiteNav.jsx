import React from 'react'
import * as S from "../../my/style";
import { Link, useNavigate } from 'react-router-dom';

export const SiteNav = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.MyInnerNavWrap>
        <img
          src="/back.png"
          onClick={() => navigate(`/1`)}
        />
        <p>{title}</p>
        <Link to="/category">
          <img src="/threebar.png" />
        </Link>
      </S.MyInnerNavWrap>
    </>
  )
}