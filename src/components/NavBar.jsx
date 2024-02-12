// NavBar.js

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IsLoggedInContext } from "../components/Login/KakaoRedirectPage";
import { ToBoardWrite, ToBoardListButton, MyPageButton, LoginButton, NavBarContainer, HomeLogo } from "../assets/NavBarCss/NavBarCss";

const NavBar = () => {
  // context Api로 로그인 상태 가져오기
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateToBoardWrite = () => {
    if (isLoggedIn) {
      navigate("/write");
    } else {
      alert("빌려주기를 하려면 로그인이 필요합니다.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("memberData");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <NavBarContainer>
      <HomeLogo alt="" src="/.svg" onClick={() => navigate("/")} />
      <ToBoardListButton onClick={() => navigate("/board")}>빌리기</ToBoardListButton>
      <ToBoardWrite onClick={navigateToBoardWrite}>빌려주기</ToBoardWrite>
      <MyPageButton onClick={() => navigate("/profile")}>마이페이지</MyPageButton>
      {isLoggedIn ? (
        <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
      ) : (
        <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
