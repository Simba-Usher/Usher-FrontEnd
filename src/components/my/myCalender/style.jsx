import { Calendar } from "react-date-range";
import { styled } from "styled-components";

// MyCalender.jsx
export const MyCalendarWrap = styled.div`
    /* border: 1px solid red; */
    width: 430px;
    height: 607px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CustomCalendar = styled(Calendar)`
    border-top: 2px solid #D8E0EC;
    border-bottom: 3px solid #D8E0EC;
`
export const UnderBar = styled.div`
    width: 80px;
    height: 10px;
    border-radius: 20px;
    background-color: #D8E0EC;
    margin-top: 42px;
    margin-bottom: 13px;
`
export const CalendarBarWrap = styled.div`
    width: 430px;
    height: 70px;
    background-color: #F2F5F9;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const ShowNumSec = styled.div`
    width: 205px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #D8E0EC;
    p:nth-child(1) {
        color: #818FA2;
        font-size: 18px;
        font-weight: 400;
    }
    p:nth-child(2) {
        color: #7749C3;
        font-size: 26px;
        font-weight: 600;
        padding: 8px;
    }
`
export const AddMemoSec = styled.div`
    color: #071D36;
    font-size: 16px;
    font-weight: 600;
    width: 205px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    border-bottom: 1px solid #D8E0EC;
    p {
        padding: 8px;
    }
`
// ShowCards.jsx
export const ShowCardsWrap = styled.div`
    width: 430px;
    height: 230px;
    border-bottom: 2px solid #C3CCDA;
    background-color: #FFF;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CardSec1 = styled.div`
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const DateBox = styled.div`
    width: 84px;
    height: 30px;
    border-radius: 10px;
    background: #985FD1;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding-left: 10px;
`
export const ToDetail = styled.div`
    color: #985FD1;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    p {
        padding-right: 8px;
    }
    img {
        width: 8px;
        height: 16px;
    }
`
export const CardSec2 = styled.div`
    width: 100%;
    height: 30px;
    color: #071D36;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    align-items: center;
`
export const CardSec3 = styled.div`
    width: 100%;
    height: 20px;
    color: #9C9FA3;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    p:nth-child(2) {
        padding: 0 7px;
    }
`
export const CardSec4 = styled.div`
    width: 410px;
    height: 95px;
    border-radius: 5px;
    background-color: #F2F5F9;
    padding: 11px;
    display: flex;
    flex-direction: row;
`
export const Memo = styled.input`
    width: 350px;
    border: none !important;
    outline: none !important;
    background-color: #F2F5F9;
`
export const MemoBtn = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    p {
        color: #B1B7BF;
        font-size: 12px;
        font-weight: 400;
        margin-top: 4px;
    }
    img {
        width: 18px;
        height: 18px;
    }
`

// MemoCards.jsx
export const DateBox2 = styled(DateBox)`
    background-color: #071D36;
`
export const Delete = styled(ToDetail)`
    color: #9C9FA3;
    font-size: 14px;
    font-weight: 400;
    img {
        width: 20px;
        height: 22.5px;
    }
`