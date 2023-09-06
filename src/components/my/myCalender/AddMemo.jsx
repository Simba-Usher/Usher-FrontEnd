// AddMemo.jsx

import React, { useState } from 'react'
import * as S from "./style";

export const AddMemo = ({ activeDate, closeModal, addMemoToList, memoList }) => {

    const [title, setTitle] = useState("");
    // const [date] = useState({activeDate});
    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");

    // const [memoList, setMemoList] = useState([]);

    // 적용하기
    const handleAdd = () => {
        if (title || location || content) {
            const newMemo = {
                title,
                date: activeDate,
                location,
                content,
            };

            // setMemoList([...memoList, newMemo]);
            addMemoToList(newMemo);

            setTitle('');
            setLocation('');
            setContent('');
        }
        closeModal();
        // console.log(memoList);
    }

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
                    <p>{activeDate}</p>
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
                    <input
                        type='text'
                        placeholder='메모를 입력해주세요.'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </S.MemoBox>
                <S.BtnSec>
                    <S.ResetBtn>초기화</S.ResetBtn>
                    <S.DoneBtn onClick={handleAdd}>적용하기</S.DoneBtn>
                </S.BtnSec>
            </S.AddMemoWrap>
        </>
    )
}