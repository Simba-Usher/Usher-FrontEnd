import React from 'react'
import * as S from "./style";

export const ComLists = () => {
    return (
        <>
            <S.ComListsWrap>
                <S.TextSec>
                    <S.Sec1Title>23년 하반기 꼭 관람해야하는 뮤지컬</S.Sec1Title>
                    <S.Sec2>
                        {/* 에디터의 경우 -> '에디터' 추가, 글자색 변경 */}
                        {/* #0AB9AD */}
                        {/* 작성자 불러오기 */}
                        <p>작성자</p>
                        <p>|</p>
                        {/* 작성일 불러오기 */}
                        <p>2023.7.16</p>
                        {/* 에디터의 경우 -> 체크뱃지 추가(아래 주석 해제) */}
                        {/* <img src="/editorcheck.png"
                            style={
                                {
                                    width: "22px",
                                    height: "21px",
                                    margin: "0 15px"
                                }} /> */}
                    </S.Sec2>
                    <S.Sec3>
                        <img src="/views.png" alt="views" />
                        <p>1,201</p>
                        <img src="/likes.png" alt="likes" />
                        <p>10</p>
                        <img src="/comments.png" alt="comments" />
                        <p>5</p>
                    </S.Sec3>
                </S.TextSec>
                <S.ImgSec src="/comlistposter.png" />
            </S.ComListsWrap>
        </>
    )
}