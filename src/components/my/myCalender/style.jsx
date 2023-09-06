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
    /* border: 1px solid red; */
    padding: 0 10px;
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
export const BlankSec = styled.div`
    width: 80px;
    height: 100%;
    border-bottom: 1px solid #D8E0EC;
`
export const AddMemoSec = styled.div`
    color: #071D36;
    font-size: 16px;
    font-weight: 600;
    width: 145px;
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
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background: #985FD1;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
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
export const Memo = styled.div`
    width: 350px;
    border: none !important;
    /* outline: none !important; */
    background-color: #F2F5F9;
    color: #071D36;
    font-size: 14px;
    font-weight: 400;
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

// AddMemo.jsx
export const AddMemoWrap = styled.div`
    width: 380px;
    height: 660px;
    border-radius: 10px;
    border: 1px solid #E5DCFF;
    background: #FFF;
    position: fixed;
    top: 175px;
    left: 25px;
    z-index: 12;
    padding: 0 16px;
`
export const TopSec = styled.div`
    width: 348px;
    height: 63px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #071D36;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid #DDE1E7;
    img {
        width: 22px;
        height: 22px;
    }
`
export const MemoSec = styled.div`
    width: 348px;
    height: 84px;
    border-bottom: 1px solid #DDE1E7;
    display: flex;
    flex-direction: column;
    padding: 12px 0 26px 0;
    p {
        color: #737A83;
        font-size: 16px;
        font-weight: 500;
        margin-left: 2px;
    }
    input {
        color: #68666A;
        font-size: 20px;
        font-weight: 400;
        border: none;
        outline: none;
    }
`
export const DateBox3 = styled(MemoSec)`
    p:last-child {
        color: #985FD1;
        font-size: 20px;
        font-weight: 400;
    }
`
export const MemoBox = styled(MemoSec)`
    height: 254px;
    position: relative;
    input {
        height: 202px;
        color: #071D36;
        font-size: 20px;
        font-weight: 400;
        display: flex;
    }
    input::placeholder {
        position: absolute;
        top: 0;
    }
`
export const BtnSec = styled.div`
    width: 348px;
    height: 91px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 14px;
    padding-bottom: 22px;
`
export const ResetBtn = styled.button`
    width: 137px;
    height: 55px;
    border-radius: 5px;
    border: 1px solid #A2B4CF;
    background: #FFF;
    color: #9DA6B6;
    font-size: 24px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DoneBtn = styled.button`
    width: 200px;
    height: 55px;
    border: none;
    border-radius: 5px;
    background-color: #985FD1;
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
`

// EditMemo.jsx
export const DateBox4 = styled(DateBox3)`
        p:last-child {
        color: #071D36;
        font-size: 20px;
        font-weight: 400;
    }
`
export const EditBtn = styled(DoneBtn)`
    background-color: #071D36;
`