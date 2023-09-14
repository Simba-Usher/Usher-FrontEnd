import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import axiosInstance from "../../api/axios";
import { OtherNav } from "../../components/layouts/otherNav/OtherNav";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { joinemailState } from "./join_email";

export const JoinInput = () => {
  const setJoinemailState = useSetRecoilState(joinemailState);
  const joinemail = useRecoilValue(joinemailState);

  const navigate = useNavigate();
  const [isName, setisName] = useState("");
  const [isEmail, setisEmail] = useState("");
  const [isPw, setisPw] = useState("");
  const [isPwCheck, setisPwCheck] = useState("");
  //const [isSent, setIsSent] = useState(false); // 이메일이 발송되었는지 여부
/*
  const handleEmailSend = () => {
    navigate("/join_3");
  };
  */
  const handleEmailSend = async () => {
    try {
      const response = await axiosInstance.post(
        "/api/dj-rest-auth/registration/",
        {
          username: isName,
          email: isEmail,
          password1: isPw,
          password2: isPwCheck,
        }
      );
      console.log(response.data);
      navigate("/join_3");
      setJoinemailState(isEmail);
    } catch (error) {
      // 오류 처리
      console.error("이메일 확인 이메일 전송 중 오류 발생:", error);
      throw error;
    }
  };

  return (
    <Wrapper>
      <OtherNav title="회원가입" />
      <S.Border />
      <S.StepSection>
        Step 2. 회원 정보 입력
        <S.StepBtn1>1</S.StepBtn1>
        <S.StepBtn2 isselected="true">2</S.StepBtn2>
        <S.StepBtn3>3</S.StepBtn3>
      </S.StepSection>
      <S.CommentSection>
        모든 <span>*필수 항목</span>을 입력해주세요.
      </S.CommentSection>
      <S.TxtInput>
        <p>
          닉네임<span>*필수 항목</span>
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
        <S.EmailGuide>
          입력한 이메일로 인증 링크가 전송될 예정입니다.
          <br />
          인증 링크를 수신 가능한 <span>올바른 이메일 주소</span>를
          입력해주세요.
        </S.EmailGuide>
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
      <S.BottomBlueBtn onClick={handleEmailSend}>
        인증 메일 발송
      </S.BottomBlueBtn>
    </Wrapper>
  );
};
