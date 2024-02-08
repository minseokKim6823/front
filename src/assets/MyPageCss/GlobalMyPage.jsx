import { createGlobalStyle } from "styled-components";

const GlobalMyPage = createGlobalStyle`
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
--font-size-xl: 20px;
--font-size-mid: 17px;

/* Colors */
--color-white: #fff;
--color-darkgray: #aaa;
--g-red: #ea4335;
--color-darkslategray: #333;
--g-gray: #8a8d92;
--g-green: #34a853;
--g-blue: #4285f4;
--color-gainsboro-100: #ddd;

/* Gaps */
--gap-7xs: 6px;

/* Paddings */
--padding-sm: 14px;
--padding-3xs: 10px;

/* Border radiuses */
--br-xl: 20px;
--br-7xs: 6px;

}
`;

export default GlobalMyPage;
