import { styled } from "styled-components";

// MyInnerNav.jsx
export const MyInnerNavWrap = styled.div`
    /* border: 1px solid red; */
    width: 430px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 9.5px 25px 24px;
    img:nth-child(1) {
        width: 22px;
        height: 22px;
    }
    img:last-child {
        width: 28.5px;
        height: 19px;
    }
    p {
        color: #071D36;
        font-size: 24px;
        font-weight: 400;
        color: var(--, #071D36);
    }
`

// MyToggle.jsx
export const MyToggleWrap = styled.div`
    width: 430px;
    height: 90px;
    background-color: #F2F5F9;
    border-top: 2px solid #D8E0EC;
    padding: 20px 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ToggleBtn = styled.div`
    width: 140px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #CDD4DD;
    background: #FFF;
    color: #959CAA;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`

// NumBox.jsx
export const NumBoxWrap = styled.div`
    width: 430px;
    height: 56px;
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    div:nth-child(1) {
        color: #959CAA;
        font-size: 16px;
        font-weight: 400;
    }
    div:last-child {
        color: #7749C3;
        font-size: 24px;
        font-weight: 600;
    }
`