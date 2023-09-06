import React, { useState } from "react";
import * as S from "./style";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { PriceRangeMax, PriceRangeMax2, PriceRangeMin, PriceRangeMin2, PriceRangeWrap, PriceRangeWrap2, PriceSlide, PriceSlide2, PriceSlideInner } from "../searchmodal/style";

export const SelectedList = ({
  // rangeMinValue,
  // setRangeMinValue,
  // rangeMaxValue,
  // setRangeMaxValue,
}) => {
  const [isArea, setisArea] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2023-8-1"),
      endDate: new Date("2023-8-30"),
      key: "selection",
    },
  ]);
  // const [isStartRange, setisStartRange] = useState(30000);
  const [rangeMinValue, setRangeMinValue] = useState(0);
  // const [isEndRange, setisEndRange] = useState(200000);
  const [rangeMaxValue, setRangeMaxValue] = useState(300000);
  const [isRangeClick, setisRangeClick] = useState(false);

  const formatDate = (date) => {
    return `${date.getMonth() + 1}.${date.getDate()}`;
  };

  // 가격바
  // 막대의 left, right 값으로 줄 백분율
  const [rangeMinPercent, setrangeMinPercent] = useState(0);
  const [rangeMaxPercent, setrangeMaxPercent] = useState(0);

  const priceGap = 20000;

  const priceRangeMinValueHandler = (e) => {
    setRangeMinValue(parseInt(e.target.value));
  };
  const priceRangeMaxValueHandler = (e) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  // onChange -> 현재값을 막대의 left, right 값으로 주기위해 백분율로
  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } else {
      setrangeMinPercent((rangeMinValue / 200000) * 100);
      // setrangeMinPercent((rangeMinValue / fixedMaxPrice) * 100);
      setrangeMaxPercent(100 - (rangeMaxValue / 200000) * 100);
      // setrangeMaxPercent(100 - (rangeMaxValue / fixedMaxPrice) * 100);
    }
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
          {rangeMinValue.toLocaleString()} ~ {rangeMaxValue.toLocaleString()}
          {/* {isStartRange.toLocaleString()} ~ {isEndRange.toLocaleString()} */}
          <S.DropDown className="material-symbols-outlined">
            expand_more
          </S.DropDown>
        </S.priceDesign>
        {isRangeClick && (
          <S.InputBar>
            {/* 하나로 합치기 */}
            <div>
              <PriceSlide2>
                <PriceSlideInner
                  className="gradient"
                  rangeMinPercent={rangeMinPercent}
                  rangeMaxPercent={rangeMaxPercent}
                />
              </PriceSlide2>
              <PriceRangeWrap2>
                <PriceRangeMin2
                  type="range"
                  min="0"
                  // min={fixedMinPrice}
                  max={200000 - priceGap}
                  // max={fixedMaxPrice - priceGap}
                  step="1000"
                  value={rangeMinValue}
                  onChange={(e) => {
                    priceRangeMinValueHandler(e);
                    twoRangeHandler();
                  }}
                />
                <PriceRangeMax2
                  type="range"
                  min={priceGap}
                  // min={fixedMinPrice + priceGap}
                  max="200000"
                  // max={fixedMaxPrice}
                  step="1000"
                  value={rangeMaxValue}
                  onChange={(e) => {
                    priceRangeMaxValueHandler(e);
                    twoRangeHandler();
                  }}
                />
              </PriceRangeWrap2>
            </div>
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
