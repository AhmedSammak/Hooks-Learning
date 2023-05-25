import { useState } from "react";
import React from "react";
import Consuming from "./consumerContext";

export const CounterContext = React.createContext();
export default function Providing() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      <CounterContext.Provider value={counter}>
        <button onClick={handleClick}>+1</button>
        <p>{counter}</p>
        <Consuming />
      </CounterContext.Provider>
    </>
  );
}
/* useContext 
الهدف الاساسي من هذا ال هوك هو تجنب استخدام 
prop drilling && lefting state up 
عند محاولة نقل حالة معينة من مكون لاخر 
حيث يعتمد على ملفين واحد يعطي الحالة و الاخر يستقبلها بناءا على نص معين كما هو موضح بالاعلى 
*/
