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

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};
export default function LearnReducer3() {
  const [countOne, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
      <div> Count One : {countOne}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        + // counter 1
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        - // counter 1
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset // counter 1
      </button>
      <div> Count Two : {countTwo}</div>

      <button
        onClick={() => {
          dispatch2("increment");
        }}
      >
        + // counter 2
      </button>
      <button
        onClick={() => {
          dispatch2("decrement");
        }}
      >
        - // counter 2
      </button>

      <button
        onClick={() => {
          dispatch2("reset");
        }}
      >
        Reset // counter 2
      </button>
    </>
  );
}
