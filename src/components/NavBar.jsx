import { ToBoardWrite, LoginButton, MyPageButton, ToBoardListButton, NavBarContainer, HomeLogo } from "../assets/NavBarCss/NavBarCss";
import { useNavigate } from "react-router-dom";
import '../Buttonstyle.css';
import { useEffect, useState } from "react";

const NavBar = () => {
  // 사용자의 인증 상태를 관리하는 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 컴포넌트 마운트 시 사용자 인증 상태 확인
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('memberData');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);
  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로컬스토리지에서 사용자 데이터 삭제
    localStorage.removeItem('isLoggedIn');
    // 서버 ID와 닉네임을 로컬스토리지에서 삭제하는 추가 코드
    setIsLoggedIn(false);
  };
  const navigate = useNavigate();
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
