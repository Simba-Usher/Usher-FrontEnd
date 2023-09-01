import React from 'react'
import * as S from "./style";

export const NoticeLists = () => {
    return (
        <>
            <S.NotiveListsWrap>
                <S.NotiveSec>
                    {/* 공지 제목 불러오기 */}
                    <S.Sec1Title>공지* 어셔 커뮤니티 이용 시 주의사항</S.Sec1Title>
                    <S.Sec2Manager>
                        <p className="manager">관리자</p>
                        <p>|</p>
                        {/* 작성일 불러오기 */}
                        <p>2023.7.16</p>
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
                        안녕하세요, 어셔 커뮤니티 관리자입니다. 어셔 커뮤니티 이용 전 준수해야할 커뮤니티 규칙을 안내드립니다. 첫째, 커뮤니티 내 ...
                    </S.Sec3Content>
                </S.NotiveSec>
            </S.NotiveListsWrap>
        </>
    )
}