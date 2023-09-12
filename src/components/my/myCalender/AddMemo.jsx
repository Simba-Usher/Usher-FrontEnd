// AddMemo.jsx

import React, { useState } from 'react'
import * as S from "./style";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../../recoil/recoilState';
// refreshTokenState
// import { v4 as uuidv4 } from 'uuid'; // UUID 라이브러리 import

export const AddMemo = ({ activeDate, closeModal, addMemoToList, memoList }) => {

    const [date, setDate] = useState(activeDate);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");

    // const [accessToken, setAccessToken] = useState("");

    const accessToken = useRecoilValue(accessTokenState);
    // const refreshToken = useRecoilValue(refreshTokenState);
    // console.log(accessToken);
    // console.log(refreshToken);

    // 초기화하기
    const handleReset = () => {
        setTitle("");
        setLocation("");
        setContent("");
    }
    // 적용하기
    const handleAdd = async () => {
        try {
            const response = await axiosInstance.post(
                "/api/mypage/memos",
                {
                    title: title,
                    date: date,
                    location: location,
                    content: content,
                },
                // { withCredentials: true },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(response.data);

            addMemoToList({
                title: title,
                date: date,
                location: location,
                content: content,
            });

            closeModal();
        } catch (error) {
            console.log("달력 메모 추가 중 오류 발생", error);

            // // Access 토큰이 만료되었을 경우 Refresh 토큰을 사용하여 새로운 Access 토큰을 얻는 로직 추가
            // if (error.response && error.response.status === 401) {
            //     try {
            //         const refreshResponse = await axiosInstance.post('api/login/', {
            //             refreshToken: refreshToken, // Recoil에 저장된 Refresh 토큰 사용
            //         });
            //         const newAccessToken = refreshResponse.data.access;

            //         // 받아온 새로운 Access 토큰을 저장
            //         // setAccessToken(newAccessToken);
                    

            //         const retryResponse = await axiosInstance.post(
            //             "/api/mypage/memos",
            //             {
            //                 title: title,
            //                 date: date,
            //                 location: location,
            //                 content: content,
            //             },
            //             {
            //                 headers: {
            //                     Authorization: `Bearer ${newAccessToken}`,
            //                 }
            //             }
            //         );
            //         console.log(response.data);

            //         addMemoToList({
            //             title: title,
            //             date: date,
            //             location: location,
            //             content: content,
            //         });

            //         closeModal();
            //     } catch (refreshError) {
            //         console.error('Refresh 토큰을 사용하여 새로운 Access 토큰을 얻지 못한 경우', refreshError);
            //         // 여기에서 로그아웃 처리 또는 다시 로그인 화면으로 이동하는 등의 추가 로직을 구현할 수 있음
            //     }
            // }
        }
    };

    return (
        <>
            <S.AddMemoWrap>
                <S.TopSec>
                    <p>메모 추가</p>
                    <img
                        src="/xBtn.png"
                        alt="btn"
                        onClick={closeModal}
                    />
                </S.TopSec>
                <S.MemoSec>
                    <p>제목</p>
                    <input
                        type='text'
                        placeholder='제목을 입력해주세요.'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </S.MemoSec>
                <S.DateBox3>
                    <p>날짜</p>
                    {/* <p>{activeDate}</p> */}
                    <input
                        type='text'
                        value={activeDate}
                        readOnly />
                </S.DateBox3>
                <S.MemoSec>
                    <p>장소</p>
                    <input
                        type='text'
                        placeholder='장소를 입력해주세요.'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </S.MemoSec>
                <S.MemoBox>
                    <p>메모</p>
                    <textarea
                        type='text'
                        placeholder='메모를 입력해주세요.'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </S.MemoBox>
                <S.BtnSec>
                    <S.ResetBtn onClick={handleReset}>초기화</S.ResetBtn>
                    <S.DoneBtn onClick={handleAdd}>적용하기</S.DoneBtn>
                </S.BtnSec>
            </S.AddMemoWrap>
        </>
    )
}