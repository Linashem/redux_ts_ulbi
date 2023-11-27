export interface TodoState {
  todos: [];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionType {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODOS_PAGE = "SET_TODOS_PAGE",
}

interface FethTodoAction {
  type: TodoActionType.FETCH_TODOS;
}
interface FethTodoSuccessAction {
  type: TodoActionType.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface FethTodoErrorAction {
  type: TodoActionType.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodoPageAction {
  type: TodoActionType.SET_TODOS_PAGE;
  payload: number;
}

export type TodoAction =
  | FethTodoAction
  | FethTodoSuccessAction
  | FethTodoErrorAction
  | SetTodoPageAction;
