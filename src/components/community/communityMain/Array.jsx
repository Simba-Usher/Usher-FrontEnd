import React, { useEffect, useRef, useState } from 'react'
import * as S from "./style";

export const Array = ({ setModalOpen, closeModal }) => {
    const [activeArray, setActiveArray] = useState("");
    const modal = useRef();

    useEffect(() => {
        // 모달 외부를 클릭했을 때 모달 닫기
        const handleClickOutside = (event) => {
            if (modal.current && !modal.current.contains(event.target)) {
                closeModal();
            }
        };

        // 모달 외부 클릭 이벤트 리스너 추가
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modal, closeModal]);

    const handleArraySecClick = (selected) => {
        console.log("Clicked ArraySec", selected);
        setActiveArray(()=>selected);
        console.log(activeArray);
        closeModal();
    };

    return (
        <>
            <S.ArrayWrap ref={modal}>
                <S.ArraySec
                    className={activeArray === 0 ? "active" : ""}
                    onClick={() => handleArraySecClick("r")}
                >
                    최신순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === 1 ? "active" : ""}
                    onClick={() => handleArraySecClick("v")}
                >
                    조회순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === 2 ? "active" : ""}
                    onClick={() => handleArraySecClick("l")}
                >
                    좋아요 많은순
                </S.ArraySec>
                <S.ArraySec
                    className={activeArray === 3 ? "active" : ""}
                    onClick={() => handleArraySecClick("c")}
                >
                    댓글 많은 순
                </S.ArraySec>
                {/* 모달 내용 */}
                {/* <div className="modal-content">
                    <h2>모달 제목</h2>
                    <p>모달 내용을 여기에 추가하세요.</p>
                </div> */}

                {/* 닫기 버튼 없고 바깥부분이나 내부 클릭시 close */}
                {/* <button onClick={closeModal}>닫기</button> */}
            </S.ArrayWrap>
        </>
    )
}