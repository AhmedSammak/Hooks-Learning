import React from "react";
import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        loading: false,
        post: {},
        error: "Some Thing Went Wrong",
      };

    default:
      return state;
  }
};

export default function ReducerfechingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, []);

  return (
    <div>
      <h3> {state.loading ? "loading" : state.post.title}</h3>
      {state.error ? state.error : null}
    </div>
  );
}
