import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const QnaLists = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.ComListsWrap onClick={() => navigate("/community/:detailId")}>
                <S.QnaSec>
                    {/* qna 제목 불러오기 */}
                    <S.Sec1Title>Q. 23년 하반기 꼭 관람해야하는 뮤지컬</S.Sec1Title>
                    {/* qna 내용 불러오기 */}
                    <S.Sec2Content>
                        안녕하세요, 뮤지컬을 처음 보러가는 뮤린이입니다. 뮤지컬 하면 시체 관극 이런 말이 있듯,,, 뮤지컬 예절이 엄격하다는 이야기를...
                    </S.Sec2Content>
                    {/* 조회수, 좋아요수, 답변수 불러오기 */}
                    <S.Sec3>
                        <img src="/views.png" alt="views" />
                        <p>1,201</p>
                        <img src="/likes.png" alt="likes" />
                        <p>10</p>
                        <p className="comments">답변</p>
                        <p className="comments">5</p>
                    </S.Sec3>
                </S.QnaSec>
            </S.ComListsWrap>
        </>
    )
}