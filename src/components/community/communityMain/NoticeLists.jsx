import React from 'react'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

export const NoticeLists = ({ notice }) => {
    const navigate = useNavigate();

    return (
        <>
            <S.NotiveListsWrap onClick={() => navigate("/community/:detailId")}>
                <S.NotiveSec>
                    {/* 공지 제목 불러오기 */}
                    {/* <S.Sec1Title>공지* 어셔 커뮤니티 이용 시 주의사항</S.Sec1Title> */}
                    <S.Sec1Title>공지* {notice.title}</S.Sec1Title>
                    <S.Sec2Manager>
                        <p className="manager">관리자</p>
                        <p className='bar'>|</p>
                        {/* 작성일 불러오기 */}
                        {/* <p>2023.7.16</p> */}
                        <p className='date'>{notice.created_at.slice(0,10)}</p>
                        <img src="/manager.png"
                            style={
                                {
                                    width: "21px",
                                    height: "18px",
                                    margin: "2px 18px"
                                }} />
                    </S.Sec2Manager>
                    {/* 공지 내용 불러오기 */}
                    <S.Sec3Content>
                        {/* 안녕하세요, 어셔 커뮤니티 관리자입니다. 어셔 커뮤니티 이용 전 준수해야할 커뮤니티 규칙을 안내드립니다. 첫째, 커뮤니티 내 ... */}
                        {notice.content}
                    </S.Sec3Content>
                    {/* <S.Sec3Content>{notice.content}</S.Sec3Content> */}
                </S.NotiveSec>
            </S.NotiveListsWrap>
        </>
    )
}