import { styled } from "styled-components";

export const HomeLine = styled.hr`
  border: 1px solid #ebebeb;
`;
export const BannerContainer = styled.div`
  position: relative;
  width: 100%; /* 부모 요소에 꽉 차게 설정 */
  max-width: 430px; /* 원하는 최대 너비 설정 */
  height: 230px;
`;
export const BannerImg = styled.img`
  width: 100%; /* 이미지를 부모 요소에 꽉 차게 설정 */
  height: auto; /* 이미지 원본 비율 유지 */
  display: block;
`;

export const HomeArticle = styled.div`
  width: 100%;
  color: #062b56;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 20px;
  p {
    margin-bottom: 20px;
  }
`;
export const ShowGenre = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 400;
  color: #053b8c;
  cursor: default;
  width: 70px;
  img {
    max-width: 34px;
    height: 30px;
    margin: 15px 0 10px 0;
  }
`;
export const SmallImg = styled.img`
  width: 23px;
  height: 30px;
`;

export const AreaArticle = styled.div`
  margin-bottom: 10px;
`;
export const AreaImg = styled.div`
  position: relative;
  p {
    position: absolute;
    bottom: -22px;
    left: 17px;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    width: 65px;
    height: 20px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 2px 2px 0px #0000003f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const FakeMargin = styled.div`
  height: 8px;
`;
export const HomeArticle_nomargin = styled(HomeArticle)`
  padding-bottom: 0;
`;

export const ReacionArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 400;
  margin-top: 20px;
`;
export const PurpleBtn = styled.div`
  width: 120px;
  height: 28px;
  display: flex;
  align-items: center;
  margin: 5px;
  padding-left: 2px;
  border-radius: 5px;
  cursor: default;
  background-color: #e5dcff;
  border: ${(props) => props.isclicked == "true" && "2px solid #985fd1"};
  box-shadow: ${(props) =>
    props.isclicked == "true" && "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"};
  span {
    font-size: 0.9rem;
    background-color: #fff;
    border-radius: 40px;
    width: 18px;
    height: 18px;
    text-align: center;
    color: #b485e2;
    padding-top: 2px;
    margin-right: 4px;
    margin-left: 2px;
  }
`;
export const BlueReBtn = styled(PurpleBtn)`
  background-color: #e0ecff;
  border: ${(props) => props.isclicked == "true" && "2px solid #598FDF"};
  span {
    color: #598fdf;
  }
`;
export const GreenReBtn = styled(PurpleBtn)`
  background-color: #c8ffef;
  /* border:2px solid #35D4CA; */
  border: ${(props) => props.isclicked == "true" && "2px solid #35D4CA"};
  span {
    color: #35d4ca;
  }
`;
export const ClosePoster = styled.span`
  position: absolute;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  top: 5px;
  right: 10px;
`;
