/* useReducer
هو هوك يستخدم لادارة الحالة و قد تم باستخدامه انشاء useState 
 يقوم بتنفيذ تغيير معين على حالة ولكن بطريقة تختلف عن ال useState 
 useReducer( reducer function , initial value) 
 reducer(currentState,action ) return => new state 
نتحكم بالاكشن من خلال dispach 
 حيث انها تستخدم داخل onclick كما هو موضح بالمثال
 يمكننا استخدام الاوبجكت بدلا من القيمة الواحدة في الحالة و ذلك يفضل في حالة امكانية اضافة تعديلات لاحقة 
 يمكن ايضا استخدام اكثر من useReducer للتعامل مع اكثر من قيمة 
 بالاضافة الى ذلك يمكننا استخدام useContext معه و ذلك لمشاركة الحالة مع اكثر من مكون 
 ////////////////////////////////
 useState VS useReducer : 
 object / array => reducer
 number / string / boolean => state
 one or two transitions  => state
 too many transitions => reducer تغير قيمة الحالة 
 related state transition => state (no) // reduce(yes)
business logic => state (no) // reduce (yes)
Global => reducer // Local => state 

 */
import React from "react";
import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};
export default function LearnReducer2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div> CountOne : {count.firstCounter}</div>
      <div> CountTwo : {count.secondCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        +1 // counter 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        -1 // counter 1
      </button>

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        +5 // counter 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        -5 // counter 1
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>

      <br />
      <button
        onClick={() => {
          dispatch({ type: "increment2", value: 1 });
        }}
      >
        +1 // counter 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2", value: 1 });
        }}
      >
        -1 // counter 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment2", value: 5 });
        }}
      >
        +5 // counter 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2", value: 5 });
        }}
      >
        -5 // counter 2
      </button>
    </>
  );
}
