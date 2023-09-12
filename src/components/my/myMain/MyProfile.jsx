// MyProfile.jsx

import React, { useEffect, useState } from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const MyProfile = () => {
    // const fetchAllData = async () => {
    //     try {
    //         const response = await axiosInstance.get("/api/login/");
    //         const userData = response.data;

    //         // 사용자 정보에서 닉네임 추출
    //         const userNickname = userData.nickname;

    //         // 닉네임을 로컬 스토리지에 저장
    //         localStorage.setItem('nickname', userNickname);
    //     } catch (error) {
    //         console.log("ERROR", error);
    //     }
    // };


    // const [storedNickname, setStoredNickname] = useState(""); // 닉네임 상태 변수 초기화

    // // 컴포넌트가 마운트될 때 로컬 스토리지에서 데이터 읽기
    // useEffect(() => {
    //     const nickname = localStorage.getItem('nickname');
    //     if (nickname) {
    //         setStoredNickname(nickname);
    //     }
    // }, []);



    const Nickname = localStorage.getItem('nickname');
    console.log(Nickname);

    const navigate = useNavigate();
    return (
        <>
            <S.MyProfileWrap>
                <S.WhiteBox>
                    <S.Profile>
                        <S.Grade src="/grade1.png" alt="grade" />
                        {/* 닉네임, 메일 불러오기 */}
                        <S.MyInfo>
                            <S.MyName>{Nickname}</S.MyName>
                            <S.MyMail>
                                <img src="/mail.png" alt="mail" />
                                <p>musicismylife@kopis.com</p>
                            </S.MyMail>
                        </S.MyInfo>
                        <S.GoImg
                            src="/go.png"
                            alt="go"
                            onClick={() => navigate("/my/setting")}
                        />
                    </S.Profile>
                    <S.Mine>
                        <S.MineBox onClick={() => navigate("/my/like")} >
                            <img src="/mylike.png" alt="like" />
                            <p>좋아요</p>
                        </S.MineBox>
                        <S.MineBox onClick={() => navigate("/my/showcalendar")}>
                            <img src="/mycalendar.png" alt="like" />
                            <p>공연달력</p>
                        </S.MineBox>
                        <S.MineBox onClick={() => navigate("/my/write")}>
                            <img src="/mywrite.png" alt="like" />
                            <p>나의 글</p>
                        </S.MineBox>
                    </S.Mine>
                </S.WhiteBox>
            </S.MyProfileWrap>
        </>
    )
}