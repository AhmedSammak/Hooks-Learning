import { useContext } from "react";
import { CounterContext } from "./providerContext";

export default function Consuming() {
  const value = useContext(CounterContext);
  return (
    <>
      <p>
        {`The counter value: ${value} "From the consuming function
      `}
        <br />
        {`After Using Context Api" `}
      </p>
    </>
  );
}
