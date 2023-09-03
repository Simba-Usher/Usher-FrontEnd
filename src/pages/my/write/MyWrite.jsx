import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyToggle } from "../../../components/my/MyToggle";
import { NumBox } from "../../../components/my/NumBox";
import { ShowReview } from "../../../components/my/myWrite/ShowReview";
import { ComWrite } from "../../../components/my/myWrite/ComWrite";

export const MyWrite = () => {
  const title = "나의 글";

  const [selectedButton, setSelectedButton] = useState('toggleA');

  return (
  <Wrapper>
    <MyInnerNav title={title} />
    <MyToggle title={title} selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
    <NumBox />
    {selectedButton === 'toggleA' ? <ShowReview /> : <ComWrite />}
  </Wrapper>
  );
};
