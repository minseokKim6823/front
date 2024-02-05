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
import NavBar from './test/NavBar';





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
      globalComponent = <GlobalBoardWrite />
    default:
      globalComponent = <GlobalHome />;
  }
  return (
    <DivRoot>
      {globalComponent}
      {/* <NavigationBar /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:idx" element={<BoardDetail />} />
        <Route path="/write" element={<BoardWrite />} />
        <Route path="/update" element={<BoardUpdate />} />
      </Routes>
    </DivRoot>
  );
}

export default App;
