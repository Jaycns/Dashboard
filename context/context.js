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
      return {
        ...action.payload.names,
        title: state.title,
        icon: state.icon,
        info: state.info,
        profit: state.profit,
        update: state.update,
        id: state.id,
      };
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
      localStorage.setItem(
        "toggleState",
        JSON.stringify(toggleState)
      );
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
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
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
    localStorage.setItem(
      "state",
      JSON.stringify([...state, names])
    );
    console.log(names, state);
  };
  const handleDelete = () => {
    dispatch({
      type: "delete",
      payload: { id: state.id },
    });
  };
  const handleChecked = () => {
    setChecked(true);
    setModal(true);
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
  }, []);
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("state"))
    ) {
      initialStateList = JSON.parse(
        localStorage.getItem("state") || []
      );
      return initialStateList;
    }
  }, []);

  useEffect(() => {
    if (val !== "Dashboard") {
      localStorage.setItem(
        "val",
        JSON.stringify(val)
      );
    }
  }, [val]);
  useEffect(() => {
    if (state !== []) {
      localStorage.setItem(
        "state",
        JSON.stringify(state)
      );
    }
  }, [state]);

  const stateActions = {
    themeToggler,
    setVal,
    handleOpen,
    handleClose,
    handleSubmit,
    handleChange,
    handleClick,
    handleChecked,
  };
  return (
    <ThemeContext.Provider
      value={{
        state,
        toggleState,
        val,
        modal,
        names, checked,
        ...stateActions,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
