import {
  createContext,
  useReducer,
  useState,
} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Dark":
      return {
        ...state,
        isLight: false,
        dark: {
          colorBg: "#181a1e",
          colorWhite: "#202528",
          colorDark: "#edeffd",
          colorDarkVar: "#a3bdcc",
          colorLight: "rgba(0, 0, 0, 0.4)",
        },
      };
    default:
      return state;
  }
};
const ThemeContext = createContext();
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    isLight: true,
    dark: {
      colorBg: "#f6f6f9",
      colorWhite: "#fff",
      colorDark: "#363949",
      colorDarkVar: "#677483",
      colorLight: "rgba(132, 139, 200, 0.18)",
    },
  });
 
  const stateActions = {
    light: {
      colorBg: "#f6f6f9",
      colorWhite: "#fff",
      colorDark: "#363949",
      colorDarkVar: "#677483",
      colorLight: "rgba(132, 139, 200, 0.18)",
    },
    dark: {
      colorBg: "#181a1e",
      colorWhite: "#202528",
      colorDark: "#edeffd",
      colorDarkVar: "#a3bdcc",
      colorLight: "rgba(0, 0, 0, 0.4)",
    },
  };
  return (
    <ThemeContext.Provider
      value={{ theme: state, ...stateActions }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
