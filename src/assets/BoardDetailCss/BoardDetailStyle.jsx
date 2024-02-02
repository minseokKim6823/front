import { createGlobalStyle } from "styled-components";

const GlobalStyleBoardDetail = createGlobalStyle`
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
--font-size-6xl: 25px;

/* Colors */
--color-white: #fff;
--color-darkgray: #aaa;
--g-red: #ea4335;
--color-darkslategray: #333;
--g-gray: #8a8d92;
--color-gray-100: rgba(0, 0, 0, 0.9);

/* Gaps */
--gap-7xs: 6px;

/* Paddings */
--padding-sm: 14px;

/* Border radiuses */
--br-xl: 20px;

}
`;

export default GlobalStyleBoardDetail;
