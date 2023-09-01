import { styled } from "styled-components";

export const WriteNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  color: #76777a;
  font-size: 1.3rem;
  cursor: default;
`;
export const NavArrow = styled.span`
  margin-right: 15px;
  font-weight: 600;
`;
export const PostGreenBtn = styled.button`
  position: absolute;
  right: 20px;
  width: 70px;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #c7ffef;
  color: #029f95;
  border-radius: 70px;
  border: 0;
`;
export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;
export const PostSelect = styled.select`
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ccc;
  color: #071d36;
  font-size: 1.3rem;
  background-color: ${(props) =>
    props.isselect === "free" || props.isselect === "qna" ? "#f5f6f8" : ""};
  option {
    font-size: 1rem;
    color: #76777a;
  }
  option:nth-child(n + 2) {
    background-color: #f5f6f8;
  }
  option:nth-child(1) {
    color: #071d36;
  }
`;
export const PostTitle = styled.input`
  padding: 15px;
  border: 0;
  border-bottom: 1px solid #ccc;
  color: #071d36;
  font-size: 1.5rem;
`;
export const PostBody = styled.textarea`
  padding: 15px;
  border: 0;
  border-bottom: 1px solid #ccc;
  min-height: 550px;
  font-size: 1rem;
  resize: none;
`;
export const PostImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 42px;
  margin-top: 25px;
  font-size: 1.1rem;
  border-radius: 5px;
  background: ${(props) =>
    props.isselected === "true" ? "#9D9FA3" : "#e9eaeb"};
  color: ${(props) => (props.isselected === "true" ? "#fff" : "#77797c")};
  border: 0;
  cursor: default;
  span {
    margin-right: 5px;
  }
`;
export const SelectedImg = styled.img`
  max-width: 230px;
  margin: 10px;
  border-radius: 5px;
`;
export const FlexRow = styled.div`
  display: flex;
`;
