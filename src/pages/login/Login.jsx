import React, { useState } from "react";
import logoImg from "/usher_logo.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

export const Login = () => {
  const navigate = useNavigate();
  const [isEmail, setisEmail] = useState("");
  const [isPw, setisPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleJoin = () => {
    navigate("/join_1");
  };

  return (
    <Wrapper>
      <S.Bottomborder>
        <div>로그인</div>
        <S.RightFix>X</S.RightFix>
      </S.Bottomborder>
      <S.LoginSection>
        <S.LogoIMG src={logoImg} alt="logo" />
        <form onSubmit={handleSubmit}>
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
          <S.BlueBtn type="submit">로그인</S.BlueBtn>
        </form>
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
