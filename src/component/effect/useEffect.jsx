/* عندما يكون هناك اي تاثير خارجي على الدالة او الدالة لها تاثير على مكون خارجي يلزم استخدام useEffect 
مثل : فيتش من و الى الداتا بيس 
او دالة تعتمد على الوقت 
باختصار عندما لا تكون الدالة pure function 
ايضا عند التغيير في حالة state يعتبر ذلك تاثير خارجي و يلزم استخدام useEffect */
/* 
useEffect(() => {
    effect
    return () => {
        cleanup
    };
}, [input]);
عندما نستخدم افيكت فنحن نطلب من رياكت تنفيذ الدالة الموجودة بداخل ايفيكت في كل مرة يتم فيها عملية رندر
*/
import React, { useState, useEffect } from "react";

const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        you clicked {count} times
      </button>
    </div>
  );
};

export default LearnUseEffect;
