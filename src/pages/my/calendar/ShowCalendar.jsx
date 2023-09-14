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
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import { Login } from "../../login/Login";

export const ShowCalendar = () => {
  const title = "공연 달력";
  const accessToken = useRecoilValue(accessTokenState);
  const [activeDate, setActiveDate] = useState('');
  const [memoList, setMemoList] = useState([]);
  const [ticketList, setTicketList] = useState([]);
  const [ticketMemoList, setTicketMemoList] = useState([]);

  // activeDate 업데이트
  const handleActiveDateChange = (newActiveDate) => {
    setActiveDate(newActiveDate);
    console.log(activeDate);
  };


  // 메모 추가
  const addMemoToList = (newMemo) => {
    setMemoList((prevMemoList) => [...prevMemoList, newMemo]);
  };
  console.log(memoList);

  // activeDate와 일치하는 메모 데이터만 필터링
  const filteredData1 = memoList.filter((memo) => memo.date === activeDate);

  // 메모 불러오기
  const fetchMemoData = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/memos",
        // { withCredentials: true },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
      setMemoList(response.data);
      console.log(memoList);
    } catch (error) {
      console.log("메모 받아오는 중 오류 발생", error);
    }
  };
  useEffect(() => {
    fetchMemoData();
  }, [])


  // 메모 추가
  // const addTicketMemoToList = (newMemo) => {
  //   setTicketMemoList((prevMemoList) => [...prevMemoList, newMemo]);
  // };
  // console.log(ticketMemoList);

  // activeDate와 일치하는 티켓 데이터만 필터링
  const filteredData2 = ticketList.filter((show) => show.performance_date.slice(0, 10) === activeDate);

  // 티켓 불러오기
  const fetchMyTicketData = async () => {
    try {
      const response = await axiosInstance.get("/api/mypage/ticket",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
      setTicketList(response.data);
      console.log(ticketList);
    } catch (error) {
      console.log("티켓 불러오는 중 오류 발생", error);
    }
  }
  useEffect(() => {
    fetchMyTicketData();
  }, [])

  if (accessToken) {
    return (
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
        {filteredData2.map((show) => (
          <ShowCards
            key={show.id}
            data={show}
            activeDate={activeDate}
            ticketMemoList={ticketMemoList}
            setTicketMemoList={setTicketMemoList}
            // addTicketMemoToList={addTicketMemoToList}
          />
        ))}
        {/* <ShowCards activeDate={activeDate} /> */}
        {filteredData1.map((memo) => (
          <MemoCards
            key={memo.id}
            data={memo}
            activeDate={activeDate}
            memoList={memoList}
            setMemoList={setMemoList}
          />
        ))}
        {/* <MemoCards activeDate={activeDate} /> */}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    )
  }
};
