import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../api/axios";
import * as S from "./style";
import Wrapper from "../../../components/Wrapper";
import { Nav } from "../../../components/layouts/nav/Nav";
import { SelectedList } from "../../../components/show/SelectedList";
import { ShowCard } from "../../../components/show/ShowCard";
import { Footer } from "../../../components/layouts/footer/Footer";
import { SearchModal } from "../../searchModal/SearchModal";
import { Array } from "../../../components/show/Array";

export const ShowList = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const { genre, location, price_range, date_range } = useParams();
  const [area, setArea] = useState(location.slice(1));

  useEffect(() => {
    axiosInstance
      .get(
        `/api/mainposts?genre=${
          genre !== ":genre" ? genre.slice(1) : ""
        }&location=${area !== "location" ? area : ""}&price_range${
          price_range !== ":price_range" ? price_range.slice(1) : ""
        }&date_range=${date_range !== ":date_range" ? date_range.slice(1) : ""}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  }, [genre, location]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCardClick = (showId) => {
    navigate(`/${showId}`);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [activeArray, setActiveArray] = useState("별점 높은 순");

  // 모달 열기
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  // 선택한 ArraySec 저장
  const handleArraySecClick = (selected) => {
    setActiveArray(selected);
    closeModal();
  };
  
  return (
    <Wrapper>
      {isModalOpen ? (
        <SearchModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      ) : (
        <>
          <Nav isModalOpen={isModalOpen} toggleModal={toggleModal} />
          <S.ShowListTitle>
            <span
              className="material-symbols-outlined"
              onClick={() => navigate("/")}
            >
              arrow_back
            </span>
            <p>{genre === ":genre" ? "전체 장르" : genre.slice(1)}</p>
            {/* <p>뮤지컬</p> */}
            <S.FloatRight onClick={toggleModal}>키워드 재설정</S.FloatRight>
          </S.ShowListTitle>
          <SelectedList genre={genre} setArea={setArea} area={area} />
          <S.SpaceBetween>
            <p>키워드 적용된 공연입니다</p>
            <p>
              {/* 별점 높은순 */}
              <span className="material-symbols-outlined" onClick={openModal}>
                more_vert
              </span>
            </p>
          </S.SpaceBetween>
          {data.map((show) => (
            <ShowCard
              key={show.id}
              data={show}
              // onClick={onClick}
              onClick={() => handleCardClick(show.id)}
            />
          ))}
          <Footer />

          {modalOpen && (
            <Array
              setModalOpen={setModalOpen}
              closeModal={closeModal}
              activeArray={activeArray}
              handleArraySecClick={handleArraySecClick}
            />
          )}

          {modalOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: "11",
              }}
              onClick={closeModal}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};
