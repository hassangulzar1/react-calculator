import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const FirstPage = (props) => {
  const insertValueHandler = (value) => {
    props.value(value);
  };

  return (
    <Fragment>
      {/* <!-- *First 6 buttons pair  --> */}

      <div class="grid grid-rows-2 grid-flow-col">
        {/* <!-- !Button 7  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(7)}
        >
          7
        </button>
        {/* <!-- !Button 8  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(4)}
        >
          4
        </button>
        {/* <!-- !Button 8  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(8)}
        >
          8
        </button>
        {/* <!-- !Button 5  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(5)}
        >
          5
        </button>
        {/* <!-- !Button 9  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(9)}
        >
          9
        </button>

        {/* <!-- !Button 6  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(6)}
        >
          6
        </button>
        {/* <!-- !clear  --> */}
        <button
          class="text-white text-4xl rounded-r-full rounded-t-none rounded-b-full rounded-l-full hover:text-white bg-purple-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => props.onClear()}
        >
          <FontAwesomeIcon icon={faRotateLeft} />
        </button>
        {/* <!-- !Slider  --> */}
        <button
          class="text-white text-4xl rounded-l-full bg-gray-300 hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-l-full hover:ease duration-300"
          onClick={() => props.onClick()}
        >
          <FontAwesomeIcon
            icon={faAngleUp}
            rotation={270}
            style={{ color: "#322f2f" }}
          />
        </button>
      </div>

      {/* <!-- *Next 6 buttons pairs  --> */}

      <div class="grid grid-rows-2 grid-flow-col">
        {/* <!-- !Button 1  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(1)}
        >
          1
        </button>
        {/* <!-- !Button Del  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => props.del()}
        >
          Del
        </button>
        {/* <!-- !Button 2  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(2)}
        >
          2
        </button>
        {/* <!-- !Button 0  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(0)}
        >
          0
        </button>
        {/* <!-- !Button 3  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(3)}
        >
          3
        </button>
        {/* <!-- !Button .  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler(".")}
        >
          .
        </button>
        {/* <!-- !Button =  --> */}
        <button
          class="row-span-2 text-white text-5xl bg-gradient-to-b from-blue-600 to-purple-600 p-2 rounded-t-full rounded-b-full hover:text-black px-5 py-10 hover:ease-in duration-300"
          onClick={() => props.eval()}
        >
          =
        </button>
      </div>

      <div class="grid grid-rows-1 grid-flow-col">
        {/* <!-- !Button /  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler("/")}
        >
          /
        </button>
        {/* <!-- !Button X  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler("*")}
        >
          x
        </button>
        {/* <!-- !Button -  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onClick={() => insertValueHandler("-")}
        >
          -
        </button>
        {/* <!-- !Button +  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:ease duration-300 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full"
          onClick={() => insertValueHandler("+")}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default FirstPage;
