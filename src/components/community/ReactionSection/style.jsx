import { styled } from "styled-components";

export const ReactionWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: #f8f8f8;
  padding: 0 15px;
  margin: 18px 0;
`;
export const InnerWrapper = styled.div`
  display: flex;
  color: #908f8f;
`;
export const ReactionBtn = styled.div`
  width: 50px;
`;
export const PurpleColor = styled.i`
  color: #a182d2;
  font-size: 1.2rem;
  margin-right: 3px;
`;
export const GrayColor = styled.i`
  color: #cccece;
  font-size: 1.2rem;
  margin-right: 3px;
`;

export const LikeBtn = styled.button`
  width: 88px;
  height: 34px;
  background-color: #fff;
  color: #a182d2;
  border: 1px solid #a182d2;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CmtSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  min-height: 80px;
  border-bottom: 1px solid #d7d7d7;
`;
export const CoCmtSection = styled(CmtSection)`
  border-bottom: 1px solid #d7d7d7;
`;
export const CmtBody = styled.div`
  color: #071d36;
  font-size: 16px;
`;
export const FlexRowBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 40px;
`;
export const CmtUsername = styled.span`
  color: #62686f;
  font-size: 14px;
  margin-right: 18px;
`;
export const CmtDate = styled.span`
  color: #8e9296;
  font-size: 12px;
  margin-right: 10px;
`;
export const CoCmtBtn = styled.div`
  position: absolute;
  right: -8px;
  bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 26px;
  color: #908f8f;
  font-size: 12px;
  border-radius: 5px;
  background: #f3f3f3;
  border: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const CoCmtBody = styled(CmtBody)`
  font-size: 18px;
`;
export const CoCmtArrow = styled.span`
  width: 14px;
  color: #ccc;
  margin-right: 15px;
`;
export const CoFlexRowBox = styled(FlexRowBox)`
  padding-left: 27px;
`;
export const WriterMark = styled.div`
  width: 45px;
  height: 18px;
  font-size: 10px;
  border-radius: 5px;
  background: #b485e2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CmtInput = styled.input`
  position: relative;
  width: 358px;
  height: 54px;
  border-radius: 5px;
  border: 0.5px solid #eef0f0;
  background: #fff;
  color: #071d36;
  font-size: 14px;
  padding-left: 15px;
`;
export const CmtInput2 = styled(CmtInput)`
  padding-left: 30px;
`;
export const CmtWrapper = styled.form`
  position: fixed;
  bottom: 0px;
  width: 410px;
  height: 74px;
  border-radius: 5px;
  border-bottom: 1px solid #eef0f0;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding-left: 10px;
`;
export const CmtPostBtnImg = styled.img``;
export const CmtPostBtn = styled.button`
  position: absolute;
  right: 0px;
  bottom: 5px;
  border: 0;
  background: #f8f8f8;
`;
export const CoCmtArrow2 = styled(CoCmtArrow)`
  position: absolute;
  top: 25px;
  left: 13px;
`;
