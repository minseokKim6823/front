import styled from "styled-components";
import { HomeLogo } from "../assets/NavBarCss/NavBarCss";
import OurLogo from "../img/OurLogo.png";
import KaKao from "../img/KaKao.png";
import KakaoSmall from "../img/KaKaoSmall.png";

const P = styled.p`
  margin: 0;
`;
const B = styled.b`
  position: absolute;
  top: 180px;
  left: calc(50% - 100px);
  line-height: 34px;
  display: inline-block;
  width: 200px;
`;
const KakaoLoginLargeNarrow1Icon = styled.img`
  position: relative;
  top: 250px;
  left: 90px;
  width: 90px;
  height: 40px;
  object-fit: fill;
  cursor: pointer;
`;

const LoginModal = styled.div`
  position: relative;
  border: 3px solid black;
  border-radius: 10px;
  background-color: #b9b9b9;
  top: 100px;
  margin-left: 400px;
  height: 300px;
  width: 300px;
  left: 100px;
  z-index: 1;
`;

const HomeLogogo = styled.img`
  position: absolute;
  top: 20px;
  left: 60px;
  width: 160px;
  height: 160px;
  border: none;
  overflow: hidden;
`;

const LoginPage = () => {
  const handleButtonClick = () => {
    window.location.href = 'http://localhost:8080/oauth/kakao';
  };

  return (
    <>
      <LoginModal>
        <HomeLogogo alt="" src={OurLogo} />
        <B>
          <P>철수의 옷장</P>
          <P>멤버가 되어주세요!</P>
        </B>
        <KakaoLoginLargeNarrow1Icon onClick={handleButtonClick}
          alt="카카오톡 로그인"
          src={KakaoSmall}
        />
      </LoginModal>
    </>
  );
};

export default LoginPage;
