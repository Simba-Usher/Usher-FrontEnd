import { styled } from "styled-components";
import { FlexRow } from "../../community/communityWrite/style";

export const ReviewWriteNav = styled.div`
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  color: #76777a;
  font-size: 20px;
  color: #76777a;
  font-size: 1.3rem;
  cursor: default;
`;
export const ReviewPost = styled.div`
  position: absolute;
  right: 15px;
  color: ${(props) => (props.isselected == "true" ? "#fff" : "#747a80")};
  width: 70px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #747a80;
  background: ${(props) => (props.isselected == "true" ? "#111" : "#eff1f3")};
  /* background: #eff1f3; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
export const ReviewWriteSection = styled.div`
  border-top: 3px solid #ccc;
  border-bottom: 3px solid #ccc;
  margin: 30px 10px;
  display: flex;
  flex-direction: column;
`;
export const FlexRow_ = styled(FlexRow)`
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
`;
export const StarTxt = styled.div`
  color: #7f858e;
  font-size: 16px;
  padding: 0 20px 0 5px;
`;
export const StarInput = styled.input`
  border: 2px solid #ffebce;
  color: #ffc267;
  font-weight: 600;
  border-radius:15px;
  padding-left: 7px;
  margin-right: 5px;
  width: 40px;
  height: 30px;
  text-align: center;
`;
export const StarIcon = styled.i`
  color: #ffc267;
  font-size: 22px;
`;
export const Txtarea = styled.textarea`
  resize: none;
  width: 95%;
  min-height: 230px;
  padding: 10px;
  margin: 10px auto;
  border: 0;
`;
