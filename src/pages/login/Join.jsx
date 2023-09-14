import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { OtherNav } from "../../components/layouts/otherNav/OtherNav";

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
    }else setAllcheck(false);
  },[check1,check2,check3,check4])

  const handleSubmit = (e) => {
    navigate("/join_2")
    e.preventDefault();
  }

  return (
    <Wrapper>
      <OtherNav title="회원가입" />
      <S.Border />
      <S.StepSection>
        Step 1. 약관 동의
        <S.StepBtn1 isselected="true">1</S.StepBtn1>
        <S.StepBtn2>2</S.StepBtn2>
        <S.StepBtn3>3</S.StepBtn3>
      </S.StepSection>
      <S.MarginSection>
        회원가입을 위해 <span>약관 동의</span>가 필요해요.
      </S.MarginSection>
      <form>
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
          <p>
            <S.Underline>이용약관 동의</S.Underline>{" "}
            <S.NoneUnderline>(필수)</S.NoneUnderline>
          </p>
          <input
            type="checkbox"
            name="1"
            checked={check1}
            onChange={() => setCheck1((prevCheck1) => !prevCheck1)}
            required
          />
        </S.Checkbox>
        <S.Checkbox>
          <p>
            <S.Underline>만 14세 이상 확인</S.Underline>{" "}
            <S.NoneUnderline>(필수)</S.NoneUnderline>
          </p>
          <input
            type="checkbox"
            name="2"
            checked={check2}
            onChange={() => setCheck2((prevCheck2) => !prevCheck2)}
            required
          />
        </S.Checkbox>
        <S.Checkbox>
          <p>
            <S.Underline>개인정보 수집 및 이용 동의</S.Underline>{" "}
            <S.NoneUnderline>(필수)</S.NoneUnderline>
          </p>
          <input
            type="checkbox"
            name="3"
            checked={check3}
            onChange={() => setCheck3((prevCheck3) => !prevCheck3)}
            required
          />
        </S.Checkbox>
        <S.Checkbox>
          <p>
            <S.Underline>마케팅 알림 수신 동의</S.Underline>{" "}
            <S.NoneUnderline>(선택)</S.NoneUnderline>
          </p>
          <input
            type="checkbox"
            name="4"
            checked={check4}
            onChange={() => setCheck4((prevCheck4) => !prevCheck4)}
          />
        </S.Checkbox>
        <S.BottomBlueBtn onClick={handleSubmit}>다음</S.BottomBlueBtn>
      </form>
    </Wrapper>
  );
};
