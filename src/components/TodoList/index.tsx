import { ClipboardText } from "phosphor-react";
import { Todo } from "../Todo";
import { TodoCounter } from "../TodoCounter";
import styles from "./styles.module.css";

interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

interface TodosListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onCompleteTodo: (id: number, isComplete: boolean) => void;
}

export const TodoList = ({
  todos,
  onDeleteTodo,
  onCompleteTodo,
}: TodosListProps) => {
  const completedTodos = todos.filter((todo) => todo.complete).length;

  return (
    <main className={styles.todoList}>
      <header>
        <TodoCounter label="Tarefas criadas" count={todos.length} />
        <TodoCounter label="Concluídas" count={completedTodos} />
      </header>

      {todos.length === 0 ? (
        <div className={styles.noTodos}>
          <ClipboardText size={56} />
          <p>
            {" "}
            <strong>Você ainda não tem tarefas cadastradas </strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <div className={styles.todos}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onCompleteTodo={onCompleteTodo}
            />
          ))}
        </div>
      )}
    </main>
  );
};
