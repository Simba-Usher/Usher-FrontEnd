import { styled } from "styled-components";

// MyProfile.jsx
export const MyProfileWrap = styled.div`
    width: 430px;
    height: 230px;
    border-bottom: 1px solid #D8E0EC;
    background-color: #EDF0F3;
    padding: 16px;
`
export const WhiteBox = styled.div`
    width: 398px;
    height: 197px;
    border-radius: 10px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`
export const Profile = styled.div`
    width: 378px;
    height: 85px;
    border-bottom: 1px solid #E2E5EB;
    padding: 17px 14px 17px 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Grade = styled.img`
    width: 50px;
    height: 50px;
`
export const MyInfo = styled.div`
    /* width: 304px; */
    width: 270px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding-left: 12px;
`
export const MyName = styled.div`
    color: #071D36;
    font-size: 22px;
    font-weight: 600;
    height: 32px;
`
export const MyMail = styled.div`
    color: #9C9FA3;
    font-size: 12px;
    font-weight: 350;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 17px;
    img {
        width: 12px;
        height: 9.6px;
        margin-right: 4px;
        margin-top: 3px;
    }
`
export const GoImg = styled.img`
    /* width: 10px; */
    width: 44px;
    height: 36px;
    padding: 10px 17px;
    cursor: pointer;
`
export const Mine = styled.div`
    width: 378px;
    height: 112px;
    padding: 21px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const MineBox = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
        margin-bottom: 4px;
        width: 40px;
        height: 40px;
    }
    p {
        color: #071D36;
        font-size: 18px;
        font-weight: 400;
    }
`

// MyTicket.jsx
export const MyTicketWrap = styled.div`
    width: 430px;
    height: 155px;
    background-color: #FFF;
    padding: 24px 16px 19px 16px;
`
export const TicketBox = styled.div`
    width: 398px;
    height: 112px;
    border-radius: 10px;
    border: 1px solid #D8E0EC;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
`
export const TopBox = styled.div`
    width: 100%;
    height: 72px;
    padding: 22px 24px 22px 26px;
    display: flex;
    flex-direction: row;
`
export const MyTickets = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    p:nth-child(1) {
        color: #9C9FA3;
        font-size: 18px;
        font-weight: 400;
    }
    img {
        margin-left: 9px;
        margin-right: 21px;
        margin-top: 2px;
        width: 20px;
        height: 16px;
    }
    p:last-child {
        color: #7749C3;
        font-size: 22px;
        font-weight: 600;
        position: relative;
        top: -1px;
    }
`
export const AddTicket = styled.div`
    width: 50%;
    height: 100%;
    color: #071D36;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    cursor: pointer;
    img {
        margin-left: 8px;
        margin-top: 3px;
    }
`
export const BottomBox = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 0px 0px 10px 10px;
    background-color: #F2EDFF;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        flex-direction: row;
    }
`

// UseUsher.jsx
export const UseUsherWrap = styled.div`
    width: 430px;
    /* height: 191px; */
    border-top: 3px solid #D8E0EC;
    border-bottom: 1px solid #D8E0EC;
    padding: 27px 16px 19px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div:nth-child(1) {
        color: #9C9FA3;
        font-size: 14px;
        font-weight: 400;
        padding-top: 0;
        padding-bottom: 8px;
    }
    div {
        color: #50575F;
        font-size: 16px;
        font-weight: 400;
        padding: 8px 0;
        /* border: 1px solid red; */
    }
`

// AskUsher.jsx
export const AskUsherWrap = styled(UseUsherWrap)`
    /* height: 170px; */
    border-top: none;
    padding: 16px;
`

// LogOut.jsx
export const LogOutWrap = styled.div`
    width: 430px;
    height: 72px;
    border-bottom: 3px solid #D8E0EC;
    padding: 25px 16px;
    color: #071D36;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        width: 20px;
        height: 22px;
        margin-right: 9px;
    }
`

// Delete.jsx
export const DeleteWrap = styled.div`
    width: 430px;
    height: 56px;
    padding: 18px 16px;
    color: #9C9FA3;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 10px;
        height: 16px;
        margin-right: 8px;
    }
`