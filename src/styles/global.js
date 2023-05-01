import styled, { createGlobalStyle } from "styled-components";

import CabinCondensedRegularWoff2 from "./../fonts/CabinCondensed-Regular.woff2";
import CabinCondensedRegularWoff from "./../fonts/CabinCondensed-Regular.woff";

import CabinCondensedBoldWoff2 from "./../fonts/CabinCondensed-Bold.woff2";
import CabinCondensedBoldWoff from "./../fonts/CabinCondensed-Bold.woff";

import { color } from "./variables";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CabinCondensedRegular';
    src: local('CabinCondensedRegular'), local('CabinCondensedRegular'),
    url(${CabinCondensedRegularWoff2}) format('woff2'),
    url(${CabinCondensedRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'CabinCondensedBold';
    src: local('CabinCondensedBold'), local('CabinCondensedBold'),
    url(${CabinCondensedBoldWoff2}) format('woff2'),
    url(${CabinCondensedBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html {
    font: 18px/1.3 'CabinCondensedRegular', Arial Sans-Serif;
  }
  body {
    margin: 0;
    color: ${color.primaryColor};
    &.blocked {
      overflow: hidden;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:focus {
      outline: none;
    }
  }
  input {
    width: 100%;
    outline: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    margin: 0;
  }
  button {
    outline: none;
    cursor: pointer;
    background: none;
    border: none;
    color: red;
    font-size: 30px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const Application = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  padding: 15px;
  margin: 0 auto;
  min-height: 100vh;
  @media (min-width: 1280px) {
    padding: 30px;
  }
`;

export { GlobalStyle, Application };