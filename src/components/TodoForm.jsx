import { useState } from "react";

const [todoField, setTodoField] = useState('');

const TodoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoField" />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

export default TodoForm;