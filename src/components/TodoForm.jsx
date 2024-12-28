import { useState } from "react";
import { TodoItem } from "./";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    todoField: "",
  });
  const { todoField } = todo;
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoField.trim() === "") return;
    else if (todos.some((item) => item.text === todoField.trim())) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoField.trim(),
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
    setTodo((prevState) => ({
      ...prevState,
      todoField: "",
    }));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoField"
          onChange={handleChange}
          // value={todo}
          // onChange={(e) => setTodo(e.target.value)}
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
