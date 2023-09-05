import React, { useState } from 'react'
import * as S from "./style";

export const AddMemo = ({ activeDate, closeModal }) => {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState({activeDate});
    const [place, setPlace] = useState("");
    const [memo, setMemo] = useState("");

    // 적용하기
    // const handleAdd = () => {
    //     if (title) {
    //         setTitle
    //     }
    // }

    return (
        <>
            <S.AddMemoWrap>
                <S.TopSec>
                    <p>메모 추가</p>
                    <img
                        src="/xBtn.png"
                        alt="btn"
                        onClick={closeModal} />
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
                        value={place}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </S.MemoSec>
                <S.MemoBox>
                    <p>메모</p>
                    <input
                        type='text'
                        placeholder='메모를 입력해주세요.'
                        value={memo}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </S.MemoBox>
                <S.BtnSec>
                    <S.ResetBtn>초기화</S.ResetBtn>
                    <S.DoneBtn>적용하기</S.DoneBtn>
                </S.BtnSec>
            </S.AddMemoWrap>
        </>
    )
}