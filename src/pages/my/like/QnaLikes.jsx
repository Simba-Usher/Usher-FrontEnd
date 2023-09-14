// QnaLikes.jsx

import React from 'react'
import * as S from "../../../components/community/communityMain/style";
import { useNavigate } from 'react-router-dom';

export const QnaLikes = ({ data }) => {
    const navigate = useNavigate();

    return (
        <>
            <S.ComListsWrap onClick={() => navigate(`/community/${data.id}`)}>
                <S.QnaSec>
                    <S.Sec1Title>Q. {data.title}</S.Sec1Title>
                    <S.Sec2Content>
                        {/* 본문 글자수 자르기 해야될듯 */}
                        {data.content}
                    </S.Sec2Content>
                    <S.Sec3>
                        <img src="/views.png" alt="views" />
                        <p>{data.views}</p>
                        <img src="/likes.png" alt="likes" />
                        <p>{data.like_cnt}</p>
                        <p className="comments">답변</p>
                        <p className="comments">{data.comcomments_cnt}</p>
                    </S.Sec3>
                </S.QnaSec>
            </S.ComListsWrap>
        </>
    )
}