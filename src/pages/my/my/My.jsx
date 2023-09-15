import React, { useEffect, useState } from "react";
import { Nav } from "../../../components/layouts/nav/Nav";
import { HomeNav } from "../../../components/layouts/homeNav/HomeNav";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import { useNavigate } from "react-router-dom";
import { MyProfile } from "../../../components/my/myMain/MyProfile";
import { MyTicket } from "../../../components/my/myMain/MyTicket";
import { UseUsher } from "../../../components/my/myMain/UseUsher";
import { AskUsher } from "../../../components/my/myMain/AskUsher";
import { LogOut } from "../../../components/my/myMain/LogOut";
import { Delete } from "../../../components/my/myMain/Delete";
import { Footer } from "../../../components/layouts/footer/Footer";
import axiosInstance from "../../../api/axios";
import { Login } from '../../login/Login';

export const My = () => {
  const navigate = useNavigate();
  const [myTicket, setMyTicket] = useState([]);
  const accessToken = useRecoilValue(accessTokenState);

  const fetchMyTicketData = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/ticket", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setMyTicket(response.data);
      console.log(myTicket);
    } catch (error) {
      console.log("티켓 불러오는 중 오류 발생", error);
    }
  };
  useEffect(() => {
    fetchMyTicketData();
  }, []);

  // Access Token이 있는지 확인
  // if (accessToken) {
    return (
      <Wrapper>
        <Nav />
        <HomeNav />
        {accessToken ? <MyProfile yourname={true} /> : <MyProfile yourname={false} />}
        <MyTicket ticket={myTicket} />
        <UseUsher />
        <AskUsher />
        <LogOut />
        <Delete />
        <Footer />
      </Wrapper>
    );
};
