import React, { useState } from "react";
import '../../../components/my/myCalender/MyCalendar.css'; // 새로운 CSS 파일
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyCalendar } from "../../../components/my/myCalender/MyCalendar";
import { CalendarBar } from "../../../components/my/myCalender/CalendarBar";
import { ShowCards } from "../../../components/my/myCalender/ShowCards";
import { MemoCards } from "../../../components/my/myCalender/MemoCards";
import { Footer } from "../../../components/layouts/footer/Footer";

export const ShowCalendar = () => {
  const title = "공연 달력";

  const [activeDate, setActiveDate] = useState(''); // activeDate 상태 초기화

  // activeDate를 업데이트하는 함수 정의
  const handleActiveDateChange = (newActiveDate) => {
    setActiveDate(newActiveDate);
  };

  return(
    <>
    <MyInnerNav title={title} />
    <MyCalendar onActiveDateChange={handleActiveDateChange} />
    <CalendarBar />
    {/* 각 날짜에 맞는 공연카드 불러오기 ... */}
    <ShowCards activeDate={activeDate} />
    <ShowCards activeDate={activeDate} />
    <MemoCards activeDate={activeDate} />
    <Footer />
    </>
  );
};
