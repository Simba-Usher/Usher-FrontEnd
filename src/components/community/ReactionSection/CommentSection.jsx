import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import axiosInstance from "../../../api/axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessTokenState } from "../../../recoil/recoilState";

export const CommentSection = () => {
  const { detailId } = useParams();
  const [cmt, setcmt] = useState("");
  const [cocmt, setcocmt] = useState("");
  const [isSub, setisSub] = useState(false);
  const setAccessToken = useSetRecoilState(accessTokenState);
  const accessToken = useRecoilValue(accessTokenState);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [data, setData] = useState([]);

  const fetchComentData = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/composts/${detailId}/comcomments`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("댓글 에러 : ", error);
    }
  };
  useEffect(() => {
    fetchComentData();
  }, []);

  const handleCmtSubmit = async () => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };

      const response = await axiosInstance.post(
        `/api/composts/${detailId}/comcomments`,
        {
          content: cmt,
        },
        { headers }
      );
      console.log(response.data);
      fetchComentData();
    } catch (error) {
      console.error("댓글 작성 오류 발생:", error);
      throw error;
    }
  };
  const handleCocmtSubmit = async () => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };

      const response = await axiosInstance.post(
        `/api/comcomments/${selectedCommentId}/comreplies`,
        {
          content: cocmt,
        },
        { headers }
      );
      console.log(response.data);
      fetchComentData();
    } catch (error) {
      console.error("대댓글 작성 오류 발생:", error);
      throw error;
    }
  };

  const handleClick = (commentId) => {
    setSelectedCommentId(commentId);
    setisSub((prevIsSub) => !prevIsSub);
    setcmt("");
    setcocmt("");
  };
  const slicedate = (sdate) => {
    return sdate.slice(0, 10);
  };

  return (
    <>
      {data.map((cmt, index) => (
        <>
          <S.CmtSection key={cmt.id}>
            <S.CmtBody>{cmt.content}</S.CmtBody>
            <S.FlexRowBox>
              <S.CmtUsername>{cmt.writer}</S.CmtUsername>
              <S.CmtDate>
                {slicedate(cmt.created_at)} | 신고
                {/* {cmt.created_at} | 신고 */}
              </S.CmtDate>
              <S.CoCmtBtn onClick={() => handleClick(cmt.id)}>
                답글 쓰기
              </S.CoCmtBtn>
            </S.FlexRowBox>
          </S.CmtSection>
          {cmt.replies &&
            cmt.replies.map((cocmt) => (
              <S.CoCmtSection key={cocmt.id}>
                <S.CoCmtBody>
                  <S.CoCmtArrow className="material-symbols-outlined">
                    subdirectory_arrow_right
                  </S.CoCmtArrow>
                  {cocmt.content}
                </S.CoCmtBody>
                <S.CoFlexRowBox>
                  <S.CmtUsername>{cocmt.writer}</S.CmtUsername>
                  <S.CmtDate>{slicedate(cocmt.created_at)} | 신고</S.CmtDate>
                  {cocmt.writer === "뮤라이프" && (
                    <S.WriterMark>작성자</S.WriterMark>
                  )}
                </S.CoFlexRowBox>
              </S.CoCmtSection>
            ))}
        </>
      ))}
      <S.CmtWrapper>
        {isSub ? (
          <>
            <S.CmtInput2
              type="text"
              placeholder="댓글을 입력해주세요."
              value={cocmt}
              onChange={(e) => setcocmt(e.target.value)}
            />
            <S.CoCmtArrow2 className="material-symbols-outlined">
              subdirectory_arrow_right
            </S.CoCmtArrow2>
            <S.CmtPostBtn onClick={handleCocmtSubmit}>
              <S.CmtPostBtnImg src="/send.png" alt="send" />
            </S.CmtPostBtn>
          </>
        ) : (
          <>
            <S.CmtInput
              type="text"
              placeholder="댓글을 입력해주세요."
              value={cmt}
              onChange={(e) => setcmt(e.target.value)}
            />
            <S.CmtPostBtn onClick={handleCmtSubmit}>
              <S.CmtPostBtnImg src="/send.png" alt="send" />
            </S.CmtPostBtn>
          </>
        )}
      </S.CmtWrapper>
    </>
  );
};
