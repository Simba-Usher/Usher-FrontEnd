import React from 'react'
import { Footer } from '../../../components/layouts/footer/Footer';
import { SiteNotice } from '../../../components/show/showDetail/SiteNotice';
import { SiteSec } from '../../../components/show/showDetail/SiteSec';
import { SiteNav } from '../../../components/show/showDetail/SiteNav';

export const Site = () => {
  const title = "예매처";
  const SiteList = [
    {
      title: "샤롯데씨어터",
      cost: "1,000",
    },
    {
      title: "인터파크 티켓",
      cost: "2,000",
    },
    {
      title: "예스 24 티켓",
      cost: "2,000",
    },
    {
      title: "11번가 티켓",
      cost: "1,000",
    },
    {
      title: "매표소 (APP)",
      cost: "1,000",
    },
    {
      title: "페이북",
      cost: "1,000",
    },
  ]

  return (
    <>
      <SiteNav title={title} />
      <SiteNotice />
      <div style={{padding: "0 24px"}}>
      <div style={{width: "382px", height: "3px", backgroundColor: "#D8E0EC"}}></div>
      <div style={{paddingBottom: "30px"}}>
      {SiteList.map((site) => (
        <SiteSec
          key={site.id}
          data={site}
        />
      ))}
      </div>
      </div>
      <Footer />
    </>
  )
}