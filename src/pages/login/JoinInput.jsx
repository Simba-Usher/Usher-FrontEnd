import React, { useState } from "react";
import logoImg from "/usher_logo.png";
import * as S from "./style";
import { Container } from "../../App";
import { useNavigate } from "react-router-dom";

export const JoinInput = () => {
  const [isName, setisName] = useState("");
  const [isEmail, setisEmail] = useState("");
  const [isEmailCheck, setisEmailCheck] = useState("");
  const [isPw, setisPw] = useState("");
  const [isPwCheck, setisPwCheck] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/success");
    e.preventDefault();
  };

  return (
    <Container>
      <S.Bottomborder>
        <S.LeftFix>
          <img src={logoImg} alt="logo" />
        </S.LeftFix>
        <div>회원가입</div>
        <S.RightFix>X</S.RightFix>
      </S.Bottomborder>
      <S.StepSection>
        Step 2. 회원 정보 입력
        <S.StepBtn3>1</S.StepBtn3>
        <S.StepBtn4>2</S.StepBtn4>
      </S.StepSection>
      <S.CommentSection>
        모든 <span>*필수 항목</span>을 입력해주세요.
      </S.CommentSection>
      <form onSubmit={handleSubmit}>
        <S.TxtInput>
          <p>
            이름<span>*필수 항목</span>
          </p>
          <input
            type="text"
            name="name"
            value={isName}
            onChange={(e) => setisName(e.target.value)}
            placeholder="이름을 입력해주세요"
            required
          />
        </S.TxtInput>
        <S.TxtInput>
          <p>
            이메일<span>*필수 항목</span>
          </p>
          <input
            type="email"
            name="email"
            value={isEmail}
            onChange={(e) => setisEmail(e.target.value)}
            placeholder="예) usher@kopis.mail"
            required
          />
        </S.TxtInput>
        <S.TxtInput>
          <p>
            이메일 인증<span>*필수 항목</span>
          </p>
          <input
            type="text"
            pattern="[0-9]*"
            name="emailcheck"
            value={isEmailCheck}
            onChange={(e) => setisEmailCheck(e.target.value)}
            placeholder="인증번호를 입력해주세요"
            required
          />
          <S.MiniBlueBtn>인증번호 전송</S.MiniBlueBtn>
          <S.MiniGrayBtn>확인</S.MiniGrayBtn>
        </S.TxtInput>
        <S.TxtInput>
          <p>
            비밀번호<span>*필수 항목</span>
          </p>
          <input
            type="password"
            name="password"
            value={isPw}
            onChange={(e) => setisPw(e.target.value)}
            placeholder="영문/숫자/특수문자 조합 가능 (8자 이상)"
            required
          />
        </S.TxtInput>
        <S.TxtInput>
          <p>
            비밀번호 확인<span>*필수 항목</span>
          </p>
          <input
            type="password"
            name="passwordcheck"
            value={isPwCheck}
            onChange={(e) => setisPwCheck(e.target.value)}
            placeholder="비밀번호를 다시 한번 입력해주세요"
            required
          />
        </S.TxtInput>
        <S.BottomBlueBtn>가입하기</S.BottomBlueBtn>
      </form>
    </Container>
  );
};
