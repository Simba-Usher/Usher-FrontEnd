import React, { useState } from 'react'
import * as S from "./style";
import { AddMemo } from './AddMemo';

export const CalendarBar = ({ activeDate }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <S.CalendarBarWrap>
                <S.ShowNumSec>
                    <p>관람공연</p>
                    {/* 관람공연수 불러오기 */}
                    <p>3건</p>
                </S.ShowNumSec>
                <S.BlankSec />
                <S.AddMemoSec onClick={openModal}>
                    <p>메모 추가하기</p>
                    <img src="/memo.png" alt="add" />
                </S.AddMemoSec>
            </S.CalendarBarWrap>

            {modalOpen && (
                <AddMemo 
                    activeDate={activeDate}
                    closeModal={closeModal}
                />
            )}

            {modalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: '11'
                    }}
                    onClick={closeModal}
                />
            )}
        </>
    )
}