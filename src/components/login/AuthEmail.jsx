import React, { useState } from "react";
import * as S from "../../pages/login/style";
import { useSetRecoilState } from "recoil";
import axiosInstance from "../../api/axios";
import { accessTokenState } from "../../recoil/recoilState"; // AccessToken 상태를 정의한 파일

export const AuthEmail = () => {
  const [isEmail, setisEmail] = useState("");
  const [isSent, setIsSent] = useState(false); // 이메일이 발송되었는지 여부
  const setAccessToken = useSetRecoilState(accessTokenState); // 로그인 상태 업데이트

  const handleEmailSend = async () => {
    try {
      const response = await axiosInstance.post("/dj-rest-auth/registration/", {
        username: "테스트",
        email: isEmail,
        password1: "tsfsssfgsk1!",
        password2: "tsfsssfgsk1!",
      });
      console.log(response.data); // 백엔드에서 받은 access token
      setIsSent(true);
    } catch (error) {
      // 오류 처리
      console.error("이메일 확인 이메일 전송 중 오류 발생:", error);
      throw error;
    }
  };

  return (
    <S.TxtInput>
      <p>
        이메일 인증<span>*필수 항목</span>
      </p>
      <input
        type="email"
        name="email"
        value={isEmail}
        onChange={(e) => setisEmail(e.target.value)}
        placeholder="예) usher@kopis.mail"
        required
      />
      {!isSent ? (
        <S.MiniBlueBtn onClick={handleEmailSend}>인증번호 발송</S.MiniBlueBtn>
      ) : (
        <S.MiniGrayBtn onClick={handleEmailConfirm}>확인</S.MiniGrayBtn>
      )}
    </S.TxtInput>
  );
};
