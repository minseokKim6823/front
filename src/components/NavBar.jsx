// NavBar.js

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IsLoggedInContext } from "../components/Login/KakaoRedirectPage";
import { ToBoardWrite, ToBoardListButton, MyPageButton, LoginButton, NavBarContainer, HomeLogo } from "../assets/NavBarCss/NavBarCss";
import { AuthContext, useAuth } from "../AuthContext";

const NavBar = () => {
  const { isLoggedIn, handleLoginSuccess, handleLogout } = useAuth();
  const navigate = useNavigate();
  const navigateToBoardWrite = () => {
    if (isLoggedIn) {
      navigate("/write");
    } else {
      alert("빌려주기를 하려면 로그인이 필요합니다.");
    }
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      handleLogout();
      localStorage.removeItem("memberData");
    } else {
      handleLoginSuccess();
    }
  };

  return (
    <NavBarContainer>
      <HomeLogo alt="" src="/.svg" onClick={() => navigate("/")} />
      <ToBoardListButton onClick={() => navigate("/board")}>빌리기</ToBoardListButton>
      <ToBoardWrite onClick={navigateToBoardWrite}>빌려주기</ToBoardWrite>
      <MyPageButton onClick={() => navigate("/profile")}>마이페이지</MyPageButton>
      <LoginButton onClick={handleButtonClick}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </LoginButton>
    </NavBarContainer>
  );
};

export default NavBar;
