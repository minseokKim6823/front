import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalHome from './assets/HomeCss/GlobalHome';
import GlobalBoardWrite from './assets/BoardWriteCss/GlobalBoardWrite';
<<<<<<< HEAD
=======

import NavBar from './components/NavBar';
import LoginPage from './screens/LoginPage';
>>>>>>> 7c59a51 (test1)
import GlobalLoginPage from './assets/LoignPageCss/GlobalLoginPage';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import BoardList from './screens/BoardList';
import BoardDetail from './screens/BoardDetail';
import BoardUpdate from './screens/BoardUpdate';
import BoardWrite from './screens/BoardWrite';
import BoardDelete from './screens/BoardDelete';
import LoginPage from './screens/LoginPage';
import MyPage from './screens/MyPage';
import KakaoRedirectPage from './components/Login/KakaoRedirectPage';
import Chating from './screens/Chating';
<<<<<<< HEAD
import { DivRoot } from './assets/HomeCss/HomeCss';
import GlobalMyPage from './assets/MyPageCss/GlobalMyPage';
import GlobalChating from './assets/ChatingCss/GlobalChating';
import { AuthProvider } from './AuthContext';

function App() {
  // Determine the global component based on the current path
=======
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
    const loggedInStatus = localStorage.getItem('memberdata');
    console.log(loggedInStatus);
    if (loggedInStatus) {
      console.log('hi')
      setIsLoggedIn(true);
    }
  }, []);
  // 렌더링된 컴포넌트에 따라 다른 글로벌 스타일을 적용
>>>>>>> 7c59a51 (test1)
  let globalComponent;
  switch (window.location.pathname) {
    case '/':
      globalComponent = <GlobalHome />;
      break;
    case '/write':
    case '/board':
      globalComponent = <GlobalBoardWrite />;
      break;
    case '/login':
      globalComponent = <GlobalLoginPage />;
      break;
    case '/profile':
      globalComponent = <GlobalMyPage />;
    case '/chat':
      globalComponent = <GlobalChating />;
    default:
      globalComponent = <GlobalHome />;
  }

  return (
<<<<<<< HEAD
    <AuthProvider>
      <Router>
        <DivRoot>
          {globalComponent}
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<MyPage />} />
            <Route path="/board" element={<BoardList />} />
            <Route path="/board/:boardId" element={<BoardDetail />} />
            <Route path="/write" element={<BoardWrite />} />
            <Route path="/update/:boardId" element={<BoardUpdate />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />} />
            <Route path='/chat' element={<Chating />} />
            <Route path='/delete' element={<BoardDelete />} />
          </Routes>
        </DivRoot>
      </Router>
    </AuthProvider>
=======
    <DivRoot>
      {globalComponent}
      {/* <NavigationBar /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />

        <Route path="/board/:boardId" element={<BoardDetail />} />
        <Route path="/write" element={<BoardWrite />} />
        <Route path="/update/:boardId" element={<BoardUpdate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />} />

        <Route path='/chat' element={<Chating />} />
      </Routes>
    </DivRoot>
>>>>>>> 7c59a51 (test1)
  );
}

export default App;
