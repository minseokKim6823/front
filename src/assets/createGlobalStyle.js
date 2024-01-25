import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;
--font-arial: Arial;

/* font sizes */
--font-size-xl: 20px;
--font-size-lg: 18px;

/* Colors */
--color-white: #fff;
--color-darkgray: #aaa;
--color-gainsboro: #ddd;
--color-gray-100: #282732;
--color-gray-200: rgba(0, 0, 0, 0.1);
--color-whitesmoke-100: #f7f8f9;
--color-whitesmoke-200: #e8e9ea;

/* Gaps */
--gap-3xs: 10px;

/* Paddings */
--padding-xs: 12px;
--padding-base: 16px;

/* Border radiuses */
--br-5xs: 8px;

}
`;
