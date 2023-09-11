// LogOut.jsx

import React from 'react'
import * as S from "./style";
import axiosInstance from '../../../api/axios';

export const LogOut = () => {

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post(
        "/api/dj-rest-auth/logout/",{},);
      console.log(response.data);
    } catch (error) {
      console.error("로그아웃 오류 발생:", error);
      throw error;
    }
  };

  return (
    <>
      <S.LogOutWrap onClick={handleLogout}>
        <img src="/logout.png" alt="logout" />
        <p>로그아웃</p>
      </S.LogOutWrap>
    </>
  );
}