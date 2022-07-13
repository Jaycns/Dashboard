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
  const [val, setVal] = useState("Dashboard");
  const themeToggler = () => {
    if (!toggler) {
      dispatch({ type: "add" });
      document.body.classList.add("dark");
    } else {
      dispatch({ type: "remove" });
      document.body.classList.remove("dark");
    }
  };
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const stateActions = {
    themeToggler,
    setVal,
    handleOpen,
    handleClose,
  };
  return (
    <ThemeContext.Provider
      value={{
        toggleState,
        val,
        modal,
        ...stateActions,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
