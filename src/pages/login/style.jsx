import { styled } from "styled-components";

export const Bottomborder = styled.div`
  position: relative;
  display: flex;
  /* height: 10%; */
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 3px solid #a2b4cf;
  padding: 30px;
`;
export const Border = styled.hr`
  border: 1px solid #a2b4cf;
  margin: 0;
`;
export const RightFix = styled.div`
  position: absolute;
  right: 5%;
  span {
    font-size: 2rem;
  }
`;
export const LogoIMG = styled.img`
  width: 40%;
`;
export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const InputSection = styled.div`
  /* height: 130px; */
  border-radius: 10px;
  border: 2px solid #a2b4cf;
  background: #f3f8ff;
  margin: 20px 0;
  input {
    padding: 0 15px;
    width: 100%;
    height: 60px;
    border: 0;
    background: #f3f8ff;
    outline: none;
    &::placeholder {
      color: #a2b4cf;
    }
  }
  :nth-child(1) {
    border-bottom: 2px solid #a2b4cf;
  }
  input:nth-child(1) {
    border-radius: 10px 10px 0 0;
  }
  input:nth-child(2) {
    border-radius: 0 0 10px 10px;
  }
`;
export const IdSave = styled.label`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  input {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
export const BlueBtn = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #a2b4cf;
  background-color: #1270b0;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const SkyBlueBtn = styled(BlueBtn)`
  background-color: #f3f8ff;
  color: #111;
  margin: 20px 0;
`;
export const BlueTxt = styled.div`
  height: 40px;
  margin: 15px;
  color: #779ed8;
`;
export const TxtLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  color: #a2b4cf;

  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background-color: #111;
    height: 5px;
    margin: 0px 16px;
  }
`;
export const Google = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 40px;
  background-color: #f3f8ff;
  margin-left: 20px;
`;
export const LoginFooter = styled.p`
  font-size: 0.8rem;
  color: #bbb;
`;

export const StepSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f3f8ff;
  color: #004f85;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
`;
export const StepBtn1 = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 40px;
  background-color: ${(props) =>
    props.isselected === "true" ? "#004f85" : "#fff"};
  color: ${(props) => (props.isselected === "true" ? "#fff" : "#A2B4CF")};
  position: absolute;
  right: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;
export const StepBtn2 = styled(StepBtn1)`
  right: 90px;
`;
export const StepBtn3 = styled(StepBtn1)`
  right: 40px;
`;
export const Checkbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  color: #a2b4cf;
  font-size: 1.1rem;
  margin: 15px 10px;
  input {
    width: 30px;
    height: 30px;
  }
`;
export const Underline = styled.span`
  text-decoration: underline;
`;
export const NoneUnderline = styled.span`
  text-decoration: none;
`;
export const MarginSection = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin: 70px 0 40px 0;
  color: #a2b4cf;
  span {
    color: #1270b0;
  }
`;
export const CommentSection = styled(MarginSection)`
  text-align: start;
  margin: 20px 0 30px 20px;
`;
export const AllAgree = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f8ff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 20px;
  padding: 0 20px;
  border-radius: 10px;
  height: 70px;
  color: #004f85;
  span {
    color: #a2b4cf;
    font-size: 1.1rem;
    font-weight: 400;
  }
  input {
    width: 30px;
    height: 30px;
    margin-left: 20px;
  }
`;
export const BottomBlueBtn = styled(BlueBtn)`
  position: absolute;
  bottom: 20px;
  width: 95%;
  margin-left: 10px;
  z-index: 100;
`;
export const SuccessBtn = styled(BottomBlueBtn)`
  background: linear-gradient(90deg, #53acea 0%, #7063bc 100%);
`;
export const TxtInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 30px;
  position: relative;
  p {
    padding-left: 10px;
    color: #004f85;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  span {
    color: #a2b4cf;
    font-size: 1rem;
    font-weight: 400;
  }
  input {
    border-radius: 5px;
    background: #ecf0f5;
    width: 370px;
    height: 60px;
    border: 0;
    font-size: 1rem;
    padding-left: 15px;
    &::placeholder {
      color: #8e9eb6;
    }
  }
`;
export const EmailGuide = styled.div`
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px dashed #0083dc;
  background: #fff;
  width: 370px;
  height: 54px;
  color: #8e9eb6;
  font-size: 12px;
  span {
    color: #0083dc;
    font-size: 12px;
  }
`;
export const MiniBlueBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  right: 65px;
  top: 55px;
  width: 100px;
  height: 31px;
  cursor: default;
  border-radius: 10px;
  background: #1270b0;
  color: #fff;
  border: 0;
  box-shadow: 0px 2px 2px 0px #0000003f;
`;
export const MiniGrayBtn = styled(MiniBlueBtn)`
  width: 48px;
  height: 31px;
  background: #8e9eb6;
  right: 11px;
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 100%; /* 부모 요소에 꽉 차게 설정 */
  max-width: 430px; /* 원하는 최대 너비 설정 */
`;
export const SuccessImg = styled.img`
  width: 100%; /* 이미지를 부모 요소에 꽉 차게 설정 */
  height: auto; /* 이미지 원본 비율 유지 */
  display: block;
`;
export const Join3Wrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 650px;
`;
export const GuideTxt = styled.div`
  text-align: center;
  margin: 30px 0;
`;
export const OurEmail = styled.div`
  width: 370px;
  height: 50px;
  border-radius: 5px;
  background: #ecf0f5;
  color: #67768c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
export const AzaAza = styled.p`
  color: #1270b0;
  text-align: center;
  font-size: 18px;
  height: 200px;
  padding-top: 200px;
`;
