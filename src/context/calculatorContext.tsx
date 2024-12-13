import React, { createContext, useContext, useState } from "react";
import { inputTypes, operateType, operatorInput } from "@/types/calculator";

interface contextValue {
  input: number | null;
  display: number | string | null;
  addInput: (input: inputTypes) => void | string;
  clearInput: () => void;
}

interface props {
  children: React.ReactNode;
}

const CalculatorContext = createContext<contextValue>({} as contextValue);

export const CalculatorProvider: React.FC<props> = ({ children }) => {
  const [input, setInput] = useState<number | null>(null);
  const [lastInput, setLastInput] = useState<number | null>(null);
  const [operation, setOperation] = useState<operatorInput | null>(null);
  const [display, setDisplay] = useState<number | string | null>(0);
  const [integer, setInteger] = useState<number | null>(null);

  const addInput = (newInput: inputTypes) => {
    try {
      const numericValue = Number(newInput);
      if (["+", "-", "/", "*"].includes(newInput)) {
        //if an operator
        //always save the displayed value as the last value(an operand)
        setLastInput(Number(display));
        setOperation(newInput);
        checkIfOperable();
        if (!isNaN(Number(display))) {
          //clear the input to add condition that it will need a new number after pressing an operation
          setInput(null);
        }
      } else if (!isNaN(numericValue)) {
        //if a number
        if (input === null) {
          //for the condition above
          setDisplay(numericValue);
          setInput(numericValue);
        } else {
          //increment if new input
          const numericDisplay = Number(display + newInput);
          setDisplay(integer === null ? numericDisplay : display + newInput);
          setInput(numericDisplay);
        }
      } else if (newInput === "=") {
        checkIfOperable();
        //redo operation on every press
      } else if (newInput === ".") {
        //record the integer to add condition when incrementing fractional value
        if (integer === null) {
          setInteger(Number(display));
          setDisplay(Number(display) + ".");
        }
        //do nothing if pressed multiple times
      } else {
        throw new Error();
      }
    } catch (error) {
      setDisplay("Invalid Input");
    }
  };

  const clearInput = () => {
    setInput(0);
    setOperation(null);
    setLastInput(0);
    setDisplay(0);
    setInteger(null);
  };

  const checkIfOperable = () => {
    //should calculate as long as all values are present
    if (input !== null && lastInput !== null && operation !== null) {
      const newResult = calculateOperation({
        operandA: lastInput,
        operandB: input,
        operator: operation,
      });
      if (!isNaN(Number(newResult))) {
        setLastInput(Number(newResult));
      }
      setDisplay(newResult);
    }
  };

  const calculateOperation = ({
    operandA,
    operandB,
    operator,
  }: operateType) => {
    switch (operator) {
      case "+":
        return operandA + operandB;
      case "-":
        return operandA - operandB;
      case "*":
        return operandA * operandB;
      case "/":
        return operandB === 0 ? "Cannot divide by zero" : operandA / operandB;
      default:
        return "Invalid Operation";
    }
  };

  return (
    <CalculatorContext.Provider
      value={{ input, display, addInput, clearInput }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
export const useCalculator = () => useContext(CalculatorContext);
