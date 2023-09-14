import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Inv = (props) => {
  return (
    <Fragment>
      <div class="grid grid-rows-5 grid-flow-col bg-gray-400">
        {/* <!--! Button 7  --> */}
        <button
          class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onclick="insertValue(7)"
        >
          7
        </button>
        {/* <!-- !Slider  --> */}
        <button
          class="text-black text-4xl rounded-l-full bg-white hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-l-full hover:ease duration-300"
          onClick={() => props.onClick()}
        >
          <FontAwesomeIcon
            icon={faAngleUp}
            rotation={90}
            style={{ color: "#322f2f" }}
          />
        </button>
        {/* <!--! Button 1  --> */}
        <button
          class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onclick="insertValue(1)"
        >
          1
        </button>

        {/* <!-- !Button Del  --> */}
        <button
          class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onclick="Del()"
        >
          Del
        </button>
        {/* <!-- !Button /  --> */}
        <button
          class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onclick="insertValue('/')"
        >
          /
        </button>

        {/* <!-- !Button Inv  --> */}
        <button
          class="text-black bg-gradient-to-r from-blue-600 to-purple-600 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onClick={() => props.inv()}
        >
          Inv
        </button>
        {/* <!-- !Button sin Inverse  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          value="sin"
          onclick="document.cacl.display.value=Math.asin(document.cacl.display.value).toFixed(5)"
        >
          sin<sup>-1</sup>
        </button>
        {/* <!-- !Button ex  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.pow(Math.E,document.cacl.display.value).toFixed(5)"
        >
          e<sup>x</sup>
        </button>
        {/* <!-- !Button x3  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.pow(document.cacl.display.value,2).toFixed(2)"
        >
          x<sup>3</sup>
        </button>

        {/* <!-- !Button x  --> */}
        <button
          class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onclick="insertValue('*')"
        >
          x
        </button>
        {/* <!-- !Button Deg  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="Deg()"
        >
          Deg
        </button>
        {/* <!-- !Button cos inverse --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.acos(document.cacl.display.value).toFixed(5)"
        >
          cos<sup>-1</sup>
        </button>
        {/* <!-- !Button 10x  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.pow(10,document.cacl.display.value).toFixed(0)"
        >
          10<sup>x</sup>
        </button>
        {/* <!-- !Button exp  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.exp(document.cacl.display.value).toFixed(3)"
        >
          exp
        </button>
        {/* <!-- !Button -  --> */}
        <button
          class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onclick="insertValue('-')"
        >
          -
        </button>
        {/* <!-- !Button %  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="insertValue('%')"
        >
          %
        </button>
        {/* <!-- !Button tan inverse --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.atan(document.cacl.display.value).toFixed(5)"
        >
          tan<sup>-1</sup>
        </button>
        {/* <!-- !Button √  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.sqrt(document.cacl.display.value).toFixed(1)"
        >
          √
        </button>
        {/* <!-- !Button x2  --> */}
        <button
          class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
          onclick="document.cacl.display.value=Math.pow(document.cacl.display.value,2).toFixed(2)"
        >
          x<sup>2</sup>
        </button>
        {/* <!-- !Button + --> */}
        <button
          class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
          onclick="insertValue('+')"
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default Inv;
