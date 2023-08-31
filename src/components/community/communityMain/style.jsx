import { styled } from "styled-components";

// NoticeSec.jsx
export const Notice = styled.div`
    width: 382px;
    height: 37px;
    margin: 20px 24px;
    border-radius: 30px;
    border: 2px solid #59CEC7;
    background-color: #FFF;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    p:nth-child(1) {
        color: #04B0A5;
        font-size: 14px;
        font-weight: 500;
        padding-left: 5px;
    }
    p:nth-child(2) {
        color: #062B56;
        font-size: 12px;
        font-weight: 400;
    }
`
// ComNav.jsx
export const ComNavWrap = styled.div`
    /* border: 1px solid red; */
    width: 410px;
    height: 46px;
    margin: 0 10px;
    padding: 13px 0;
    border-bottom: 2px solid #CBD0D7;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    div {
        color: #CBD0D7;
        font-size: 18px;
        font-weight: 400;
    }
    img {
        position: absolute;
        right: 10px;
    }
`
export const ComNavSec = styled.div`
    color: #CBD0D7;
    font-size: 18px;
    font-weight: 400;
    padding: 0 14px;
`
// ComLists.jsx
export const ComListsWrap = styled.div`
    width: 430px;
    height: 136px;
    padding: 15px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    background-color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const TextSec = styled.div`
    /* border: 1px solid red; */
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Sec1Title = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 30px;
    color: #071D36;
    font-size: 18px;
    font-weight: 500;
`
export const Sec2 = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    p:nth-child(1) {
        color: #6F7277;
        font-size: 14px;
        font-weight: 400;
    }
    p:nth-child(2) {
        color: #CCCECE;
        font-size: 14px;
        font-weight: 400;
        padding: 0 5px;
    }
    p:nth-child(3) {
        color: #CCCECE;
        font-size: 14px;
        font-weight: 400;
    }
`
export const Sec3 = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
        color: #908F8F;
        font-size: 16px;
        font-weight: 400;
        padding-right: 18px;
        padding-left: 6px;
    }
    img {
        height: 60%;
    }
`
export const ImgSec = styled.img`
    width: 80px;
    height: 107px;
    border-radius: 5px;
`
// WriteBtn.jsx
export const WriteBtnWrap = styled.div`
    border: 1px solid red;
    width: 237px;
    height: 58px;
    border-radius: 13.214px;
    border: 1px solid #FFF;
    background: linear-gradient(90deg, #11BBAF, #1DD9CB);
    box-shadow: 0px 2.87778px 5.75556px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 663px;
    left: 96px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
        color: #FFF;
        font-size: 30px;
        font-weight: 600;
        padding-left: 15px;
        padding-bottom: 4px;
    }
`