import React, { useEffect, useRef, useState } from 'react'
import * as S from "../../components/community/communityMain/style";

export const Array = ({ activeArray, handleArraySecClick }) => {
    const modal = useRef();
    
    console.log(activeArray);

    return (
        <>
        {/* 공연검색 - 별점 높은순, 후기 많은순 */}
            <S.ArrayWrap2 ref={modal}>
                <S.ArraySec2
                    className={activeArray === "별점 높은순" ? "active" : ""}
                    onClick={() => handleArraySecClick("별점 높은순")}
                >
                    별점 높은순
                </S.ArraySec2>
                <S.ArraySec2
                    className={activeArray === "후기 많은순" ? "active" : ""}
                    onClick={() => handleArraySecClick("후기 많은순")}
                >
                    후기 많은순
                </S.ArraySec2>
                {/* <S.ArraySec
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
                </S.ArraySec> */}
            </S.ArrayWrap2>
        </>
    )
}