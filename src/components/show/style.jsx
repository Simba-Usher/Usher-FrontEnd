import { styled } from "styled-components";

export const SelectedListContainer = styled.div`
  display: flex;
  margin: 10px;
`;
export const SelectDesign = styled.select`
  width: 75px;
  height: 32px;
  margin-right: 10px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #d6dde6;
  background: #fff;
`;
export const DateDesign = styled.div`
  position: relative;
  margin-right: 10px;
  width: 110px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #d6dde6;
  background: #fff;
  padding-right: 15px;
  font-size: 0.9rem;
`;
export const priceDesign = styled(DateDesign)`
  /* position: fixed; */
  /* left: 215px; */
  width: 150px;
`;
export const InputBar = styled.div`
  position: fixed;
  z-index: 100;
  left: 150px;
  top: 100px;
`;
export const DropDown = styled.span`
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: 1.7rem;
`;
export const SelectedReaction = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  margin-left: 10px;
  div {
    display: flex;
    align-items: center;
    width: 120px;
    height: 28px;
    border-radius: 5px;
    border: 1px solid #b485e2;
    background: #fff;
    margin-right: 5px;
  }
  i {
    font-size: 1.2rem;
    padding: 0 2px;
  }
  :nth-child(1) {
    i {
      color: #b485e2;
    }
  }
  :nth-child(2) {
    border: 1px solid #598fdf;
    i {
      color: #69a2f6;
    }
  }
  :nth-child(3) {
    border: 1px solid #35d4ca;
    i {
      color: #35d4ca;
    }
  }
`;
export const PlusIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;

export const BoldLine = styled.hr`
  border: 2px solid #D6DDE6;
`;
export const GrayLine = styled.hr`
  border: 1px solid #D6DDE6;
`;
export const ShowCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d6dde6;
  padding: 15px 10px;
  img{
    padding-right: 10px;
  }
`;
export const ShowCardTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const ShowCardPlace = styled.p`
  font-size: 0.9rem;
  color: #3f4955;
`;
export const ShowCardDate = styled.p`
  font-size: 0.8rem;
  color: #aaadb2;
  margin-bottom: 10px;
`;
export const ShowCardReactin = styled.div`
  display: flex;
`
export const ShowCardStar = styled.span`
  color: #ffa826;
  font-size: 0.9rem;
  margin-right: 10px;
  i{
    font-size: 1rem;
    padding-right: 3px;
  }
`;
export const ShowCardReviews = styled(ShowCardDate)`
  font-size: 0.9rem;
`;
export const ShowCardComment = styled.p`
  color: #5484cc;
  font-size: 0.8rem;
`;