const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  if (action.type == "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (action.type == "REMOVE_TODO") {
    return { ...state, todos: action.payload };
  }
  if (action.type == "SET_TODOS") {
    return { ...state, todos: action.payload };
  }
  if (action.type == "SINGLE_SET_TODOS") {
    return { ...state, todos: action.payload };
  }
  return state;
};

export const asyncAddTodo = (payload) => {
  return async (dispatch) => {
    dispatch(
      addTodo(payload)
      // type: "ADD_TODO",
      // payload: payload,
    );
  };
};

const addTodo = (payload) => ({ type: "ADD_TODO", payload });

export default todosReducer;
