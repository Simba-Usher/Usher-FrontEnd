import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const ComLists = ({ compost, editorIsTrue }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.ComListsWrap onClick={() => navigate(`/community/${compost.id}`)}>
        <S.TextSec>
          <S.Sec1Title>{compost.title}</S.Sec1Title>
          <S.Sec2>
            {/* 에디터의 경우 -> '에디터' 추가, 글자색 변경 */}
            {editorIsTrue === true ? (
              <>
                <div className="editor">에디터·</div>
                <div className="editor">{compost.writer}</div>
              </>
            ) : (
              <p className="writer">{compost.writer}</p>
            )}
            <p className="bar">|</p>
            <p className="date">{compost.created_at.slice(0, 10)}</p>
            {/* 에디터의 경우 */}
            {editorIsTrue === true ? (
              <img
                src="/editorcheck.png"
                style={{
                  width: "22px",
                  height: "21px",
                  margin: "0 10px",
                  marginTop: "1px",
                }}
              />
            ) : (
              <></>
            )}
          </S.Sec2>
          <S.Sec3>
            <img src="/views.png" alt="views" />
            <p>{compost.views}</p>
            <img src="/likes.png" alt="likes" />
            <p>{compost.like_cnt}</p>
            <img src="/comments.png" alt="comments" />
            <p>{compost.comcomments_cnt}</p>
          </S.Sec3>
        </S.TextSec>
        {compost.image && <S.ImgSec src={compost.image} />}
        {/* <S.ImgSec src="/comlistposter.png" /> */}
      </S.ComListsWrap>
    </>
  );
};
