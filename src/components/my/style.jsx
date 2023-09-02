import { styled } from "styled-components";

// MyInnerNav.jsx
export const MyInnerNavWrap = styled.div`
    /* border: 1px solid red; */
    width: 430px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 9.5px 25px 24px;
    img:nth-child(1) {
        width: 22px;
        height: 22px;
    }
    img:last-child {
        width: 28.5px;
        height: 19px;
    }
    p {
        color: #071D36;
        font-size: 24px;
        font-weight: 400;
    }
`