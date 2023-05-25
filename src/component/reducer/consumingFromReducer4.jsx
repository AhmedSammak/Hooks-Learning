import { useContext } from "react";
import { countContext } from "./useReducer4";
export default function ReduceConsumer() {
  const counter = useContext(countContext);
  return (
    <>
      <div> Count : {counter.countState}</div>
      <button
        onClick={() => {
          counter.countDispach("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counter.countDispach("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          counter.countDispach("reset");
        }}
      >
        Reset
      </button>
    </>
  );
}
