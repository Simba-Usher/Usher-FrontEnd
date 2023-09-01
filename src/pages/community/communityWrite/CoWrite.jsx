import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const CoWrite = () => {
  const navigate = useNavigate();
  const [group, setGroup] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (group == "none" || title == "" || body == "") {
      alert("필수항목을 입력해주세요");
    } else alert("게시판: " + group + "제목: " + title + "본문: " + body+"url:"+img);
  };
  /*
   // submit 시 로직
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("group", group);
      formData.append("title", title);
      formData.append("body", body);
      if (img) {
        formData.append("img", img);
      }

      const response = await axiosInstance.post("여기url",formData,{
          headers: {
            "Content-Type": "multipart/form-data", // 필수 설정
          },
        }
      );
      console.log("post 성공:", response.data);
      alert("글이 업로드 되었습니다");
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };
*/

  // 이미지 file 로직
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) setImg(file);
  };
  // 이미지 업로드 선택
  const openFilePicker = () => {
    document.querySelector('input[type="file"]').click();
  };

  return (
    <>
      <S.PostForm onSubmit={handleSubmit}>
        <S.WriteNav>
          <S.NavArrow
            className="material-symbols-outlined"
            onClick={() => navigate("/community")}
          >
            arrow_back
          </S.NavArrow>
          <div>글쓰기</div>
          <S.PostGreenBtn type="submit">등록</S.PostGreenBtn>
        </S.WriteNav>
        <S.PostSelect
          isselect={group}
          name="group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="none">게시판을 선택하세요</option>
          <option value="free">자유 게시판</option>
          <option value="qna">질문 게시판</option>
        </S.PostSelect>
        <S.PostTitle
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.PostBody
          placeholder="내용을 입력하세요"
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {group !== "qna" && (
          <>
            <S.FlexRow>
              <S.PostImg
                onClick={openFilePicker}
                isselected={img ? "true" : "false"}
              >
                <span className="material-symbols-outlined">photo_camera</span>
                사진 추가하기
              </S.PostImg>
              {img && (
                <S.SelectedImg src={URL.createObjectURL(img)} alt="your img" />
              )}
            </S.FlexRow>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              style={{ visibility: "hidden" }}
            />
          </>
        )}
      </S.PostForm>
    </>
  );
};
