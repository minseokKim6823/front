import { createGlobalStyle } from "styled-components";

const GlobalStyleBoardlist = createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;

/* font sizes */
--font-size-sm: 14px;
--font-size-xs: 12px;
--font-size-base: 16px;

/* Colors */
--color-whitesmoke-100: #f7f8f9;
--color-whitesmoke-200: #e8e9ea;
--color-white: #fff;
--color-darkgray: #aaa;
--g-red: #ea4335;
--color-darkslategray: #333;
--color-gray-100: #282732;
--g-blue: #4285f4;

/* Gaps */
--gap-7xs: 6px;
--gap-mini: 15px;

/* Paddings */
--padding-xs: 12px;
--padding-3xs: 10px;

/* Border radiuses */
--br-xl: 20px;
--br-5xs: 8px;

}
`;

export default GlobalStyleBoardlist;
