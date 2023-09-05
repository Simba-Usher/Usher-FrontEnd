// MyCalendar.jsx

import React, { useEffect, useState } from 'react'
import * as S from "./style";
import './MyCalendar.css'; // 새로운 CSS 파일
import { Calendar } from 'react-date-range';
import 'react-calendar/dist/Calendar.css'; // 라이브러리 CSS 파일
import moment from 'moment';
// import { Schedule } from './Schedule';


const dayList = [
  '2023-9-3',
  '2023-9-4',
  '2023-9-5',
  '2023-0-14',
  '2023-9-27',
];

export const MyCalendar = ({ onActiveDateChange }) => {
  const currentDate = new Date(); // 현재 날짜
  const [value, onChange] = useState(currentDate); // 초기값은 현재 날짜
  const activeDate = moment(value).format('YYYY-MM-DD'); // 클릭한 날짜 (년-월-일)
  console.log(activeDate);

  // activeDate가 변경될 때 콜백 함수 호출
  useEffect(() => {
    onActiveDateChange(activeDate);
  }, [activeDate, onActiveDateChange]);

  // moment.locale('ko');

  // 월 -> 숫자로 매핑
  const monthToNum = {
    "January": "1",
    "February": "2",
    "March": "3",
    "April": "4",
    "May": "5",
    "June": "6",
    "July": "7",
    "August": "8",
    "Setember": "9",
    "October": "10",
    "November": "11",
    "December": "12",
  }
  // 요일 -> 한국어로 매핑
  const dayToKo = {
    "Sun": "일",
    "Mon": "월",
    "Tue": "화",
    "Wed": "수",
    "Thu": "목",
    "Fri": "금",
    "Sat": "토",
  }

  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    const contents = [];

    // date(각 날짜)가 리스트의 날짜와 일치하면 해당 컨텐츠(이미지) 추가
    if (dayList.includes(moment(date).format('YYYY-MM-DD'))) {
      contents.push(
        <div key={moment(date).format('YYYY-MM-DD')}>
          <img
            src="/schedule.png" // 이미지 경로 설정 (public 폴더 내부에 이미지를 위치시킬 경우)
            alt="sche"
          />
        </div>
      );
    }

    return <div>{contents}</div>;
  };

  return (
    <>
      <S.MyCalendarWrap>
        {/* 날짜를 클릭할 때마다 value가 해당 날짜로 변경 */}
        <S.CustomCalendar
          // locale={moment.localeData()}
          // locale="ko"
          onChange={onChange}
          value={value}
          next2Label={null}
          prev2Label={null}
          tileContent={addContent}
          formatDay={(locale, date) => moment(date).format('D')}
          formatWeekDay={(nameOfDay) => dayToKo[nameOfDay]}
          // tileContent={() => {
          //   (
          //     <>
          //       <div className="flex justify-center items-center absoluteDiv">
          //         <div className="dot"></div>
          //       </div>
          //     </>
          //   );
          // }}
        >
          {/* {addContent} */}
        </S.CustomCalendar>
        <S.UnderBar />

        {/* <button className="react-calendar__tile">
          <div>확인</div>
        </button> */}
      </S.MyCalendarWrap>
    </>
  )
}