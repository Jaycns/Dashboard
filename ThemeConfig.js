import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  $boxShadow: "0 2rem 3rem $colorLight",
  $colorDark: "#363949",
  $colorLight: "rgba(132, 139, 200, 0.18)",
  $colorDarkVariant: "#677483",
  $colorBackground: "#f6f6f9",
  $colorWhite: "#fff",
};

export const darkTheme = {
  $background: "#181a1e",
  $colorWhite: "#202528",
  $colorDark: "#edeffd",
  $colorDarkVariant: "#a3bdcc",
  $colorLight: "rgba(0,0,0,0.4)",
  $boxShadow: "0 2rem 3rem $color-light",
};

export const GlobalStyles = createGlobalStyle`
body{
  font-family: Poppins, sans-serif;
  width: 100vw;
  height: 100vh;
  font-size: 0.88rem;
  background: ${({ theme }) => theme.background};
  overflow: scroll;
  user-select: none;
}


`;
