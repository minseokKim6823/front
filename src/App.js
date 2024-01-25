/* App.js */
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import BoardList from './screens/BoardList';
import BoardDetail from './screens/BoardDetail';
import { GlobalStyle } from './assets/createGlobalStyle';

import { GlobalCss } from './global';
import GenderDropdown from './components/BoardWrite/GenderDropdown';
import ClothingDropdown from './components/BoardWrite/ClothingDropdown';
import SeoulDistrictSelector from './components/SeoulDistrictSelector';
import ImageFormdata from './test/ImageFormdata';
import ProductRegister from './screens/ProductRegister';


function App() {
  return (
    <>
      <GlobalCss />
      {/* <ImageFormdata /> */}
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
