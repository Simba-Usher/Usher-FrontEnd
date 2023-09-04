import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { OtherNav } from "../../components/layouts/otherNav/OtherNav";

export const Join_3 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/success");
    e.preventDefault();
  };

  return (
    <Wrapper>
      <OtherNav title="회원가입" />
      <S.Border />
      <S.StepSection>
        Step 3. 이메일 인증
        <S.StepBtn1>1</S.StepBtn1>
        <S.StepBtn2>2</S.StepBtn2>
        <S.StepBtn3 isselected="true">3</S.StepBtn3>
      </S.StepSection>
      <S.Join3Wrpper>
        <img src="/congratulation.png" alt="img" />
        <S.GuideTxt>
          거의 다 왔어요!
          <br />
          <br />
          인증 메일이 아래 메일 주소로 전송되었어요.
          <br />
          이메일 인증을 완료해주세요!
        </S.GuideTxt>
        <S.OurEmail>usher@kopis.mail</S.OurEmail>
        <S.AzaAza>어셔에 어셔오세요 ☺️</S.AzaAza>
      </S.Join3Wrpper>
      <S.BottomBlueBtn onClick={handleSubmit}>로그인하기</S.BottomBlueBtn>
    </Wrapper>
  );
};
