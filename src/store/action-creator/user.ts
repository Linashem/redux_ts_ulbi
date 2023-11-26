import { Dispatch } from "react";
import { IUserActions, UserActionTypes } from "../../types/todos";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<IUserActions>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(()=>{
        dispatch({
            type: UserActionTypes.FETCH_USERS_SUCCESS,
            payload: response.data,
          });
      },500)
      

    } catch (error) {
        dispatch({type:UserActionTypes.FETCH_USERS_ERROR, payload:'errors of'})
    }
  };
};
