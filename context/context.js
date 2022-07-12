import {
  createContext,
  useReducer,
  useState,
} from "react";
const toggleState = false;
const reducer = (toggler, action) => {
  switch (action.type) {
    case "add":
      return (toggleState = true);
    case "remove":
      return (toggleState = false);
    default:
      return toggleState;
  }
};
const ThemeContext = createContext();
export const ThemeProvider = (props) => {
  const [toggler, dispatch] = useReducer(
    reducer,
    toggleState
  );
  const [toggle, setToggle] = useState(false);

  const themeToggler = () => {
    if (!toggler) {
      dispatch({ type: "add" });
      document.body.classList.add("dark");
      setToggle(!toggle);
    } else {
      dispatch({ type: "remove" });
      document.body.classList.remove("dark");
    }
  };
  const stateActions = {
    // light: {
    //   colorBg: "#f6f6f9",
    //   colorWhite: "#fff",
    //   colorDark: "#363949",
    //   colorDarkVar: "#677483",
    //   colorLight: "rgba(132, 139, 200, 0.18)",
    // },
    // dark: {
    //   colorBg: "#181a1e",
    //   colorWhite: "#202528",
    //   colorDark: "#edeffd",
    //   colorDarkVar: "#a3bdcc",
    //   colorLight: "rgba(0, 0, 0, 0.4)",
    // },
  };
  return (
    <ThemeContext.Provider
      value={{ toggleState, themeToggler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
