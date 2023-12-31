import { useContext } from "react";
import { HistoryContext } from "../HistoryNavigation/HistoryNavigation";
import styles from "./debug.module.css"

export default function Debug() {
  const { history } = useContext(HistoryContext);

  return (
    <div className={styles.debug__container}>
      <h2>History</h2>
      <ol>
        {history.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ol>
    </div>
  );
}