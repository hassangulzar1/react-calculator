import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/Input/InputField";
import FirstPage from "./Components/Buttons/FirstPage";
import SecondPage from "./Components/Buttons/SecondPage";
function App() {
  const [pagesState, setPagesState] = useState(true);
  const [valueState, setValueState] = useState("");

  //! Pages State Changer
  const showFirstPage = () => {
    setPagesState(true);
  };
  const showSecondPage = () => {
    setPagesState(false);
  };
  //! Entered Values
  const insertValues = (value) => {
    setValueState((prevState) => (prevState += value));
  };
  //! cleared Values
  const onClear = () => {
    setValueState("");
  };
  //! Del Values
  const del = () => {
    setValueState((prevState) => prevState.slice(0, prevState.length - 1));
  };
  //! Evaluation
  const evaluation = () => {
    setValueState((prevState) => {
      if (prevState.includes("^")) {
        let index = prevState.indexOf("^");
        let value1 = parseInt(prevState.slice(0, index));
        let value2 = parseInt(prevState.slice(index + 1, prevState.length));
        return Math.pow(value1, value2);
      }
      // Factorial
      if (prevState.includes("!")) {
        function factorial(n) {
          if (n === 0 || n === 1) {
            return 1;
          } else {
            return n * factorial(n - 1);
          }
        }
        let valueInt = parseInt(prevState);
        return factorial(valueInt);
      }

      try {
        let evaluation = eval(prevState);
        return evaluation.toString();
      } catch (error) {
        return "ERROR";
      }
    });
  };

  return (
    <div className="h-screen w-screen flex align-middle bg-no-repeat bg-cover logo">
      <div className="calculator 2xl:w-3/12 xl:w-1/4 lg:w-2/6 md:w-2/4 sm:w-3/5 w-4/5 mx-auto my-auto bg-white border-2 border-white">
        <InputField value={valueState} />
        {pagesState ? (
          <FirstPage
            onClick={showSecondPage}
            value={insertValues}
            onClear={onClear}
            del={del}
            eval={evaluation}
          />
        ) : (
          <SecondPage
            del={del}
            value={insertValues}
            inputVal={valueState}
            onClick={showFirstPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
