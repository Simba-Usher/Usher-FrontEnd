import { styled } from "styled-components";

// Setting.jsx
export const SettingBox = styled.div`
  width: 430px;
  height: 86px;
  display: flex;
  flex-direction: row;
  padding: 18px 24px;
  border-bottom: 1px solid #d8e0ec;
  div:nth-child(1) {
    color: #071d36;
    font-size: 16px;
    font-weight: 600;
    width: 106px;
    padding-top: 13px;
  }
  input {
    width: 276px;
    height: 50px;
    border-radius: 8px;
    background-color: #edf0f3;
    border: none;
    outline: none !important;
    padding: 0 11px;
  }
  input::placeholder {
    color: #536177;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const NameBox = styled(SettingBox)`
  height: 96px;
  border-top: 1px solid #d8e0ec;
  padding: 11px 24px;
  div:nth-child(1) {
    padding-top: 11px;
  }
  div:last-child {
    color: #959caa;
    font-size: 12px;
    font-weight: 400;
  }
  p {
    padding-top: 6px;
  }
`;
export const EmailBox = styled(SettingBox)`
  div:last-child {
    /* border: 1px solid red; */
    width: 276px;
    height: 50px;
    border: none;
    padding: 11px;
    align-items: center;
    color: #536177;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const BtnBox = styled.div`
  width: 430px;
  height: 100px;
  padding: 22px 24px 18px 24px;
  border-top: 2px solid #d8e0ec;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ResetBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #a4b3c9;
  background: #fff;
  color: #a4b3c9;
  font-size: 24px;
  font-weight: 400;
`;
export const DoneBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  background: #6b2ed0;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;
