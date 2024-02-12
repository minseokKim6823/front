import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalHome from './assets/HomeCss/GlobalHome';
import GlobalBoardWrite from './assets/BoardWriteCss/GlobalBoardWrite';
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
import { DivRoot } from './assets/HomeCss/HomeCss';
import { IsLoggedIn } from './components/Login/KakaoRedirectPage';
import GlobalMyPage from './assets/MyPageCss/GlobalMyPage';
import GlobalChating from './assets/ChatingCss/\bGlobalChating';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Determine the global component based on the current path
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
    <Router>
      <DivRoot>
        {globalComponent}
        <NavBar />
        <AuthProvider>
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
        </AuthProvider>
      </DivRoot>
    </Router>
  );
}

export default App;
