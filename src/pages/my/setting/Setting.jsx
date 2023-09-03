import React from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyGrade } from "../../../components/my/mySetting/MyGrade";

export const Setting = () => {
  const title = "기본 정보 수정";

  // 기존의 데이터들이 이미 입력되어 있는 상태로 불러와져야 함
  return (
    <Wrapper>
      <MyInnerNav title={title} />
      <MyGrade />
      <S.NameBox>
        <div>닉네임</div>
        <div>
          <input />
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
        <input></input>
      </S.SettingBox>
      <S.SettingBox>
        <div>비밀번호 변경</div>
        <input></input>
      </S.SettingBox>
      <div style={{height: "150px"}}></div>
      <S.BtnBox>
        <S.ResetBtn>초기화</S.ResetBtn>
        <S.DoneBtn>변경완료</S.DoneBtn>
      </S.BtnBox>
    </Wrapper>
  );
};
