// ShowCalendar.jsx

import React, { useEffect, useState } from "react";
import '../../../components/my/myCalender/MyCalendar.css'; // 새로운 CSS 파일
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyCalendar } from "../../../components/my/myCalender/MyCalendar";
import { CalendarBar } from "../../../components/my/myCalender/CalendarBar";
import { ShowCards } from "../../../components/my/myCalender/ShowCards";
import { MemoCards } from "../../../components/my/myCalender/MemoCards";
import { Footer } from "../../../components/layouts/footer/Footer";
import axiosInstance from "../../../api/axios";

export const ShowCalendar = () => {
  const title = "공연 달력";

  const [activeDate, setActiveDate] = useState(''); // activeDate 상태 초기화

  // activeDate를 업데이트하는 함수 정의
  const handleActiveDateChange = (newActiveDate) => {
    setActiveDate(newActiveDate);
  };

  const [memoList, setMemoList] = useState([]);
  // const addMemoToList = (newMemo) => {
  //   setMemoList([...memoList, newMemo]);
  // };
  const addMemoToList = (newMemo) => {
    setMemoList((prevMemoList) => [...prevMemoList, newMemo]);
  };
  console.log(memoList);

  const ShowData = [
    {
      "id": "1",
        "title": "<뮤지컬> 오페라의 유령 - 서울",
        "date": "2023-09-06",
        "location": "샤롯데씨어터",
        "content": "공연 메모 내용1 입니다 ..."
    },
    {
      "id": "2",
        "title": "<뮤지컬> 멤피스",
        "date": "2023-09-06",
        "location": "충무아트센터 대극장",
        "content": "공연 메모 내용2 입니다 ..."
    },
    {
      "id": "3",
        "title": "<뮤지컬> 레베카",
        "date": "2023-09-07",
        "location": "내 집앞",
        "content": "공연 메모 내용3 입니다 ..."
    },
  ];

  // activeDate와 일치하는 데이터만 필터링
  const filteredData1 = memoList.filter((memo) => memo.date === activeDate);
  const fetchMeMoData = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/memos");
      setMemoList(response.data);
      console.log(memoList);
    } catch (error) {
      console.log("메모 받아오는 중에 오류 발생", error);
    }
  };
  useEffect(() => {
    fetchMeMoData();
  }, [])
  // const filteredData1 = MemoData.filter((memo) => memo.date === activeDate);
  const filteredData2 = ShowData.filter((show) => show.date === activeDate);

  return(
    <>
    <MyInnerNav title={title} />
    <MyCalendar onActiveDateChange={handleActiveDateChange} />
    <CalendarBar
      activeDate={activeDate}
      // closeModal={closeModal}
      memoList={memoList}
      addMemoToList={addMemoToList}
    />
    {/* 각 날짜에 맞는 공연카드 불러오기 ... */}
    {filteredData2.map ((show) => (
      <ShowCards
      key={show.id}
      data={show}
      activeDate={activeDate}
       />
    ))}
    {/* <ShowCards activeDate={activeDate} /> */}
    {filteredData1.map ((memo) => (
      <MemoCards
        key={memo.id}
        data={memo}
        activeDate={activeDate}
      />
    ))}
    {/* <MemoCards activeDate={activeDate} /> */}
    <Footer />
    </>
  );
};
