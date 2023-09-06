import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { ImgContainer, SuccessImg } from "../login/style";

export const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/guide');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Wrapper>
      <ImgContainer>
        <SuccessImg src="/loading.png" alt="loading" />
      </ImgContainer>
    </Wrapper>
  );
};
