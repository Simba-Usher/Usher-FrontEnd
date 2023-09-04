import { styled } from "styled-components";
import { FlexRowBox } from "../../community/ReactionSection/style";
import { sync } from "framer-motion";

export const WriteBtnSectionWrapper = styled.div`
  height: 226px;
  background: #f5f6f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlueTxt = styled.p`
  color: #598fdf;
  text-align: center;
  font-size: 14px;
`;
export const BlueWriteBtn = styled.div`
  width: 382px;
  height: 66px;
  border-radius: 10px;
  background: #598fdf;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-top: 20px;
`;
// ShowReviewCard.jsx
export const ReviewCardWrapper = styled.div`
  position: relative;
  margin: 15px;
  border-bottom: 2px solid #dde1e7;
`;
export const ReviewNotify = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  color: #b4bac1;
  font-size: 12px;
`;
export const ReviewWriter = styled.div`
  color: #3b4a5b;
  font-size: 20px;
`;
export const ReviewData = styled.div`
  color: #9eacc1;
  font-size: 12px;
`;
export const ReviewStars = styled.i`
  color: #ffc267;
  margin-right: 3px;
`;
export const ReviewRowBox = styled(FlexRowBox)`
  padding-top: 15px;
  color: #9eacc1;
  font-size: 12px;
  align-items: center;
  :last-child {
    margin-right: 10px;
  }
`;
export const ReviewContent = styled.div`
  position: relative;
  color: #071d36;
  font-size: 20px;
  span {
    position: absolute;
    right: 0;
    top: 5px;
    color: #b3b3b3;
    font-size: 16px;
  }
`;
export const ReviewRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 0;
  :last-child {
    //드롭다운 아이콘
    position: absolute;
    right: 10px;
    color: #b3b3b3;
    font-size: 35px;
  }
`;
export const SmallBlueTxt = styled.div`
  color: #69a2f6;
  font-size: 14px;
`;
export const SmallBlueIcon = styled.span`
  color: #69a2f6;
  font-size: 18px;
  margin-right: 3px;
`;
export const SmallGrayTxt = styled.div`
  color: #9eacc1;
  font-size: 14px;
`;
// ShowReviewDetail.jsx
export const ReviewDetailWrapper = styled.div`
  position: relative;
  border-top: 2px solid #dde1e7;
  border-bottom: 2px solid #c6cfdc;
  background: #f8f8f8;
  padding: 15px 10px;
  padding-bottom: 50px; //댓글쓰기, 공감 버튼
`;
export const ReviewDetailGrayTxt = styled.div`
  color: #969aa2;
  width: 79px;
  margin-right: 10px;
`;
export const ReviewDetailRowBox = styled.div`
  display: flex;
  align-items: center;
  color: #626872;
  font-size: 14px;
  padding-bottom: 5px;
`;
export const ReviewDetailContent = styled.div`
  padding: 10px 0;
  color: #071d36;
  font-size: 16px;
`;
export const ReviewDetailCmtBtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 34px;
  right: 90px;
  bottom: 10px;
  border-radius: 5px;
  border: 1px solid #9ba2ad;
  background: #fff;
  color: #9ba2ad;
  font-size: 14px;
  cursor: default;
  * {
    font-size: 15px;
    margin-right: 3px;
  }
`;
export const ReviewDetailLikeBtn = styled(ReviewDetailCmtBtn)`
  color: #69a2f6;
  width: 70px;
  right: 10px;
  * {
    font-size: 18px;
  }
`;
export const ReviewCmtSection = styled.div`
  border-bottom: 1px solid #bac2cc;
  background: #edeef2;
  min-height: 80px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ReviewCmtCentent = styled.div`
  color: #071d36;
  font-size: 18px;
`;
export const ReviewCmtData = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;
export const ReviewCmtWriter = styled.span`
  width: 80px;
  font-size: 14px;
  color: #62686f;
  margin-right: 5px;
`;
export const ReviewCmtDate = styled.span`
  color: #8e9296;
  font-size: 12px;
  margin-right: 10px;
`;
export const ReviewWriterCmt = styled.div`
  color: #fff;
  font-size: 12px;
  width: 50px;
  height: 18px;
  border-radius: 5px;
  background: #b485e2;
  text-align: center;
`;
// input section
export const ReviewCmtWrapper = styled.form`
  position: relative;
  height: 74px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background: #e2e3e6;
`;
export const ReviewCmtPostBtn = styled.button`
  position: absolute;
  right: 12px;
  bottom: 10px;
  border: 0;
  background: #6099ef;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  width: 60px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ReviewCmtInput = styled.input`
  position: relative;
  width: 80%;
  height: 54px;
  border-radius: 5px;
  border: 0.5px solid #c6cfdc;
  background: #fff;
  color: #071d36;
  font-size: 14px;
  padding-left: 15px;
`;