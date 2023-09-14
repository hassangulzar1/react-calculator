import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Inv from "./Inv";
const SecondPage = (props) => {
  const [invState, setInvState] = useState(false);
  const sliderHandler = () => {
    props.onClick();
  };
  const invHandler = () => {
    setInvState((prevState) => !prevState);
  };

  return (
    <Fragment>
      {!invState && (
        <div id="firstInv" class="block">
          <div class="grid grid-rows-5 grid-flow-col bg-gray-400">
            {/* <!--! Button 7  --> */}
            <button
              class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
              onClick={() => props.value(7)}
            >
              7
            </button>
            {/* <!-- !Slider  --> */}
            <button
              class="text-black text-4xl rounded-l-full bg-white hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-l-full hover:ease duration-300"
              onClick={sliderHandler}
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
              onClick={() => props.value(1)}
            >
              1
            </button>

            {/* <!-- !Button Del  --> */}
            <button
              class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
              onClick={() => props.del()}
            >
              Del
            </button>
            {/* <!-- !Button /  --> */}
            <button
              class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
              onClick={() => props.value("/")}
            >
              /
            </button>

            {/* <!-- !Button Inv  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={invHandler}
            >
              Inv
            </button>
            {/* <!-- !Button sin  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              value="sin"
              onClick={() => props.value(sin(props.inputVal).toFixed(2))}
            >
              sin
            </button>
            {/* <!-- !Button In  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value(Math.log(props.inputVal).toFixed(2))}
            >
              In
            </button>
            {/* <!-- !Button 𝝿  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value(Math.PI.toFixed(2))}
            >
              π
            </button>
            {/* <!-- !Button x  --> */}
            <button
              class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
              onClick={() => props.value("*")}
            >
              x
            </button>
            {/* <!-- !Button Deg  --> */}
            <button class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300">
              Deg
            </button>
            {/* <!-- !Button cos  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value(Math.cos(props.inputVal).toFixed(2))}
            >
              cos
            </button>
            {/* <!-- !Button log  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value(Math.log10(props.inputVal).toFixed(2))}
            >
              log
            </button>
            {/* <!-- !Button e  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value(eval(Math.E.toFixed(2)))}
            >
              e
            </button>
            {/* <!-- !Button -  --> */}
            <button
              class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
              onClick={() => props.value("-")}
            >
              -
            </button>
            {/* <!-- !Button %  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value("%")}
            >
              %
            </button>
            {/* <!-- !Button tan  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value(Math.tan(props.inputVal).toFixed(2))}
            >
              tan
            </button>
            {/* <!-- !Button !  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value("!")}
            >
              !
            </button>
            {/* <!-- !Button ^  --> */}
            <button
              class="text-black bg-white p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gray-400 hover:ease duration-300"
              onClick={() => props.value("^")}
            >
              ^
            </button>
            {/* <!-- !Button + --> */}
            <button
              class="text-black bg-gray-400 p-2 px-5 py-10 text-5xl hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:rounded-full hover:ease duration-300"
              onClick={() => props.value("+")}
            >
              +
            </button>
          </div>
        </div>
      )}
      {invState && (
        <Inv
          inv={invHandler}
          value={props.value}
          inputVal={props.inputVal}
          onClick={sliderHandler}
          del={props.del}
        />
      )}
    </Fragment>
  );
};

export default SecondPage;
