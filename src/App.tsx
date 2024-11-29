import Calculator from "./components/Calculator";
import History from "./components/History";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Calculator />
      <History />
    </div>
  );
};

export default App;
