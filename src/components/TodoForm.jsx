import { useState } from "react";
import { TodoItem } from "./";
import { useForm } from "../hooks";

const TodoForm = () => {
  const { formState, handleChange, resetForm } = useForm({ todoField: "" });
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.todoField.trim() === "") return;
    else if (todos.some((item) => item.text === formState.todoField.trim()))
      return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: formState.todoField.trim(),
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
    resetForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoField"
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
