import styles from "./styles.module.css";

interface TodoCounterProps {
  label: string;
  count: number;
}

export const TodoCounter = ({ label, count }: TodoCounterProps) => {
  return (
    <div className={styles.todoCounter}>
      <p>{label}</p>
      <span>{count}</span>
    </div>
  );
};
