import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creator/user";
import type {} from "redux-thunk/extend-redux";
import { useActions } from "../hooks/useActions";

export const UserList: React.FC = () => {
  //   const state = useSelector((state) => state);
  const { error, loading, users } = useTypedSelector((state) => state.user);
  console.log(users);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Some problems</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
