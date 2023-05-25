/*
عندما نستخدم افيكت فنحن نطلب من رياكت تنفيذ الدالة الموجودة بداخل ايفيكت في كل مرة يتم فيها عملية رندر
وذلك قد يسبب مشاكل و لذلك نستخدمه في حالة مشروطة حيث نضيف مصفوفة من الحالات او الخصائص التي نريد لدالة الايفيكت ان يتم تنفيذها في حالة تغيير هذه الحالات او الخصائص فقط 
لو وضعنا مصفوفة فارغة ف هذا يعني اننا نريد ل دالة الايفيكت ان تعمل مرة واحدة فقط 
*/

import React, { useState, useEffect } from "react";

const LearnConditionalyEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log("use Effect is used");
  }, [count]);
  /* لو وضعنا متغير الاسم هنا ايضا فان الدالة سيتم تنفيذها مع كل تغيير على الاسم  */
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        you clicked {count} times
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default LearnConditionalyEffect;
