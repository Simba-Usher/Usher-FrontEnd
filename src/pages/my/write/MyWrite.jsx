import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyToggle } from "../../../components/my/MyToggle";
import { NumBox } from "../../../components/my/NumBox";
import { ShowReview } from "../../../components/my/myWrite/ShowReview";
import { ComWrite } from "../../../components/my/myWrite/ComWrite";
import { QnaLists } from "../../../components/community/communityMain/QnaLists";
import { NoticeLists } from "../../../components/community/communityMain/NoticeLists";
import { ComLists } from "../../../components/community/communityMain/ComLists";

export const MyWrite = () => {
  const title = "나의 글";

  const [selectedButton, setSelectedButton] = useState('toggleA');

  return (
  <Wrapper>
    <MyInnerNav title={title} />
    <MyToggle title={title} selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
    <NumBox />
    {/* {selectedButton === 'toggleA' ? <ShowReview /> : <ComWrite />} */}
    {selectedButton === 'toggleA' ? (
        <>
          {/* {data.map((show) => (
            <ShowReview
              key={show.id}
              data={show}
              onClick={() => handleCardClick(show.id)}
            />
          ))} */}
          <ShowReview />
        </>
      ) : (
        <>
          {/* 나중에 ComWrite에 리스트로 받아와서 ... */}
          <ComLists />
          <QnaLists />
          <ComLists />
        </>
      )}
  </Wrapper>
  );
};
