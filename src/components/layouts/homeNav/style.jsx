import { styled } from "styled-components";


export const HomeNavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  border-bottom: 2px solid #d8e0ec;
  text-align: center;
  font-size: 1.3rem;
  * {
    /* color: #a2cdeb; */
    width: 100px;
    height: 40px;
  }
  a {
    color: #a2cdeb;
    border: none;
  }
  a.active {
    color: #033682;
    border-bottom: 5px solid #033682;
    border-radius: 5px;
    font-weight: 700;
  }
  a.active:nth-child(2) {
    color: #00b0a5;
    border-bottom: 5px solid #00b0a5;
    border-radius: 5px;
    font-weight: 700;
  }
  a.active:last-child {
    color: #906ccb;
    border-bottom: 5px solid #906ccb;
    border-radius: 5px;
    font-weight: 700;
  }
`;