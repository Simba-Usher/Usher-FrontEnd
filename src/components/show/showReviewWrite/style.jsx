import { styled } from "styled-components";

// ChoiceTicket.jsx
export const TicketWrapper = styled.div`
  height: 441px;
  background: #e5efff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TicketWiteBox = styled.div`
  width: 90%;
  margin: 20px 10px;
  background: #fff;
  font-size: 20px;
  border: 1px solid #ccc;
`;
export const TicketSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  height: 119px;
  color: #2f78e4;
  padding-left: 20px;
`;
export const PositionRel = styled.div`
  position: relative;
`;
export const DropIcon = styled.i`
  position: absolute;
  font-size: 40px;
  color: #2f78e4;
  top: 38px;
  right: 15px;
`;
export const TicketInfo = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  font-size: 16px;
  color: ${(props) => (props.isselected === "true" ? "#071D36" : "#ccc")};
  border-bottom: 1px solid #ccc;
  background: #fff;
  padding-left: 20px;
`;
export const TicketTitle = styled(TicketInfo)`
  font-size: 20px;
`;
export const TicketListWrapper = styled.div`
  position: fixed;
`;
export const TicketSelectWrapper = styled.div`
  position: relative;
`;
export const CloseBtn = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;

// TicketList.jsx
export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 119px;
  width: 385px;
  border: 1px solid #ccc;
  background: #f5f6f8;
  font-size: 14px;
  padding: 0 10px;
  box-shadow: ${(props) =>
    props.islist == "true" ? "" : "0px 5px 5px 0px rgba(0, 0, 0, 0.25)"};
`;
export const ListTitle = styled.div`
  color: #071d36;
  font-size: 18px;
  padding-bottom: 15px;
`;
export const ListData = styled.div`
  display: flex;
  padding-bottom: 5px;
`;
export const ListTxt = styled.div`
  color: #969aa2;
  padding: 0 15px 0 10px;
`;
export const ListDate = styled.div`
  color: #626872;
`;
export const ListReviewFalse = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 90px;
  height: 30px;
  border-radius: 10px;
  background: #69a2f6;
`;
export const ListReviewTrue = styled(ListReviewFalse)`
  background: #cccece;
`;
