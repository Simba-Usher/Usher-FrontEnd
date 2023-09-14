// ComLikes.jsx

import React from 'react'
import * as S from "../../../components/community/communityMain/style";
import { useNavigate } from 'react-router-dom';

export const ComLikes = ({ data, editorIsTrue }) => {
    const navigate = useNavigate();

    return (
        <>
            <S.ComListsWrap onClick={() => navigate(`/community/${data.id}`)}>
                <S.QnaSec>
                    <S.Sec1Title>{data.title}</S.Sec1Title>
                    <S.Sec2>
                        {/* 에디터의 경우 -> '에디터' 추가, 글자색 변경 */}
                        {editorIsTrue === true ? (
                            <>
                                <div className='editor'>에디터·</div>
                                <div className='editor'>{data.writer}</div>
                            </>
                        ) : (
                            <p className='writer'>{data.writer}</p>
                        )}
                        <p className='bar'>|</p>
                        <p className='date'>{data.created_at.slice(0, 10)}</p>
                        {/* 에디터의 경우 */}
                        {editorIsTrue === true ? (
                            <img src="/editorcheck.png"
                                style={
                                    {
                                        width: "22px",
                                        height: "21px",
                                        margin: "0 10px",
                                        marginTop: "1px"
                                    }} />
                        ) : (
                            <></>
                        )}
                    </S.Sec2>
                    {/* <S.Sec2Content>
                        {data.content}
                    </S.Sec2Content> */}
                    <S.Sec3>
                        <img src="/views.png" alt="views" />
                        <p>{data.views}</p>
                        <img src="/likes.png" alt="likes" />
                        <p>{data.like_cnt}</p>
                        {/* <p className="comments">답변</p> */}
                        <img src="/comments.png" alt="comments" />
                        {/* <p className="comments">{data.comcomments_cnt}</p> */}
                        <p>{data.comcomments_cnt}</p>
                    </S.Sec3>
                </S.QnaSec>
            </S.ComListsWrap>
        </>
    )
}