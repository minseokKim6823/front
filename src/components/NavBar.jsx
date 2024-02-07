import { ToBoardWrite, LoginButton, MyPageButton, ToBoardListButton, NavBarContainer, HomeLogo } from "../assets/NavBarCss/NavBarCss";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"; // useEffect, useState 삭제
import { IsLoggedIn } from '../components/Login/KakaoRedirectPage';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const navigateToBoardWrite = () => {
    navigate("/write");
  }

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

  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로컬스토리지에서 사용자 데이터 삭제
    localStorage.removeItem('memberData');
    // isLoggedIn 상태 업데이트
    setIsLoggedIn(false);
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
        {isLoggedIn ? ( // isLoggedIn 값에 따라 로그인 또는 로그아웃 버튼 렌더링
          <LoginButton onClick={handleLogout}>
            로그아웃
          </LoginButton>
        ) : (
          <LoginButton onClick={navigateToLogin}>
            로그인
          </LoginButton>
        )}
      </NavBarContainer>
    </>
  );
};

export default NavBar;
