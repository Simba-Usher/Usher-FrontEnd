import React from 'react'
import * as S from "./style";
import { Link, useNavigate } from 'react-router-dom';

export const MyInnerNav = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.MyInnerNavWrap>
        <img
          src="/back.png"
          onClick={() => navigate("/my")} />
        <p>{title}</p>
        <Link to="/category">
          <img src="/threebar.png" />
        </Link>
      </S.MyInnerNavWrap>
    </>
  )
}