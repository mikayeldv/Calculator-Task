import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICalculatorState {
  input: string;
  result: string;
}

const initialState: ICalculatorState = {
  input: "",
  result: "",
};

const evaluateExpression = (expr: string): number => {
  if (!expr.trim()) {
    throw new Error("Input cannot be empty");
  }

  expr = expr.replace(/\b0+(?=\d)/g, "");

  if (/^0+$/.test(expr.trim())) {
    return 0;
  }

  const operators = ["+", "-", "*", "/"];
  const stack: string[] = [];
  let num = "";
  let prevChar = "";

  const validChars = /^[0-9+\-*/().\s]+$/;
  if (!validChars.test(expr)) {
    throw new Error("Invalid character in expression");
  }

  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];

    if (char === "." && num.includes(".")) {
      throw new Error("Invalid number format");
    }

    if (operators.includes(char) && operators.includes(prevChar)) {
      throw new Error("Operators can't be consecutive");
    }

    if (
      (i === 0 && operators.includes(char)) ||
      (i === expr.length - 1 && operators.includes(char))
    ) {
      throw new Error("Expression cannot start or end with an operator");
    }

    if (!isNaN(Number(char)) || char === ".") {
      num += char;
    } else if (operators.includes(char)) {
      if (num) {
        stack.push(num);
        num = "";
      }
      while (
        stack.length > 2 &&
        typeof stack[stack.length - 2] === "string" &&
        getOperatorPriority(stack[stack.length - 2] + "") >=
          getOperatorPriority(char)
      ) {
        const right = stack.pop();
        const operator = stack.pop();
        const left = stack.pop();
        left &&
          right &&
          operator &&
          stack.push(operate(+left, +right, operator));
      }
      stack.push(char);
    }

    prevChar = char;
  }

  if (num) {
    stack.push(num);
  }

  while (stack.length > 1) {
    const right = stack.pop();
    const operator = stack.pop();
    const left = stack.pop();
    left &&
      right &&
      operator &&
      stack.push(operate(+left, +right, operator + ""));
  }

  const result = +stack[0];

  if (expr.includes("/0")) {
    throw new Error("Division by zero");
  }

  return result;
};

const getOperatorPriority = (operator: string): number => {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    default:
      return 0;
  }
};

const operate = (left: number, right: number, operator: string): string => {
  switch (operator) {
    case "+":
      return left + right + "";
    case "-":
      return left - right + "";
    case "*":
      return left * right + "";
    case "/":
      return left / right + "";
    default:
      throw new Error("Invalid operator");
  }
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
    },
    clearInput: (state) => {
      state.input = "";
      state.result = "";
    },
    calculateResult: (state) => {
      try {
        state.result = evaluateExpression(state.input).toString();
      } catch (error: any) {
        state.result = error.message || "Error";
      }
    },
  },
});

export const { setInput, clearInput, calculateResult } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
