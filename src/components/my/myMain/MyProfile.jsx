// MyProfile.jsx

import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const MyProfile = () => {
    const navigate = useNavigate();
  return (
    <>
        <S.MyProfileWrap>
            <S.WhiteBox>
                <S.Profile>
                    <S.Grade src="/grade1.png" alt="grade" />
                    {/* 닉네임, 메일 불러오기 */}
                    <S.MyInfo>
                        <S.MyName>뮤라이프 님</S.MyName>
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