import React, { useEffect, useState } from "react";
import logoImg from "/usher_logo.png";
import * as S from "./style";
import { Container } from "../../App";
import { useNavigate } from "react-router-dom";

export const Join = () => {
  const [allcheck, setAllcheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const navigate = useNavigate();

  const handleAllCheck = (e) => {
    setAllcheck((prevAllcheck) => !prevAllcheck);
    if(e.target.checked){
      setCheck1(true)
      setCheck2(true)
      setCheck3(true)
      setCheck4(true)
    }else{
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setCheck4(false);
    }
  }
  useEffect(()=>{
    if(check1 &&check2 && check3 && check4){
      setAllcheck(true);
    }
  },[check1,check2,check3,check4])

  const handleSubmit = (e) => {
    navigate("/join_2")
    e.preventDefault();
  }

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
        Step 1. 약관 동의
        <S.StepBtn1>1</S.StepBtn1>
        <S.StepBtn2>2</S.StepBtn2>
      </S.StepSection>
      <S.MarginSection>
        회원가입을 위해 <span>약관 동의</span>가 필요해요.
      </S.MarginSection>
      <form onSubmit={handleSubmit}>
        <S.AllAgree>
          <p>
            전체 동의 <span>(선택 항목 포함)</span>
          </p>
          <input
            type="checkbox"
            name="all"
            checked={allcheck}
            onChange={handleAllCheck}
          />
        </S.AllAgree>
        <S.Checkbox>
          <p>이용약관 동의 (필수)</p>
          <input
            type="checkbox"
            name="1"
            checked={check1}
            onChange={() => setCheck1((prevCheck1) => !prevCheck1)}
            required
          />
        </S.Checkbox>
        <S.Checkbox>
          <p>만 14세 이상 확인 (필수)</p>
          <input
            type="checkbox"
            name="2"
            checked={check2}
            onChange={() => setCheck2((prevCheck2) => !prevCheck2)}
            required
          />
        </S.Checkbox>
        <S.Checkbox>
          <p>개인정보 수집 및 이용 동의 (필수)</p>
          <input
            type="checkbox"
            name="3"
            checked={check3}
            onChange={() => setCheck3((prevCheck3) => !prevCheck3)}
            required
          />
        </S.Checkbox>
        <S.Checkbox>
          <p>마케팅 알림 수신 동의 (선택)</p>
          <input
            type="checkbox"
            name="4"
            checked={check4}
            onChange={() => setCheck4((prevCheck4) => !prevCheck4)}
          />
        </S.Checkbox>
        <S.BottomBlueBtn>다음</S.BottomBlueBtn>
      </form>
    </Container>
  );
};
