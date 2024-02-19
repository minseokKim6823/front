// NavBar.js

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IsLoggedInContext } from "../components/Login/KakaoRedirectPage";
import { ToBoardWrite, ToBoardListButton, MyPageButton, LoginButton, NavBarContainer, HomeLogo } from "../assets/NavBarCss/NavBarCss";
import { AuthContext, useAuth } from "../AuthContext";
import OurLogo from "../img/OurLogo.png"
const NavBar = () => {
  const { isLoggedIn, handleLoginSuccess, handleLogout } = useAuth();
  const navigate = useNavigate();
  const navigateToBoardWrite = () => {
    // if (isLoggedIn) {
    //   navigate("/write");
    // } else {
    //   alert("빌려주기를 하려면 로그인이 필요합니다.");
    //   navigate('/login');
    // }
    navigate('/write');
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("memberdata");
      handleLogout();
    } else {
      navigate('/login');
      handleLoginSuccess();
    }
  };

  return (
    <NavBarContainer>
      <HomeLogo alt="" src={OurLogo} onClick={() => navigate("/")} />
      <ToBoardListButton onClick={() => navigate("/board")}>Search</ToBoardListButton>
      <ToBoardWrite onClick={navigateToBoardWrite}>Rental</ToBoardWrite>
      <MyPageButton onClick={() => navigate("/profile")}>MyPage</MyPageButton>
      <LoginButton onClick={handleButtonClick}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </LoginButton>
    </NavBarContainer>
  );
};

export default NavBar;
