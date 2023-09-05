import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyGrade } from "../../../components/my/mySetting/MyGrade";

export const Setting = () => {
  const title = "기본 정보 수정";

  // 초기 기본정보 설정
  const [saveNickname] = useState("이름1");
  const [saveCurrentPw] = useState("password1");
  const [saveNewPw] = useState("");

  const [nickname, setNickname] = useState(saveNickname);
  const [currentPw, setCurrentPw] = useState(saveCurrentPw);
  const [newPw, setNewPw] = useState(saveNewPw);

  const [newNickname, setNewNickname] = useState();

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };
  const handleCurrentPwChange = (e) => {
    setCurrentPw(e.target.value);
  };
  const handleNewPwChange = (e) => {
    setNewPw(e.target.value);
  };

  // 변경사항 저장
  const handleSave = () => {
    if (newNickname && newNickname !== saveNickname) {
      // setNewNickname(nickname);
      setNickname(newNickname);
    }
    // console.log("새 닉네임:", nickname);
    if (newPw) {
      setCurrentPw(newPw);
      setNewPw("");
    }
    // console.log("새 비밀번호:", currentPw);
  };

  console.log("새 닉네임:", nickname);
  console.log("새 비밀번호:", currentPw);

  // 초기화
  const handleReset = () => {
    // setNickname(saveNickname);
    // setCurrentPw(saveCurrentPw);
    // setNewPw(saveNewPw);
    setNewNickname(nickname);
    setCurrentPw(currentPw);
    setNewPw("");
  }

  // 기존의 데이터들이 이미 입력되어 있는 상태로 불러와져야 함 ...
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
            value={newNickname !== undefined ? newNickname : nickname}
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
          type="text"
          value={currentPw}
          onChange={handleCurrentPwChange}
        />
      </S.SettingBox>
      <S.SettingBox>
        <div>비밀번호 변경</div>
        <input
          type="text"
          value={newPw}
          onChange={handleNewPwChange}
        />
      </S.SettingBox>
      <div style={{height: "150px"}}></div>
      <S.BtnBox>
        {/* 처음처럼 */}
        <S.ResetBtn onClick={handleReset}>초기화</S.ResetBtn>
        <S.DoneBtn onClick={handleSave}>변경완료</S.DoneBtn>
      </S.BtnBox>
    </Wrapper>
  );
};
