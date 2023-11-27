import { TodoAction, TodoActionType, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  error: null,
  limit: 10,
  loading: false,
  page: 1,
};

export const todoReducer = (
  state: TodoState = initialState,
  actions: TodoAction
): TodoState => {
  switch (actions.type) {
    case TodoActionType.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionType.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: actions.payload };
    case TodoActionType.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: actions.payload };
    case TodoActionType.SET_TODOS_PAGE:
      return { ...state, page: actions.payload };

    default:
      return state;
  }
};
