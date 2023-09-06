import React from 'react'
import { MyInnerNav } from '../../../components/my/MyInnerNav'
import { Footer } from '../../../components/layouts/footer/Footer';
import { SiteNotice } from '../../../components/show/showDetail/SiteNotice';

export const Site = () => {
  const title = "좋아요";

  return (
    <>
      <MyInnerNav title={title} />
      <SiteNotice />
      <p>예매처리스트</p>
      <Footer />
    </>
  )
}