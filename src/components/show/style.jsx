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
    border: 1px solid red;
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
    border: 1px solid red;
    width: 430px;
    height: 54px;
    padding: 7px 20px;
`