import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GlobalHome from './assets/HomeCss/GlobalHome';
import GlobalBoardWrite from './assets/BoardWriteCss/GlobalBoardWrite';
import GlobalLoginPage from './assets/LoignPageCss/GlobalLoginPage';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import BoardList from './screens/BoardList';
import BoardDetail from './screens/BoardDetail';
import BoardUpdate from './screens/BoardUpdate';
import BoardWrite from './screens/BoardWrite';
import LoginPage from './screens/LoginPage';
import KakaoRedirectPage from './components/Login/KakaoRedirectPage';
import Chating from './screens/Chating';
import { DivRoot } from './assets/HomeCss/HomeCss'




function App() {
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
    <Router>
      <DivRoot>
        {globalComponent}
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
    </Router>
  );
}

export default App;
