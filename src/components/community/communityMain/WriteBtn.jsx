import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const WriteBtn = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.WriteBtnWrap onClick={() => navigate("/community/write")}>
                <img src="/write.png" />
                <p>글쓰기</p>
            </S.WriteBtnWrap>
        </>
    )
}