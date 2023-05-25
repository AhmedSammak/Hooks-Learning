/*  
هنا عندما نستخدم اي زر من الاثنين فانه ينفذ دالة
 حتى لو كنا نستخدم الزر الثاني و هذا يؤدي الى بطء في العملية is Even 
 خصوصا لو كان لدينا كود كبير لذلك نستخدم use memo 
 حيث انها تقوم بنفس عمل callback
 ولكن الفرق انها تستخدم مع القيم المرجعة من دالة 
تستخدم مع الدالة نفسها  call back 
*/
import React, { useState, useMemo } from "react";

const LearnUseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleCountOne = () => {
    setCounterOne(counterOne + 1);
  };

  const handleCountTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  let isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000) i++;
    /* هذا السطر لا يؤثر على عملية الريتيرن ولكن الهدف منه اطالة زمن تنفيذ هذه الدالة  */
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={handleCountOne}>counter one - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={handleCountTwo}>counter two - {counterTwo}</button>
    </div>
  );
};

export default LearnUseMemo;
