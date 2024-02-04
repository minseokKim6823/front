import { createGlobalStyle } from "styled-components";

const GlobalBoardWrite = createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;

/* font sizes */
--font-size-mid: 17px;
--font-size-xl: 20px;
--font-size-lg: 18px;

/* Colors */
--color-whitesmoke-100: #f7f8f9;
--color-whitesmoke-200: #e8e9ea;
--color-white: #fff;
--color-darkgray: #aaa;
--g-gray: #8a8d92;
--color-gray-100: #282732;
--color-salmon: #ff5f68;
--g-green: #34a853;
--g-blue: #4285f4;
--g-red: #ea4335;
--color-black: #000;
--color-gainsboro: #ddd;

/* Gaps */
--gap-mini: 15px;

/* Paddings */
--padding-xs: 12px;
--padding-base: 16px;
--padding-sm: 14px;
--padding-3xs: 10px;

/* Border radiuses */
--br-5xs: 8px;
--br-7xs: 6px;
--br-xl: 20px;

}
`;

export default GlobalBoardWrite
