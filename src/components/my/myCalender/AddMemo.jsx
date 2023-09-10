// AddMemo.jsx

import React, { useState } from 'react'
import * as S from "./style";
import axiosInstance from "../../../api/axios";
// import { v4 as uuidv4 } from 'uuid'; // UUID 라이브러리 import

export const AddMemo = ({ activeDate, closeModal, addMemoToList, memoList }) => {

    const [date, setDate] = useState(activeDate);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");

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
        }
    };
    // const handleAdd = () => {
    //     if (title || location || content) {
    //         const newMemo = {
    //             // id: uuidv4(),
    //             title,
    //             date: activeDate,
    //             location,
    //             content,
    //         };

    //         addMemoToList(newMemo);

    //         setTitle('');
    //         setLocation('');
    //         setContent('');
    //     }
    //     closeModal();
    //     // console.log(memoList);
    // }

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
                        readOnly/>
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