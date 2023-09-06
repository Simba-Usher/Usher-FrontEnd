import React from 'react'
import * as S from "../style";

export const SiteNotice = () => {
  return (
    <>
        <S.SiteNoticeWrap>
            <S.Notice>
                <div>
                    <img src="/notice.png" alt="!" />
                </div>
            </S.Notice>
        </S.SiteNoticeWrap>
    </>
  )
}