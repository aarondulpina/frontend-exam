type numberInput = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type equalOperator = "=";
type decimalPoint = ".";
export type operatorInput = "+" | "-" | "*" | "/";

export type inputTypes = numberInput &
  operatorInput &
  equalOperator &
  decimalPoint;

export type operateType = {
  operandA: number;
  operandB: number;
  operator: operatorInput;
};
