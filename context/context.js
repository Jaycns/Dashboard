import {
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
const initialState = {
  title: "",
  icon: "",
  info: "",
  profit: "",
  update: "",
  id: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addName":
      return [...state, action.payload.names];
    case "delete":
      return state.filter(
        (item) => item.id !== action.payload.id
      );

    case "edit":
      const index = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const newList = Array.from(state);
      newList[index] = action.payload.names;
      return newList;
    default:
      return state;
  }
};

const ThemeContext = createContext();
export const ThemeProvider = (props) => {
  const initialStateList = [];
  const [state, dispatch] = useReducer(
    reducer,
    initialStateList
  );
  const [toggleState, setToggleState] =
    useState(false);
  const [val, setVal] = useState("Dashboard");
  const themeToggler = () => {
    if (!toggleState) {
      setToggleState(true);
      document.body.classList.add("dark");
    } else {
      setToggleState(false);
      document.body.classList.remove("dark");
    }
  };
  const [names, setNames] =
    useState(initialState);
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(false);
  4;
  const handleOpen = () => setModal(true);
  const handleClose = () => {
    setModal(false);
    setNames(initialState);
    setChecked(false);
  };
  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNames({ ...names, [name]: value });
  };
  const handleClick = () => {
    dispatch({
      type: "addName",
      payload: { names: names },
    });
    setNames(initialState);
    setModal(false);
    console.log(names, state);
  };
  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: { id: names.id },
    });
    handleClose();
  };
  const handleChecked = (key) => {
    setChecked(true);
    setModal(true);
    const index = state.findIndex(
      (item) => item.id === key
    );
    const list = state[index];
    setNames({
      title: list.title,
      icon: list.icon,
      info: list.info,
      profit: list.profit,
      update: list.update,
      id: list.id,
    });
    console.log({ list: list });
  };
  const handleSave = () => {
    console.log({ names: names });
    dispatch({
      type: "edit",
      payload: { id: names.id, names: names },
    });
    handleClose();
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("val"))) {
      setVal(
        JSON.parse(
          localStorage.getItem("val") ||
            "Dashboard"
        )
      );
    }
    if (
      JSON.parse(
        localStorage.getItem("toggleState")
      )
    ) {
      setToggleState(
        JSON.parse(
          localStorage.getItem("toggleState") ||
            false
        )
      );
    }
  }, []);

  useEffect(() => {
    if (val !== "Dashboard") {
      localStorage.setItem(
        "val",
        JSON.stringify(val)
      );
    }
    if (toggleState !== false) {
      localStorage.setItem(
        "val",
        JSON.stringify(toggleState)
      );
    }
  }, [val, toggleState]);

  const stateActions = {
    themeToggler,
    setVal,
    handleOpen,
    handleClose,
    handleSubmit,
    handleChange,
    handleClick,
    handleChecked,
    handleDelete,
    handleSave,
  };
  return (
    <ThemeContext.Provider
      value={{
        state,
        toggleState,
        val,
        modal,
        names,
        checked,
        ...stateActions,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
