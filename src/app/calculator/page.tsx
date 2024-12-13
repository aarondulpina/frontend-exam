"use client";
import { calculatorKeys } from "@/constants/calculator";
import { useCalculator } from "@/context/calculatorContext";
import { inputTypes } from "@/types/calculator";

export default function CalculatorUI() {
  const { display, addInput, clearInput } = useCalculator();

  return (
    <div className="m-auto max-w-[500px] min-h-[420px] h-screen flex flex-col justify-center items-center">
      <div className="w-full border-2 border-slate-500 p-5 mb-4">
        <div className="text-right">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-4 max-h-[500px] max-w-[500px] w-full h-full">
        {calculatorKeys.map((btnValue, index) => (
          <div className="bg-slate-500 w-full h-full" key={`btn-${index}`}>
            <button
              className="w-full h-full"
              key={btnValue}
              onClick={() => addInput(btnValue as inputTypes)}
            >
              {btnValue}
            </button>
          </div>
        ))}
        <button onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
}
