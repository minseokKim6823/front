// 라우팅 import
import { Route, Routes } from 'react-router-dom';

// screen import
import Home from './screens/Home';  // 홈페이지
import BoardList from './screens/BoardList';  // 보드 검색
import BoardDetail from './screens/BoardDetail';  // 보드 상세
import BoardUpdate from './screens/BoardUpdate';  // 보드 업데이트
import BoardWrite from './screens/BoardWrite';  // 보드 작성

// GlobalStyle import
import GlobalHome from './assets/HomeCss/GlobalHome';
import { DivRoot } from './assets/HomeCss/HomeCss';
import GlobalBoardWrite from './assets/BoardWriteCss/GlobalBoardWrite';
import NavBar from './components/NavBar';
import LoginPage from './screens/LoginPage';
import GlobalLoginPage from './assets/LoignPageCss/GlobalLoginPage';
import KakaoRedirectPage from './components/Login/KakaoRedirectPage';
import Chating from './screens/Chating';
import { useEffect, useState } from 'react';
import Frame from './screens/Board';
import Board from './screens/Board';





function App() {
  // 사용자의 인증 상태를 관리하는 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로컬스토리지에서 사용자 데이터 삭제
    localStorage.removeItem('memberData');
    // 서버 ID와 닉네임을 로컬스토리지에서 삭제하는 추가 코드
    setIsLoggedIn(false);
  };
  // 컴포넌트 마운트 시 사용자 인증 상태 확인
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('memberData');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);
  // 렌더링된 컴포넌트에 따라 다른 글로벌 스타일을 적용
  let globalComponent;
  switch (window.location.pathname) {
    case '/':
      globalComponent = <GlobalHome />;
      break;
    case '/write':
      globalComponent = <GlobalBoardWrite />;
      break;
    case '/board':
      globalComponent = <GlobalBoardWrite />;
      break;
    case '/login':
      globalComponent = <GlobalLoginPage />;
    default:
      globalComponent = <GlobalHome />;
  }
  return (
    <DivRoot>
      {globalComponent}
      {/* <NavigationBar /> */}
      <NavBar />
      <BoardDetail />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/write" element={<BoardWrite />} />
        <Route path="/update" element={<BoardUpdate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />} />
        <Route path='/chat' element={<Chating />} />
      </Routes> */}
    </DivRoot>
  );
}

export default App;
