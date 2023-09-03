// MyLike.jsx

import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { MyInnerNav } from "../../../components/my/MyInnerNav";
import { MyToggle } from "../../../components/my/MyToggle";
import { NumBox } from "../../../components/my/NumBox";
import { ShowLike } from "../../../components/my/myLike/ShowLike";
import { ComLike } from "../../../components/my/myLike/ComLike";

export const MyLike = () => {
  const title = "좋아요";

  const [selectedButton, setSelectedButton] = useState('toggleA');

  return (
  <Wrapper>
    <MyInnerNav title={title} />
    <MyToggle title={title} selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
    <NumBox />
    {selectedButton === 'toggleA' ? <ShowLike /> : <ComLike />}
  </Wrapper>
  );
};
