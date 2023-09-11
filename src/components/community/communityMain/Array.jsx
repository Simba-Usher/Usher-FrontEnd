import React, { useEffect, useRef, useState } from 'react'
import * as S from "./style";

export const Array = ({ activeArray, handleArraySecClick }) => {
    const modal = useRef();

    const getApiUrlByArrayMethod = (arrayMethod) => {
        switch (arrayMethod) {
            case '최신순':
                return '/api/composts/reccent';
            case '조회순':
                return '/api/composts/views';
            case '좋아요 많은순':
                return '/api/composts/popular';
            case '댓글 많은 순':
                return '/api/composts/cmt';
            default:
                return '/api/composts/reccent';
        }
    };

    console.log(activeArray);

    return (
        <>
            <S.ArrayWrap ref={modal}>
                <S.ArraySec
                    className={activeArray === "최신순" ? "active" : ""}
                    onClick={() => {
                        const apiUrl = getApiUrlByArrayMethod('최신순');
                        handleArraySecClick('최신순', apiUrl);
                    }}
                >
                    최신순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === "조회순" ? "active" : ""}
                    onClick={() => {
                        const apiUrl = getApiUrlByArrayMethod('조회순');
                        handleArraySecClick('조회순', apiUrl);
                    }
                    }
                >
                    조회순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === "좋아요 많은순" ? "active" : ""}
                    onClick={() => handleArraySecClick("좋아요 많은순")}
                >
                    좋아요 많은순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === "댓글 많은 순" ? "active" : ""}
                    onClick={() => handleArraySecClick("댓글 많은 순")}
                >
                    댓글 많은 순
                </S.ArraySec>
            </S.ArrayWrap>
        </>
    )
}