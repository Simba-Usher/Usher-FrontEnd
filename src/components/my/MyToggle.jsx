// MyToggle.jsx

import React from 'react'
import * as S from "./style";

export const MyToggle = ({ title, selectedButton, setSelectedButton }) => {
    let toggleA, toggleB;

    if (title === '좋아요') {
        toggleA = '공연 좋아요';
        toggleB = '글 좋아요';
    } else if (title === '나의 글') {
        toggleA = '공연 후기';
        toggleB = '커뮤니티 글';
    } else {
        // title이 다른 경우에 대한 처리
    }

    const selectedStyle = {
        backgroundColor: '#071D36',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: '600',
    };

    return (
        <>
            <S.MyToggleWrap>
                <S.ToggleBtn
                onClick={() => setSelectedButton('toggleA')}
                style={selectedButton === 'toggleA' ? selectedStyle : {}}
                >
                    {toggleA}
                </S.ToggleBtn>
                <S.ToggleBtn
                onClick={() => setSelectedButton('toggleB')}
                style={selectedButton === 'toggleB' ? selectedStyle : {}}
                >
                    {toggleB}
                </S.ToggleBtn>
            </S.MyToggleWrap>
        </>
    )
}