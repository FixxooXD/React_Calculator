import React, { useState, useReducer } from "react";
import { DigitBtn } from "./DigitBtn";
import { Operator } from "./Operator";

export const CalcWrapper = () => {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");

  const btn = (digit) => {
    if (currentOperand === "0" || currentOperand === 0) {
      setCurrentOperand(digit);
      console.log(currentOperand);
    } else setCurrentOperand(currentOperand + "" + digit);
  };

  const operation = (operator) => {
    if (previousOperand === "") {
      setPreviousOperand(currentOperand + "" + operator);
      setCurrentOperand("0");
    } else
      setPreviousOperand(previousOperand + "" + currentOperand + "" + operator);
      setCurrentOperand("0");
  };

  const INITIAL_STATE = "";

  const evaluate = () => {
   let previous = previousOperand.split("")
   let current = currentOperand + ""
   let currentArr = current.split("")


   let totalOppARR = previous.concat(currentArr)
   let cal = totalOppARR.join('')
   console.log(totalOppARR.join(''));
   setCurrentOperand(eval(cal))
   setPreviousOperand("")
   
  };

  const reducer = (state, actions) => {
    switch (actions.type) {
      case "DELETE":
        let cumm = currentOperand + "";
        if (currentOperand === 0 || currentOperand === "") {
          // console.log("yess");
          setCurrentOperand(previousOperand);
          setPreviousOperand("");
        } else {
          setCurrentOperand(cumm.slice(0, -1));
        }
        break;
      case "ALL_CLEAR":
        setCurrentOperand("0");
        setPreviousOperand("");
        break;

      case "EVALUATE":
        evaluate();
        break;

      default:
      // code block
      return state
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <>
      <div className="w-screen flex flex-col items-center border-2">
        <div className="flex flex-col border-2 w-[25rem] mt-[4rem]">
          <div className="h-[4rem] border-2 flex flex-col ">
            {/* previous */}
            <div className="flex justify-end h-[2rem] text-sm px-2 transition-all">
              {previousOperand}
            </div>
            {/* currentOperand */}
            <div className="flex justify-end h-[2rem] text-2xl px-2 transition-all">{currentOperand}</div>
          </div>
          {/* buttons */}
          <div className="grid grid-cols-4 border-4 w-[25rem]">
            <button
              onClick={() => dispatch({ type: "ALL_CLEAR" })}
              className="col-span-2 border-2">
              AC
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE" })}
              className="border-2">
              DEL
            </button>
            <Operator operation={operation} operator={"/"} />
            <DigitBtn digit={1} btn={btn} />
            <DigitBtn digit={2} btn={btn} />
            <DigitBtn digit={3} btn={btn} />
            <Operator operation={operation} operator={"*"} />
            <DigitBtn digit={4} btn={btn} />
            <DigitBtn digit={5} btn={btn} />
            <DigitBtn digit={6} btn={btn} />
            <Operator operation={operation} operator={"+"} />
            <DigitBtn digit={7} btn={btn} />
            <DigitBtn digit={8} btn={btn} />
            <DigitBtn digit={9} btn={btn} />
            <Operator operation={operation} operator={"-"} />
            <DigitBtn digit={"."} btn={btn} />
            <DigitBtn digit={0} btn={btn} />
            <button
              onClick={() => dispatch({ type: "EVALUATE" })}
              className="col-span-2 border-2">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
