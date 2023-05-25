/* عندما نستخدم مكون في مكانين مختلفين و نقوم باعادة عرض احدهما
 ف ان الاخر ايضا يتم اعادة عرضه (ريندر) لذلك نستخدم useCallback
حيث انه يقوم باعادة عرض الدالة المطلوبة فقط  */

import React, { useCallback, useState } from "react";
import CallBackTitle from "./title";
import Buttun from "./buttun";
import Count from "./count";

const LearnUseCallBacks = () => {
  const [age, setAge] = useState(25);
  const [sallary, setSallary] = useState(5000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSallary = useCallback(() => {
    setSallary(sallary + 1);
  }, [sallary]);
  return (
    <div>
      <CallBackTitle />
      <Count text={"age"} count={age} />
      <Buttun handleClick={incrementAge} children={"Increment Age"} />
      <Count text={"Sallary"} count={sallary} />
      <Buttun handleClick={incrementSallary} children={"Increment Sallary"} />
    </div>
  );
};

export default LearnUseCallBacks;
