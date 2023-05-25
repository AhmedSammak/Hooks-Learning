/*
استخدام ريتيرن في دالة الايفيكت يسمى ب كلينر و ذلك لانو يعوض دالة انماونت في الكلاس 
اي بمعنى انه يستخدم لتوضيح ما يجب ان يحدث عند ازالة المكون او توقف عمله لو بشكل مؤقت
 الى ان يحدث  تحديث اخر على الحالة الموجودة ب المصفوفة 
*/
import React, { useState } from "react";
import HookMouse from "./hookMouse";

const LearnCleanerEffect = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
};

export default LearnCleanerEffect;
