import { ToBoardWrite, LoginButton, MyPageButton, ToBoardListButton, NavBarContainer, HomeLogo } from "../assets/NavBarCss/NavBarCss";
import { useNavigate } from "react-router-dom";
import '../Buttonstyle.css';

const NavBar = () => {
  const navigate = useNavigate();
  const navigateToBoardList = () => {
    navigate("/board");
  };
  const navigateToBoardWrite = () => {
    navigate("/write");
  };
  const navigateToMyPage = () => {
    navigate("/page/:idx");
  };
  const navigateToLogin = () => {
    navigate("/login");
  }
  return (
    <>
      <NavBarContainer>
        {/* 로고 */}
        <HomeLogo alt="" src="/.svg" />
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
        <LoginButton onClick={navigateToLogin}>
          로그인
        </LoginButton>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
