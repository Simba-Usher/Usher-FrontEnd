// AddTicketMemo.jsx

import React, { useState } from 'react'
import * as S from "./style";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../../recoil/recoilState';

export const AddTicketMemo = ({ activeDate, closeModal, addTicketMemoToList, data }) => {

    // const [date, setDate] = useState(activeDate);
    // const [title, setTitle] = useState("");
    // const [location, setLocation] = useState("");
    const [content, setContent] = useState("");

    const accessToken = useRecoilValue(accessTokenState);

    // 초기화하기
    const handleReset = () => {
        // setTitle("");
        // setLocation("");
        setContent("");
    }
    // 적용하기
    const handleAdd = async () => {
        try {
            const response = await axiosInstance.post(
                `/api/mypage/ticket/${data.id}/memo`,
                {
                    performance: data.performance,
                    performance_date: data.performance_date,
                    performance_location: data.performance_location,
                    ticket_memo: content,
                },
                // { withCredentials: true },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(response.data);

            // addTicketMemoToList({
            //     performance: data.performance,
            //     performance_date: data.performance_date,
            //     performance_location: data.performance_location,
            //     ticket_memo: content,
            // });

            closeModal();
        } catch (error) {
            console.log("달력 메모 추가 중 오류 발생", error);
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
                    {/* <input
                        type='text'
                        placeholder='제목을 입력해주세요.'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /> */}
                    <input
                        type='text'
                        // placeholder={data.performance}/
                        value={data.performance}
                        // onChange={(e) => setTitle(e.target.value)}
                        readOnly
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
                        // placeholder='장소를 입력해주세요.'
                        value={data.performance_location}
                        // onChange={(e) => setLocation(e.target.value)}
                        readOnly
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