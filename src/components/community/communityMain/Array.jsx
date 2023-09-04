import React, { useEffect, useRef, useState } from 'react'
import * as S from "./style";

export const Array = ({ activeArray, handleArraySecClick }) => {
    const modal = useRef();
    
    console.log(activeArray);

    return (
        <>
            <S.ArrayWrap ref={modal}>
                <S.ArraySec
                    className={activeArray === "최신순" ? "active" : ""}
                    onClick={() => handleArraySecClick("최신순")}
                >
                    최신순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === "조회순" ? "active" : ""}
                    onClick={() => handleArraySecClick("조회순")}
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