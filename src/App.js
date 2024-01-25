/* App.js */
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import BoardList from './screens/BoardList';
import BoardDetail from './screens/BoardDetail';
import BoardWrite from './screens/BoardWrite';
import { GlobalStyle } from './assets/createGlobalStyle';

import { GlobalCss } from './global';
import GenderDropdown from './components/BoardWrite/GenderDropdown';
import ClothingDropdown from './components/BoardWrite/ClothingDropdown';
import ProductRegister from './ProductRegister';
import SeoulDistrictSelector from './components/SeoulDistrictSelector';


function App() {
  return (
    <>
      <GlobalCss />
      {/* <ProductRegister /> */}
      {/* <SeoulDistrictSelector /> */}
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:idx" element={<BoardDetail />} />
        <Route path="/write" element={<ProductRegister />} />
      </Routes>
    </>
  );
}

export default App;
