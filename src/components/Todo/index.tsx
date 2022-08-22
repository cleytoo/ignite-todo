import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";
import styles from "./styles.module.css";

interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

interface TodoProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onCompleteTodo: (id: number, isComplete: boolean) => void;
}

export const Todo = ({ todo, onDeleteTodo, onCompleteTodo }: TodoProps) => {
  const handleDeleteTodo = () => onDeleteTodo(todo.id);

  const handleCompleteTodo = (event: ChangeEvent<HTMLInputElement>) => {
    onCompleteTodo(todo.id, event.target.checked);
  };

  return (
    <div className={styles.todo}>
      <input
        title="completar todo"
        type="checkbox"
        onChange={handleCompleteTodo}
        checked={todo.complete}
      />
      <p className={todo.complete ? styles.complete : ""}>{todo.content}</p>

      <button title="Deletar todo" onClick={handleDeleteTodo}>
        <Trash size={18} />
      </button>
    </div>
  );
};
