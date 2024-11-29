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
  const operators = ["+", "-", "*", "/"];
  const stack: (number | string)[] = [];
  let num = "";
  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];
    if (!isNaN(Number(char)) || char === ".") {
      num += char;
    } else if (operators.includes(char)) {
      if (num) {
        stack.push(parseFloat(num));
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
          stack.push(operate(+left, +right, operator + ""));
      }
      if (char === "-" && (i === 0 || operators.includes(expr[i - 1]))) {
        num = "-";
      } else {
        stack.push(char);
      }
    }
  }
  if (num) {
    stack.push(parseFloat(num));
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
  return +stack[0];
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

const operate = (left: number, right: number, operator: string): number => {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return left / right;
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
      } catch {
        state.result = "Error";
      }
    },
  },
});

export const { setInput, clearInput, calculateResult } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
