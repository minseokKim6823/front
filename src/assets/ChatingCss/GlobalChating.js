import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;

/* font sizes */
--font-size-base: 16px;
--font-size-mid: 17px;

/* Colors */
--color-white: #fff;
--color-darkgray: #aaa;
--color-blueviolet: #4440f1;
--color-gainsboro-100: #e0e0e0;
--color-black: #000;
--g-red: #ea4335;
--g-blue: #4285f4;

/* Gaps */
--gap-5xs: 8px;

/* Paddings */
--padding-3xs: 10px;

/* Border radiuses */
--br-base: 16px;

}
`;
