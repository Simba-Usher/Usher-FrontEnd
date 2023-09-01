import { styled } from "styled-components";
import { NavContainer, SearchSection } from "../layouts/nav/style";

export const CateNav = styled(NavContainer)`
  background: #1270b0;
`;
export const CateSearchSection = styled(SearchSection)`
  left: 10px;
  input {
    width: 352px;
    height: 33px;
    border-radius: 20px;
    border: 2px solid #e4efff;
    background: #fafcff;
    padding-left: 15px;
    &::placeholder {
      color: #959caa;
    }
  }
`;
export const CateSearchBtn = styled.span`
  position: absolute;
  right: 13px;
  top: 5px;
  color: #959caa;
`;
export const CateCloseBtn = styled.span`
  position: absolute;
  right: 10px;
  font-size: 2.5rem;
  color: #e4efff;
`;
