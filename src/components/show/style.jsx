import { styled } from "styled-components";

// PosterSection.jsx
export const PosterSecWrap = styled.div`
    width: 430px;
    height: 362px;
    display: flex;
    position: relative;
`
export const PosterImg = styled.img`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 430px;
    height: 362px;
    object-fit: cover;
`
export const AvgStar = styled.div`
    width: 75px;
    height: 29px;
    border-radius: 30px;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    position: absolute;
    left: 19px;
    top: 305px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
// TitleSection.jsx 
export const TitleSecWrap = styled.div`
    width: 430px;
    height: 176px;
    position: relative;
    top: -18px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #FFF;
    border-top: 1px solid #779ED8;
    border-bottom: 2px solid #D9D9D9;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
`
export const TitleSec1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    margin: 14px 0 10px 0;
    align-items: center;
    justify-content: space-between;
`
export const GenreBox = styled.div`
    width: 74px;
    height: 22px;
    border-radius: 50px;
    background: #DED2FF;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    color: #071D36;
`
export const AreaBox = styled(GenreBox)`
    background: #DFE5EE;
`
export const EtcBox = styled.div`
    width: 225px;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 25px;
`
export const EtcBtns = styled.img`
    margin-left: 15px;
`
export const TitleSec2 = styled.div`
    display: flex;
    width: 100%;
    height: 39px;
    color: #001F35;
    font-size: 32px;
    font-weight: 600;
    align-items: center;
`
export const TitleSec3 = styled.div`
    width: 100%;
    height: 19px;
    margin: 4px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #616161;
    font-size: 16px;
    font-weight: 500;
    position: relative;
`
export const TrophyTag = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`
export const TitleSec4 = styled.div`
    width: 100%;
    height: 19px;
    margin: 25px 0 13px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
`
// DetailNav.jsx
export const DetailNavWrap = styled.div`
    /* border: 1px solid red; */
    width: 430px;
    height: 54px;
    padding: 7px 20px;
`
export const InfoNav = styled.div`
    width: 390px;
    height: 40px;
    border-radius: 50px;
    border: 2px solid #DBDBDB;
    background-color: rgba(119, 158, 216, 0.00);
    display: flex;
    flex-direction: row;
`
export const NavSec = styled.div`
    width: 130px;
    height: 36px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
// ReactionSection.jsx
export const ReactionSecWrap = styled.div`
    /* border: 1px solid red; */
    width: 430px;
    height: 310px;
    padding: 18px 24px;
    margin-top: 2px;
    border-bottom: 2px solid #DBDBDB;
    background-color: rgba(119, 158, 216, 0.00);
`
export const TapTitle = styled.div`
    width: 100%;
    height: 30px;
    color: #062B56;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
`
export const ReactionBox = styled.div`
    width: 382px;
    height: 183px;
    border-radius: 5px;
    background: #F0F5FF;
`
export const Explain = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 20px;
    color: #BBB;
    font-size: 12px;
    font-weight: 500;
`
// InfoImgSection.jsx
export const InfoImgSecWrap = styled.div`
    /* border: 1px solid red; */
    width: 430px;
    height: 610px;
    padding: 35px 24px;
    border-bottom: 2px solid #DBDBDB;
    background-color: rgba(119, 158, 216, 0.00);
`
export const InfoImgBox = styled.div`
    width: 382px;
    height: 497px;
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: column;
    margin-top: 23px;
`
export const ViewDetail = styled.div`
    width: 382px;
    height: 52px;
    background-color: #6A7484;
    color: #FFF;
    font-size: 22px;
    font-weight: 700;
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
// ReviewSection.jsx
export const ReviewSecWrap = styled.div`
    /* border: 1px solid red; */
    width: 430px;
    height: 395px;
    padding: 30px 24px 25px 24px;
    background-color: rgba(119, 158, 216, 0.00);
`
export const ReviewSec1 = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ViewMore = styled.div`
    width: 200px;
    height: 30px;
    color: #69A2F6;
    font-size: 18px;
    font-weight: 400;
    text-decoration-line: underline;
`
export const ReviewSec2 = styled.div`
    width: 100%;
    height: 30px;
    margin: 25px 0 10px 0;
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: 500;
    color: #062B56;
`
export const Star = styled.div`
    width: 75px;
    height: 30px;
    color: #FFA826;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    margin: 0 5px;
`
export const ReviewSec3 = styled.div`
    width: 100%;
    height: 245px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const Reviews = styled.div`
    width: 382px;
    height: 45px;
    border-radius: 5px;
    background-color: #E3EEFF;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Profile = styled.img`
    width: 34px;
    height: 34px;
    margin: 0 5px;
`
export const ShortReview = styled.div`
    width: 300px;
    height: 30px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    color: #44494F;
    font-size: 16px;
    font-weight: 400;
`