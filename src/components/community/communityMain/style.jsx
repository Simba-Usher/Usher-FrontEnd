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
    img {
        cursor: pointer;
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
        right: 0;
    }
    /* a {
    color: #CBD0D7;
    } */
    div.active {
    color: #071D36;
    font-size: 18px;
    font-weight: 600;
    }
`
export const ComNavSec = styled.div`
    color: #CBD0D7;
    font-size: 18px;
    font-weight: 400;
    padding: 0 14px;
    cursor: pointer;
`
// Array.jsx
export const ArrayWrap = styled.div`
    /* border: 1px solid red; */
    width: 137px;
    height: 160px;
    position: absolute;
    top: 45px;
    right: 4px;
    background-color: #F0F3F2;
    display: flex;
    flex-direction: column;
    z-index: 12;
    div {
        color: #565857;
        font-size: 16px;
        font-weight: 400;
    }
    div.active {
        /* border: 1px solid red; */
        background-color: #D1FFF1;
        color: #071D36;
        font-weight: 600;
    }
`
export const ArraySec = styled.div`
    width: 137px;
    height: 40px;
    border-bottom: 1px solid #A1A7A7;
    display: flex;
    justify-content: center;
    align-items: center;
    :active {
        background-color: #D1FFF1;
        color: #071D36;
        font-weight: 600;
    }
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
    /* cursor: pointer; */
    cursor: default;
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
    font-weight: 600;
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
        margin-top: 3px;
    }
    p.comments {
        color: #09CFC3;
        font-size: 16px;
        font-weight: 600;
        padding-left: 0;
        padding-right: 5px;
    }
`
export const ImgSec = styled.img`
    width: 80px;
    height: 107px;
    border-radius: 5px;
`
// QnaLists.jsx
export const QnaSec = styled(TextSec)`
    width: 100%;
`
export const Sec2Content = styled(Sec2)`
    color: #B3B3B3;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
`
// WriteBtn.jsx
export const WriteBtnWrap = styled.div`
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
    z-index: 10;
    p {
        color: #FFF;
        font-size: 30px;
        font-weight: 600;
        padding-left: 15px;
        padding-bottom: 4px;
    }
`
// NoticeLists.jsx
export const NotiveListsWrap = styled(ComListsWrap)`
    padding: 16px 21px;
`
export const NotiveSec = styled(TextSec)`
    width: 100%;
`
export const Sec2Manager = styled(Sec2)`
    padding: 5px 0;
    height: 40px;
    p.manager {
        color: #0086E1;
        font-size: 14px;
        font-weight: 600;
    }
`
export const Sec3Content = styled(Sec2Content)`
    
`
// NoticeTitle.jsx
export const NoticeTitleWrap = styled.div`
    width: 430px;
    height: 45px;
    background-color: #E1E4E8;
    color: #071D36;
    font-size: 18px;
    font-weight: 600;
    padding: 9px 24px;
`