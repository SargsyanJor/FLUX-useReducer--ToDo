export const intitialState = {
  text: "",
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeText":
      return {
        ...state,
        text: action.payload,
      };
    case "add":
      if (state.text.trim() === "") {
        return state;
      }

      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: state.text, isDone: false },
        ],
        text: "",
      };
    case "delete":
      return {
        ...state,
        todos: [...state.todos.filter((elm) => elm.id !== action.id)],
      };
    case "checkChange":
      return {
        ...state,
        todos: [
          ...state.todos.map((elm) => {
            if (elm.id === action.id) {
              return {
                ...elm,
                isDone: !elm.isDone,
              };
            } else {
              return elm;
            }
          }),
        ],
      };

    default:
      return state;
  }
};
