import { ToBoardWrite, LoginButton, MyPageButton, ToBoardListButton, NavBarContainer, HomeLogo } from "../assets/NavBarCss/NavBarCss";
import { useNavigate } from "react-router-dom";
import '../Buttonstyle.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { logoutSuccess } from '../components/Login/LoginSlice'; // Import logout action


const NavBar = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutSuccess());
    // Navigate to the desired route after logout
    navigate('/');
  };

  const navigateToBoardList = () => {
    navigate("/board");
  };
  const navigateToMyPage = () => {
    navigate("/page/:idx");
  };
  const navigateToLogin = () => {
    navigate("/login");
  }
  const navigateToHome = () => {
    navigate('/');
  }
  // 만약 로그인이 되어있지 않은 상태라면, '/login'으로 이동하는 함수
  const navigateToBoardWrite = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/write");
    }
  };
  return (
    <>
      <NavBarContainer>
        {/* 로고 */}
        <HomeLogo alt="" src="/.svg" onClick={navigateToHome} />
        {/* <a href="" title="Button border blue/green" class="button btnBorder btnBlueGreen">Border</a> */}
        <ToBoardListButton onClick={navigateToBoardList}>
          빌리기
        </ToBoardListButton>
        <ToBoardWrite onClick={navigateToBoardWrite}>
          빌려주기
        </ToBoardWrite>
        {/* <Frame1>
          <Text2>이벤트</Text2>
        </Frame1> */}
        {/* 로그인 안하면 안보이게 */}
        <MyPageButton onClick={navigateToMyPage}>
          마이페이지
        </MyPageButton>
        {/* 로그인 안하면 로그인, 하면 로그아웃 구현 */}
        <LoginButton onClick={isLoggedIn ? handleLogout : navigateToLogin}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </LoginButton>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
