import { useEffect } from "react";
import { buttons } from "../../defaultValues/defaultValues";
import { RootState } from "../../store/store";
import {
  calculateResult,
  clearInput,
  setInput,
} from "../../store/Slices/CalculatorSlice/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToHistory } from "../../store/Slices/HistorySlice/historySlice";
import styles from "./Calculator.module.css";

const Calculator: React.FC = () => {
  const dispatch = useAppDispatch();
  const input = useAppSelector((state: RootState) => state.calculator.input);
  const result = useAppSelector((state: RootState) => state.calculator.result);

  useEffect(() => {
    if (result) {
      dispatch(addToHistory({ input, result }));
    }
  }, [result, dispatch]);

  const handleClick = (value: string): void => {
    if (value === "=") {
      dispatch(calculateResult());
    } else if (value === "C") {
      dispatch(clearInput());
    } else {
      dispatch(setInput(value));
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.displayArea}>{result || input || "0"}</div>
      <div className={styles.buttonGrid}>
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`${styles.buttonElement} ${
              isNaN(Number(btn)) ? `${styles.buttonOperator}` : ""
            }`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
