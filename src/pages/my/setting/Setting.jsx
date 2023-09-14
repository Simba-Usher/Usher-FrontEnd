import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyGrade } from "../../../components/my/mySetting/MyGrade";
import axiosInstance from "../../../api/axios";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";
import { Login } from "../../login/Login";

export const Setting = () => {
  const title = "기본 정보 수정";

  const Nickname = localStorage.getItem('nickname');
  console.log(Nickname);

  // 초기 기본정보 설정
  // const [saveNickname] = useState(Nickname);
  // const [saveCurrentPw] = useState("password1");
  // const [saveNewPw] = useState("");
  
  const accessToken = useRecoilValue(accessTokenState);

  const [nickname, setNickname] = useState(Nickname);
  // const [currentPw, setCurrentPw] = useState(saveCurrentPw);
  const [currentPw, setCurrentPw] = useState("");
  // const [newPw, setNewPw] = useState(saveNewPw);
  const [newPw, setNewPw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  // const [newNickname, setNewNickname] = useState();

  const handleNicknameChange = (e) => {
    // setNewNickname(e.target.value);
    setNickname(e.target.value);
  };
  const handleCurrentPwChange = (e) => {
    setCurrentPw(e.target.value);
  };
  const handleNewPwChange = (e) => {
    setNewPw(e.target.value);
  };
  const handleCheckPwChange = (e) => {
    setCheckPw(e.target.value);
  };

  // // 변경사항 저장
  // const handleSave = () => {
  //   if (newNickname && newNickname !== saveNickname) {
  //     localStorage.setItem('nickname', newNickname)
  //     setNickname(newNickname);
  //   }
  //   // console.log("새 닉네임:", nickname);
  //   if (newPw) {
  //     setCurrentPw(newPw);
  //     setNewPw("");
  //   }
  //   // console.log("새 비밀번호:", currentPw);
  // };

  // console.log("새 닉네임:", nickname);
  // console.log("새 비밀번호:", currentPw);

  // 변경사항 저장 함수
  const handleSave = () => {
    // PATCH 또는 PUT 요청 본문 데이터 생성
    const requestData = {
      nickname: nickname, // 수정된 닉네임
      current_password: currentPw, // 현재 비밀번호
      new_password: newPw, // 새 비밀번호
      // 다른 필드도 필요한 경우 추가
    };

    // Axios를 사용하여 백엔드 API로 요청 보내기
    axiosInstance.put('/api/mypage/profile', requestData)
      .then(response => {
        // 요청 성공 시 처리
        console.log("기본 정보 수정 성공:", response.data);
        // 수정된 닉네임을 로컬 스토리지에 저장
        localStorage.setItem('nickname', nickname);
      })
      .catch(error => {
        // 요청 실패 시 에러 처리
        console.error("기본 정보 수정 실패:", error);
      });
  };

  // 초기화
  const handleReset = () => {
    // setNickname(saveNickname);
    // setCurrentPw(saveCurrentPw);
    // setNewPw(saveNewPw);
    setNickname(Nickname);
    // setNewNickname(nickname);
    setCurrentPw("");
    setNewPw("");
    setCheckPw("");
  }

  // 기존의 데이터들이 이미 입력되어 있는 상태로 불러와져야 함 ...
  if (accessToken) {
    return (
      <Wrapper>
        <MyInnerNav title={title} />
        <MyGrade />
        <S.NameBox>
          <div>닉네임</div>
          <div>
            <input
              type="text"
              maxLength="6"
              // value={newNickname !== undefined ? newNickname : nickname}
              value={nickname}
              onChange={handleNicknameChange}
            />
            <p>※닉네임은 6자까지 입력 가능합니다</p>
          </div>
        </S.NameBox>
        <S.EmailBox>
          <div>대표 이메일</div>
          {/* 대표 이메일 불러오기 */}
          <div>musicismylife@gmail.com</div>
        </S.EmailBox>
        <S.SettingBox>
          <div>현재 비밀번호</div>
          <input
            type="password"
            placeholder="기존 비밀번호를 입력해주세요"
            value={currentPw}
            onChange={handleCurrentPwChange}
          />
        </S.SettingBox>
        <S.SettingBox>
          <div>비밀번호 변경</div>
          <input
            type="password"
            placeholder="새 비밀번호를 입력해주세요"
            value={newPw}
            onChange={handleNewPwChange}
          />
        </S.SettingBox>
        <S.SettingBox>
          <div>비밀번호 변경</div>
          <input
            type="password"
            placeholder="새 비밀번호를 다시 입력해주세요"
            value={checkPw}
            onChange={handleCheckPwChange}
          />
        </S.SettingBox>
        <div style={{ height: "64px" }}></div>
        <S.BtnBox>
          {/* 처음처럼 */}
          <S.ResetBtn onClick={handleReset}>초기화</S.ResetBtn>
          <S.DoneBtn onClick={handleSave}>변경완료</S.DoneBtn>
        </S.BtnBox>
      </Wrapper>
    );
  } else {
    return (
      <>
        <Login />
      </>
    )
  }
};
