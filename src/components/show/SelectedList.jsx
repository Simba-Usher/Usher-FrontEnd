import React, { useState } from "react";
import * as S from "./style";
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
  const [isRangeClick, setisRangeClick] = useState(false);

  const formatDate = (date) => {
    return `${date.getMonth() + 1}.${date.getDate()}`;
  };

  return (
    <>
      <S.SelectedListContainer>
        {/* area */}
        <S.SelectDesign
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
        </S.SelectDesign>

        {/* date */}
        {dateRange[0].startDate && dateRange[0].endDate ? (
          <S.DateDesign
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
            <S.DropDown className="material-symbols-outlined">
              expand_more
            </S.DropDown>
          </S.DateDesign>
        ) : (
          <DateRange
            ranges={dateRange}
            onChange={(ranges) => setDateRange([ranges.selection])}
            style={{ zIndex: "100" }}
          />
        )}

        {/* price */}
        <S.priceDesign
          onClick={() =>
            setisRangeClick((prevIsRangeClick) => !prevIsRangeClick)
          }
        >
          {isStartRange.toLocaleString()} ~ {isEndRange.toLocaleString()}
          <S.DropDown className="material-symbols-outlined">
            expand_more
          </S.DropDown>
        </S.priceDesign>
        {isRangeClick && (
          <S.InputBar>
            <input
              type="range"
              name="startrange"
              value={isStartRange.toLocaleString()}
              min="30000"
              max={isEndRange}
              step="1000"
              onChange={(e) => setisStartRange(e.target.value.toLocaleString())}
            />
            <input
              type="range"
              name="endrange"
              value={isEndRange.toLocaleString()}
              min={isStartRange}
              max="200000"
              step="1000"
              onChange={(e) => setisEndRange(e.target.value.toLocaleString())}
            />
          </S.InputBar>
        )}
      </S.SelectedListContainer>
      <S.GrayLine />
      <S.SelectedReaction>
        <div>
          <i className="far fa-times-circle" />
          노래·넘버가 좋아요
        </div>
        <div>
          <i className="far fa-times-circle" />
          극장 안이 깨끗해요
        </div>
        <div>
          <i className="far fa-times-circle" />
          대중교통 이용 편리
        </div>
        <S.PlusIcon src="/plusIcon.png" alt="plus" />
      </S.SelectedReaction>
      <S.BoldLine />
    </>
  );
};
