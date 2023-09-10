import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const ComLists = ({ compost, editorIsTrue }) => {
    const navigate = useNavigate();

    return (
        <>
            <S.ComListsWrap onClick={() => navigate("/community/:detailId")}>
                <S.TextSec>
                    {/* <S.Sec1Title>23년 하반기 꼭 관람해야하는 뮤지컬</S.Sec1Title> */}
                    <S.Sec1Title>{compost.title}</S.Sec1Title>
                    <S.Sec2>
                        {/* 에디터의 경우 -> '에디터' 추가, 글자색 변경 */}
                        {/* 작성자 불러오기 */}
                        {editorIsTrue === true ? (
                            <>
                                <div className='editor'>에디터·</div>
                                <div className='editor'>{compost.writer}</div>
                            </>
                        ) : (
                            <p className='writer'>{compost.writer}</p>
                        )}
                        <p className='bar'>|</p>
                        {/* 작성일 불러오기 */}
                        <p className='date'>{compost.created_at.slice(0,10)}</p>
                        {/* 에디터의 경우 -> 체크뱃지 추가(아래 주석 해제) */}
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
                    <S.Sec3>
                        <img src="/views.png" alt="views" />
                        <p>{compost.views}</p>
                        <img src="/likes.png" alt="likes" />
                        <p>{compost.like_cnt}</p>
                        <img src="/comments.png" alt="comments" />
                        <p>{compost.comcomments_cnt}</p>
                    </S.Sec3>
                </S.TextSec>
                <S.ImgSec src="/comlistposter.png" />
            </S.ComListsWrap>
        </>
    )
}