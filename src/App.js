// 라우팅 import
import { Route, Routes } from 'react-router-dom';

// screen import
import Home from './screens/Home';
import BoardList from './screens/BoardList';
import BoardDetail from './screens/BoardDetail';

// GlobalStyle import
import GlobalHome from './assets/HomeCss/GlobalHome';
import NavigationBar from './components/Header/NavigationBar';
import { DivRoot } from './assets/HomeCss/HomeCss';
import BoardWrite from './screens/BoardWrite';
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
      </Routes>
    </DivRoot>
  );
}

export default App;
