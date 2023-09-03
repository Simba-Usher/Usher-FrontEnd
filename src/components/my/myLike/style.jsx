import { styled } from "styled-components";

// ShowLike.jsx
export const ShowLikeWrap = styled.div`
    width: 430px;
    height: 151px;
    /* border: 1px solid red; */
    border-bottom: 1px solid #D6DDE6;
    padding: 14px 10px;
    display: flex;
    flex-direction: row;
    position: relative;
    img{
        width: 88px;
        height: 124px;
        border-radius: 5px;
        margin-right: 14px;
    }
`
export const TextSec = styled.div`
    width: 308px;
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
        color: #071D36;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    div:nth-child(2) {
        color: #3F4955;
        font-size: 14px;
        font-weight: 400;
    }
    div:nth-child(3) {
        color: #AAADB2;
        font-size: 12px;
        font-weight: 400;
    }
    div:nth-child(4) {
        color: #AAADB2;
        font-size: 14px;
        font-weight: 400;
        margin-top: 5px;
    }
    div:nth-child(5) {
        color: #5484CC;
        font-size: 12px;
        font-weight: 400;
    }
`
export const StarSec = styled.div`
    display: flex;
    flex-direction: row;
    img {
        width: 20px;
        height: 19px;
        margin-right: 2px;
    }
    p {
        color: #FFA826;
        font-size: 14px;
        font-weight: 700;
    }
    p:last-child {
        color: #AAADB2;
        font-size: 14px;
        font-weight: 400;
        margin-left: 15px;
    }
`
export const XBtn = styled.img`
    width: 24px !important;
    height: 24px !important;
    position: absolute;
    bottom: 14px;
    right: 10px;
    padding: 0 !important;
`

// ComLike.jsx
export const ComLikeWrap = styled.div`
    width: 430px;
    height: 136px;
    /* border: 1px solid green; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
`