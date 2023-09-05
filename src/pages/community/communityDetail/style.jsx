import { styled } from "styled-components";
import { NavArrow, WriteNav } from "../communityWrite/style";

export const CoDetailWrapper = styled.div`
  padding: 0 10px;
  padding-bottom: 74px; //댓글 height 만큼 내리기
`;
export const CoDetailNav = styled(WriteNav)`
  color: #04c0b4;
`;
export const CoNavArrow = styled(NavArrow)``;
export const DetailTitle = styled.div`
  color: #071d36;
  font-size: 24px;
  padding: 10px;
`;
export const DetailUserBox = styled.div`
  position: relative;
  width: 410px;
  height: 66px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: #f1fffb;
  color: #4e5766;
  font-size: 16px;
  padding: 14px;
  line-height: 1.2;
  span {
    color: #9199a4;
    font-size: 12px;
  }
`;
export const BodyWrapper = styled.div`
  margin: 0 20px;
`;
export const DetailGrayLine = styled.hr`
  border: 1px solid #ccc;
  padding: 0;
  width: 100%;
`;
export const DetailImg = styled.div`
  margin: 0 18px;
  height: 180px;
  display: flex;
  align-items: center;
  img {
    max-height: 180px;
    max-width: 100%;
  }
`;
export const DetailBody = styled.div`
  margin: 0 18px;
  min-height: 200px;
`;
export const MyWriteDeleteBtn = styled.div`
  position: absolute;
  top: 18px;
  right: 10px;
  width: 92px;
  height: 30px;
  border-radius: 5px;
  opacity: 0.9;
  background: #aaadb2;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  span {
    color: #fff;
    font-size: 16px;
    padding-left: 3px;
  }
`;
