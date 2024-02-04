import { createGlobalStyle } from "styled-components";

const GlobalHome = createGlobalStyle`
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
--color-white: #fff;
--color-darkgray: #aaa;
--g-red: #ea4335;
--color-darkslategray: #333;
--color-gainsboro: #ddd;

/* Gaps */
--gap-7xs: 6px;

/* Paddings */
--padding-3xs: 10px;

/* Border radiuses */
--br-xl: 20px;

}
`;

export default GlobalHome
