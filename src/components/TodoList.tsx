import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todo
  );
  const {fetchTodos}=useActions();
useEffect(()=>{
    fetchTodos(page, limit)
},[])

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Some problems</h1>;
  }
  return <div>
    <hr />
    {todos.map((todo)=> <div key={todo.id}>{todo.title}</div> )}
  </div>;
};
