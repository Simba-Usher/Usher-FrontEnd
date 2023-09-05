import React, { useState, useRef } from "react";
import * as S from "./style";

export const CommentSection = () => {
  const scrollRef = useRef(null);
  const [cmt, setcmt] = useState("");
  const [cocmt, setcocmt] = useState("");
  const [isSub, setisSub] = useState(false);

  const handleClick = () => {
    if (scrollRef.current) {
      const yOffset =
        scrollRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setisSub((prevIsSub) => !prevIsSub);
    setcmt("");
    setcocmt("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("cmt: " + cmt + "cocmt: " + cocmt);
  };

  const data = [
    {
      id: 1,
      username: "연뮤신강림",
      date: "2023.8.17",
      body: "혹시 코노에 엘리자벳,,, 넘버도 있을까요? 레드북 넘버도 있는지 궁금합니다",
      coComents: [
        {
          id: 1,
          username: "뮤라이프",
          date: "2023.8.17",
          body: "엘리자벳은 있지만 레드북은 없던 것 같아요..!",
        },
        {
          id: 2,
          username: "뮤라이프",
          date: "2023.8.17",
          body: "랄라는 있지만 레드북은 없던 것 같아요..!",
        },
      ],
    },
    {
      id: 2,
      username: "먀뮤신강림",
      date: "2023.8.17",
      body: "2번 댓글",
      coComents: [
        {
          id: 1,
          username: "2대댓글",
          date: "2023.8.17",
          body: "2엘리자벳은 있지만 레드북은 없던 것 같아요..!",
        },
        {
          id: 2,
          username: "2대댓글",
          date: "2023.8.17",
          body: "2랄라는 있지만 레드북은 없던 것 같아요..!",
        },
      ],
    },
    {
      id: 3,
      username: "먀뮤신강림",
      date: "2023.8.17",
      body: "2번 댓글",
      coComents: [
        {
          id: 1,
          username: "2대댓글",
          date: "2023.8.17",
          body: "2엘리자벳은 있지만 레드북은 없던 것 같아요..!",
        },
        {
          id: 2,
          username: "2대댓글",
          date: "2023.8.17",
          body: "2랄라는 있지만 레드북은 없던 것 같아요..!",
        },
      ],
    },
    {
      id: 4,
      username: "먀뮤신강림",
      date: "2023.8.17",
      body: "2번 댓글",
      coComents: [
        {
          id: 1,
          username: "2대댓글",
          date: "2023.8.17",
          body: "2엘리자벳은 있지만 레드북은 없던 것 같아요..!",
        },
        {
          id: 2,
          username: "2대댓글",
          date: "2023.8.17",
          body: "2랄라는 있지만 레드북은 없던 것 같아요..!",
        },
      ],
    },
  ];

  return (
    <>
      {data.map((cmt, index) => (
        <>
          <S.CmtSection
            key={cmt.id}
            ref={index === data.length + 1 ? scrollRef : null}
          >
            <S.CmtBody>{cmt.body}</S.CmtBody>
            <S.FlexRowBox>
              <S.CmtUsername>{cmt.username}</S.CmtUsername>
              <S.CmtDate>{cmt.date} | 신고</S.CmtDate>
              <S.CoCmtBtn onClick={handleClick}>답글 쓰기</S.CoCmtBtn>
            </S.FlexRowBox>
          </S.CmtSection>
          {cmt.coComents.map((cocmt) => (
            <S.CoCmtSection key={cocmt.id}>
              <S.CoCmtBody>
                <S.CoCmtArrow className="material-symbols-outlined">
                  subdirectory_arrow_right
                </S.CoCmtArrow>
                {cocmt.body}
              </S.CoCmtBody>
              <S.CoFlexRowBox>
                <S.CmtUsername>{cocmt.username}</S.CmtUsername>
                <S.CmtDate>{cocmt.date} | 신고</S.CmtDate>
                {/* accessTocken 확인 후 실제 사용자와 같을시 */}
                {cocmt.username === "뮤라이프" && (
                  <S.WriterMark>작성자</S.WriterMark>
                )}
              </S.CoFlexRowBox>
            </S.CoCmtSection>
          ))}
        </>
      ))}
      <S.CmtWrapper onSubmit={handleSubmit}>
        {isSub ? (
          <>
            <S.CmtInput2
              type="text"
              placeholder="댓글을 입력해주세요."
              value={cmt}
              onChange={(e) => setcmt(e.target.value)}
            />
            <S.CoCmtArrow2 className="material-symbols-outlined">
              subdirectory_arrow_right
            </S.CoCmtArrow2>
          </>
        ) : (
          <S.CmtInput
            type="text"
            placeholder="댓글을 입력해주세요."
            value={cocmt}
            onChange={(e) => setcocmt(e.target.value)}
          />
        )}
        <S.CmtPostBtn type="submit">
          <S.CmtPostBtnImg src="/send.png" alt="send" />
        </S.CmtPostBtn>
      </S.CmtWrapper>
    </>
  );
};
