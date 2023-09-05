import React from 'react'
import * as S from "../style";
import { useNavigate } from 'react-router-dom';

export const ViewDetail = (shows) => {
    const navigate = useNavigate();

    return (
        <>
            <S.ViewDetailWrap>
                <S.ViewDetailTitle>
                    공연 정보 상세
                    <S.XBtn src="/xBtn.png" alt='xBtn'
                        onClick={() => navigate(`/${shows.id}`)} />
                </S.ViewDetailTitle>
                {/* 공연 정보 상세 이미지 가져오기 */}
                <S.ImgWrap>
                    <S.ViewDetailImg src="/detailimg1.png" alt="infodetail" />
                    <S.ViewDetailImg src="/detailimg2.png" alt="infodetail" />
                    <S.ViewDetailImg src="/detailimg3.png" alt="infodetail" />
                    <S.ViewDetailImg src="/detailimg4.png" alt="infodetail" />
                    <S.ViewDetailImg src="/detailimg5.png" alt="infodetail" />
                </S.ImgWrap>
                {/* <S.ViewDetailImg src="/infodetail.png" alt="infodetail" /> */}
            </S.ViewDetailWrap>
        </>
    )
}