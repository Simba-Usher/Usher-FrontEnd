import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { styled } from "styled-components";
import { AnimatePresence } from "framer-motion";
// 임시 로그인 상태 확인
import { useSetRecoilState, useRecoilValue } from "recoil";
import { accessTokenState } from "./recoil/recoilState";

// 모바일 크기 레이아웃 고정
export const Container = styled.div`
  background-color: #fff;
  width: 430px;
  min-height: 932px;
  position: relative;
`;

function App() {
  const accessToken = useRecoilValue(accessTokenState);
  const setAccessToken = useSetRecoilState(accessTokenState);
  console.log(accessToken);

  return (
    <>
      <GlobalStyle />
      <Container>
        <AnimatePresence>
          <Outlet />
          {accessToken ? (
            <div
              onClick={() => setAccessToken(null)}
              style={{ position: "fixed", top: "0" }}
            >
              로그인/클릭시로그아웃
            </div>
          ) : (
            <div style={{ position: "fixed", top: "0" }}>로그아웃</div>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;
