import React, { useState } from "react";

const LearnStateObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h4>your first name : {name.firstName}</h4>
      <h4>your last name : {name.lastName}</h4>
    </form>
  );
};

export default LearnStateObject;
