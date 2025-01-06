import { useState } from "react";
import { TodoItem } from "./";
import { useForm } from "../hooks";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const { formState, handleChange, handleSubmit } = useForm(
    { todoField: "" },
    (formData) => {
      const todoText = formData.todoField.trim();

      if (todoText === "") return;
      if (todos.some((item) => item.text === todoText)) return;

      // Agregar nuevo todo
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          text: todoText,
          completed: false,
          isEditing: false,
        },
      ]);
    }
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoField"
          value={formState.todoField}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item.text} />
        ))}
      </ul>
    </>
  );
};

export default TodoForm;
