import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import styles from "./app.module.css";
import toast from "react-hot-toast";

interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState("");

  const notify = (content: string) => toast.success(content);

  const handleSetNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
    e.target.setCustomValidity("");
  };

  const handleCreateTodo = (e: FormEvent) => {
    e.preventDefault();
    const oldTodos = [...todos];

    const newTodo = {
      id: oldTodos?.length + 1,
      content: newTodoText,
      complete: false,
    };
    setTodos([...oldTodos, newTodo]);
    setNewTodoText("");
    notify("Tarafe criada com sucesso!");
  };

  const deleteTodo = (id: number) => {
    setTodos((state) => state.filter((item) => item.id !== id));
    notify("Tarefa deletada 🗑️");
  };

  const toCompleteTodo = (id: number, isComplete: boolean) => {
    const oldTodos = [...todos];
    const todoIndex = oldTodos.findIndex((todo) => todo.id === id);
    oldTodos[todoIndex].complete = isComplete;
    setTodos(oldTodos);
    const notifyContent = isComplete
      ? "Tarefa concluida com sucesso!"
      : "Tarefa desmarcada!";
    notify(notifyContent);
  };

  const invalidField = (e: InvalidEvent<HTMLInputElement>) =>
    e.target.setCustomValidity("Esse campo é obrigatório");

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleCreateTodo} className={styles.inputTodo}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => handleSetNewTodo(e)}
            value={newTodoText}
            required
            onInvalid={invalidField}
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onCompleteTodo={toCompleteTodo}
        />
      </div>
    </>
  );
};
