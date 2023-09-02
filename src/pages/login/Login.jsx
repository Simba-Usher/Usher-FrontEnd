import React, { useState } from "react";
import logoImg from "/usher_nav.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import axiosInstance from "../../api/axios";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil"; //상태 가져오기
import { accessTokenState } from "../../recoil/recoilState";

export const Login = () => {
  const navigate = useNavigate();
  const [isEmail, setisEmail] = useState("");
  const [isPw, setisPw] = useState("");
  const setAccessToken = useSetRecoilState(accessTokenState);

  const accessToken = useRecoilValue(accessTokenState); //상태 가져오기

  const handleSubmit = () => {
    navigate("/");
  };
  const handleJoin = () => {
    navigate("/join_1");
  };

  const login = async () => {
    try {
      const response = await axiosInstance.post("/dj-rest-auth/login/", {
        username: "테스트",
        email: isEmail,
        password: isPw,
      });

      const { key } = response.data;

      setAccessToken(key);

      alert("로그인 성공!" + key + "recoil: " + accessToken);
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <Wrapper>
      <S.Bottomborder>
        <div>로그인</div>
        <S.RightFix>X</S.RightFix>
      </S.Bottomborder>
      <S.LoginSection>
        <S.LogoIMG src={logoImg} alt="logo" />
        <S.InputSection>
          <input
            type="email"
            placeholder="이메일 입력"
            value={isEmail}
            onChange={(e) => setisEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호 (8-12 영문자 + 숫자 + 특수문자)"
            value={isPw}
            onChange={(e) => setisPw(e.target.value)}
            required
          />
        </S.InputSection>
        <S.IdSave>
          <input type="checkbox" name="id_save" />
          아이디 저장
        </S.IdSave>
        <S.BlueBtn onClick={login}>로그인</S.BlueBtn>
        <S.BlueTxt>비밀번호 찾기</S.BlueTxt>
        <S.TxtLine>어셔 계정이 없으신가요?</S.TxtLine>
        <S.SkyBlueBtn onClick={handleJoin}>회원가입</S.SkyBlueBtn>
        <S.TxtLine>
          또는 <S.Google></S.Google>
        </S.TxtLine>
        <S.LoginFooter>Copyright &copy; 심바씨들</S.LoginFooter>
      </S.LoginSection>
    </Wrapper>
  );
};
