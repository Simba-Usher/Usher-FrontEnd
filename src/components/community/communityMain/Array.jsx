// Array.jsx

import React, { useEffect, useRef, useState } from 'react'
import * as S from "./style";
// import axiosInstance from "../../../api/axios";

export const Array = ({ activeArray, handleArraySecClick, closeModal }) => {
    const modal = useRef();

    return (
        <>
            <S.ArrayWrap ref={modal}>
                <S.ArraySec
                    className={activeArray === "최신순" ? "active" : ""}
                    onClick={() => {
                        handleArraySecClick('최신순');
                        closeModal();
                    }}
                >
                    최신순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === "조회순" ? "active" : ""}
                    onClick={() => {
                        handleArraySecClick('조회순');
                        closeModal();
                    }}
                >
                    조회순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === "좋아요 많은순" ? "active" : ""}
                    onClick={() => {
                        handleArraySecClick('좋아요 많은순');
                        closeModal();
                    }}
                >
                    좋아요 많은순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === "댓글 많은 순" ? "active" : ""}
                    onClick={() => {
                        handleArraySecClick('댓글 많은 순');
                        closeModal();
                    }}
                >
                    댓글 많은 순
                </S.ArraySec>
            </S.ArrayWrap>
        </>
    )
}