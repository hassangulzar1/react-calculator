import React, { useState } from "react";

const InputField = (props) => {
  return (
    <div className="row">
      <form name="cacl">
        <input
          value={props.value}
          type="text"
          className="bg-gradient-to-r from-blue-700 to-purple-600 w-full text-7xl font-bold text-slate-200 py-8 px-10 drop-shadow-xl"
          id="inputField"
          name="display"
          readOnly
        />
      </form>
    </div>
  );
};

export default InputField;
