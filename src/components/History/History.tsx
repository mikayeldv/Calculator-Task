import { useAppSelector } from "../../store/hooks";
import styles from "./History.module.css";

const History = () => {
  const history = useAppSelector((state) => state.history);
  return (
    <div className={styles.container}>
      <div className={styles.title}>История операций</div>
      <hr />
      <div className={styles.historyContainer}>
        {history.map((eachOperation) => (
          <div key={eachOperation.id} className={styles.historyRow}>
            {eachOperation.date} {eachOperation.time} {eachOperation.input} ={" "}
            {eachOperation.result}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
