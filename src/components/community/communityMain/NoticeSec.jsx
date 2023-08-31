import React from 'react'
import * as S from "./style";

export const NoticeSec = () => {
    return (
        <>
            <S.Notice>
                <p>공지</p>
                <p>하트 10개를 받으면 실시간 인기글에 자동 선정됩니다.</p>
                <img src="/noticeplus.png" alt='plus' />
            </S.Notice>
        </>
    )
}