import { styled } from "styled-components";
import {
  ListData,
  ListDate,
  ListTitle,
  ListTxt,
} from "../../show/showReviewWrite/style";

export const TicketInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  border-bottom: 1px solid #d8e0ec;
  background: #f2f5f9;
`;
export const TicketBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  width: 398px;
  height: 40px;
  border-radius: 10px 10px 0 0;
  background: #efe9ff;
  color: #000;
  font-size: 14px;
  span {
    color: #6b2ed0;
    margin-left: 5px;
  }
`;
export const TicketBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  width: 398px;
  height: 94px;
  border-radius: 0 0 10px 10px;
  border: 1px solid #d8e0ec;
  background: #fff;
`;
export const TicketPostBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 184px;
  height: 44px;
  border-radius: 10px;
  background: ${(props) => (props.ischange == "true" ? "#6B2ED0" : "#b2b5ba")};
  color: #fff;
  font-size: 20px;
  margin-top: 23px;
  cursor: default;
`;
export const TicketInput = styled.input`
  padding: 0 20px;
  width: 360px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #6b2ed0;
  background: #fff;
  font-size: 16px;
  color: #6b2ed0;
  outline: none;
  &::placeholder {
    color: #cbd0d7;
  }
`;
// TicketDateDivide.jsx
export const TicketDivide = styled.span`
  color: ${(props) => (props.isselected == "true" ? "#7749c3" : "#cbd0d7")};
  font-size: 18px;
`;
export const TicketDivideLabel = styled.div`
  color: #cbd0d7;
  padding: 8px 0 12px 0;
  cursor: default;
`;
// TicketCard.jsx
export const TicketLine = styled.div`
  position: relative;
  display: flex;
  margin: 0 17px;
  border-left: 1px solid #d8e0ec;
  background-color: #fff;
  padding-bottom: 45px;
  margin-bottom: 15px;
`;
export const TicketCardWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 215px;
  padding: 15px;
  /* margin-left: 18px; */
  left: 18px;
  border-radius: 5px;
  border: 1px solid #d8e0ec;
  background: #fcf9ff;
`;
export const TicketCardCircle = styled.div`
  position: absolute;
  left: -5px;
  width: 11px;
  height: 11px;
  background-color: #6b2ed0;
  border-radius: 20px;
`;
export const TicketClose = styled.img`
  position: absolute;
  right: 12px;
`;
export const TicketTItle = styled.div`
  color: #071d36;
  font-size: 20px;
  padding-bottom: 20px;
`;
export const TicketCardDataLabel = styled(ListData)``;
export const TicketCardTxt = styled(ListTxt)`
  width: 95px;
  padding: 0;
`;
export const TicketCardData = styled(ListDate)``;
export const TicketLink = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 6px;
  cursor: default;
  color: #985fd1;
  font-size: 14px;
  span {
    color: #cdd4dd;
    font-size: 2rem;
  }
`;
