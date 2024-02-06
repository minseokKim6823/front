import styled from "styled-components";

const P = styled.p`
  margin: 0;
`;
const B = styled.b`
  position: absolute;
  top: 110px;
  left: calc(50% - 100px);
  line-height: 34px;
  display: inline-block;
  width: 200px;
`;
const KakaoLoginLargeNarrow1Icon = styled.img`
  position: relative;
  top: 236px;
  left: calc(50% - 120px);
  width: 240px;
  height: 60px;
  object-fit: cover;
`;

const LoginModal = styled.div`
  position: relative;
  border: 3px solid black;
  border-radius: 10px;
  background-color: gray;
  top: 100px;
  margin-left: 400px;
  height: 300px;
  width: 300px;
  left: 100px;
  z-index: 1;
`;

const LoginPage = () => {
  const handleButtonClick = () => {
    window.location.href = 'http://localhost:8080/oauth/kakao';
  };

  return (
    <>
      <LoginModal>
        <B>
          <P>철수의 옷장</P>
          <P>멤버가 되어주세요!</P>
        </B>
        <KakaoLoginLargeNarrow1Icon onClick={handleButtonClick}
          alt="카카오톡 로그인"
          src="/kakao-login-large-narrow-1@2x.png"
        />
      </LoginModal>
    </>
  );
};

export default LoginPage;
