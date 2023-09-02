// MyCalendar.jsx

import React, { useEffect, useState } from 'react'
import * as S from "./style";
import './MyCalendar.css'; // 새로운 CSS 파일
import { Calendar } from 'react-date-range';
import 'react-calendar/dist/Calendar.css'; // 라이브러리 CSS 파일
import moment from 'moment';

export const MyCalendar = ({ onActiveDateChange }) => {
  const currentDate = new Date(); // 현재 날짜
  const [value, onChange] = useState(currentDate); // 초기값은 현재 날짜
  const activeDate = moment(value).format('YY.M.D'); // 클릭한 날짜 (년-월-일)
  console.log(activeDate);

    // activeDate가 변경될 때 콜백 함수 호출
    useEffect(() => {
      onActiveDateChange(activeDate);
    }, [activeDate, onActiveDateChange]);

  // moment.locale('ko');


  return (
    <>
      <S.MyCalendarWrap>
        {/* 날짜를 클릭할 때마다 value가 해당 날짜로 변경 */}
        <S.CustomCalendar
          // locale={moment.localeData()}
          onChange={onChange}
          value={value}
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => moment(date).format('D')}
          style={{
            // width: "430px",
            // height: "600px",
          }}
          tileContent={() => {(
                <>
                  <div className="flex justify-center items-center absoluteDiv">
                    <div className="dot"></div>
                  </div>
                </>
              );
          }}
        />
        <S.UnderBar />

        {/* <button className="react-calendar__tile">
          <div>확인</div>
        </button> */}
      </S.MyCalendarWrap>
    </>
  )
}