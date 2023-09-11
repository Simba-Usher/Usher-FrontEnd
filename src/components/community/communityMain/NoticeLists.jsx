import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const NoticeLists = ({ notice }) => {
    const navigate = useNavigate();

    return (
        <>
            <S.NotiveListsWrap onClick={() => navigate("/community/:detailId")}>
                <S.NotiveSec>
                    <S.Sec1Title>공지* {notice.title}</S.Sec1Title>
                    <S.Sec2Manager>
                        <p className="manager">관리자</p>
                        <p className='bar'>|</p>
                        <p className='date'>{notice.created_at.slice(0,10)}</p>
                        <img src="/manager.png"
                            style={
                                {
                                    width: "21px",
                                    height: "18px",
                                    margin: "2px 18px"
                                }} />
                    </S.Sec2Manager>
                    {/* 본문 글자수 자르기 해야될듯 */}
                    <S.Sec3Content>
                        {notice.content}
                    </S.Sec3Content>
                </S.NotiveSec>
            </S.NotiveListsWrap>
        </>
    )
}