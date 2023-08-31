import { styled } from "styled-components";
import { SearchSection } from "../../components/layouts/nav/style";

export const TopWrapper = styled.div`
  background-color: #fff;
  position: relative;
  top: 30px;
`;
export const TopTxt = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 10px 0 30px 0;
`;
export const CloseBtn = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #bca4ff;
`;
export const PurpleBottomBtn = styled.button`
  margin: 20px 65px;
  width: 294px;
  height: 53px;
  border-radius: 5px;
  background: #9259b5;
  box-shadow: 0px 4px 4px 0px #0000003f;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  border: 0;
`;
export const SearchModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f5f5ff;
`;
export const KeywordSearchBar = styled(SearchSection)`
  input {
    width: 382px;
    border: 2px solid #632787;
    background: #fff;
    ::placeholder {
      color: #632787;
    }
  }
  span {
    right: 10px;
    color: #632787;
  }
`;
