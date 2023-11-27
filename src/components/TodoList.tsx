import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos,setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Some problems</h1>;
  }
  return (
    <div>
      <div>
        <hr />
        {todos.map((todo) => (
          <div key={todo.id}>{todo.id}-{todo.title}</div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            style={{
              border: p === page ? "2px solid green" : "1px solid grey",
              padding: "10px",
            }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
