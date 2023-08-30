import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const SelectedList = () => {
  const [isArea, setisArea] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2023-8-1"),
      endDate: new Date("2023-8-30"),
      key: "selection",
    },
  ]);
  const [isStartRange, setisStartRange] = useState(30000);
  const [isEndRange, setisEndRange] = useState(200000);
  const [isRangeClick,setisRangeClick] = useState(false);

  const formatDate = (date) => {
    return `${date.getMonth() + 1}.${date.getDate()}`;
  };

  return (
    <>
      <div>
        <span className="material-symbols-outlined">arrow_back</span>
        <p>뮤지컬</p>
      </div>
      <form>
        {/* area */}
        <select
          name="area"
          value={isArea}
          onChange={(e) => setisArea(e.target.value)}
        >
          <option value="seoul">서울</option>
          <option value="gyeonggi">경기</option>
          <option value="incheon">인천</option>
          <option value="gangwon">강원</option>
          <option value="chungcheong">충청</option>
          <option value="gyeongsang">경상</option>
          <option value="jeola">전라</option>
          <option value="jeju">제주</option>
        </select>
        {/* date */}
        {dateRange[0].startDate && dateRange[0].endDate ? (
          <div
            onClick={() =>
              setDateRange([
                {
                  startDate: new Date(),
                  endDate: null,
                  key: "selection",
                },
              ])
            }
          >
            {formatDate(dateRange[0].startDate)} ~{" "}
            {formatDate(dateRange[0].endDate)}
          </div>
        ) : (
          <DateRange
            ranges={dateRange}
            onChange={(ranges) => setDateRange([ranges.selection])}
          />
        )}
        {/* price */}
        {isStartRange && isEndRange ? 
          <div>
            {isStartRange}~{isEndRange}
          </div>:""}
            
          <div>
            <input
              type="range"
              name="startrange"
              value={isStartRange}
              min="30000"
              max={isEndRange}
              step="1000"
              onChange={(e) => setisStartRange(e.target.value)}
            />
            <input
              type="range"
              name="endrange"
              value={isEndRange}
              min={isStartRange}
              max="200000"
              step="1000"
              onChange={(e) => setisEndRange(e.target.value)}
            />
          </div>
      </form>
    </>
  );
};
