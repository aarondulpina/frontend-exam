"use client";
import { calculatorKeys } from "@/constants/calculator";
import { useCalculator } from "@/context/calculatorContext";
import { inputTypes } from "@/types/calculator";

export default function CalculatorUI() {
  const { display, addInput, clearInput } = useCalculator();

  return (
    <div className=" text-xl font-bold text-white calculator m-auto max-w-[500px] min-h-[420px] h-screen flex flex-col justify-center items-center">
      <div className="w-full border-2 border-slate-500 p-5 mb-1 text-slate-500">
        <div className="text-right">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-1 max-h-[500px] max-w-[500px] w-full h-full">
        {calculatorKeys.map((btnValue, index) => (
          <div
            className={`${
              ["+", "-", "/", "*"].includes(btnValue)
                ? "bg-amber-500"
                : "bg-slate-500"
            } w-full h-full`}
            key={`btn-${index}`}
          >
            <button
              className="w-full h-full "
              key={btnValue}
              onClick={() => addInput(btnValue as inputTypes)}
            >
              {btnValue}
            </button>
          </div>
        ))}
        <button className="bg-red-500 col-span-2" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
}
