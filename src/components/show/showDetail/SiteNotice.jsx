import React from 'react'
import * as S from "../style";

export const SiteNotice = () => {
  return (
    <>
        <S.SiteNoticeWrap>
            <S.Notice>
                <div>
                    <img src="/notice.png" alt="!" />
                    <p>예매처 안내</p>
                </div>
                <div>
                예매처마다 할인 혜택이 상이할 수 있습니다
                각 예매처에서 정확한 가격과 할인 정보를 확인하세요!
                </div>
            </S.Notice>
        </S.SiteNoticeWrap>
    </>
  )
}