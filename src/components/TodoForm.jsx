import { useState } from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return; 
    setTodos([...todos, todo]); 
    setTodo(''); 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="todoField" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
        />
        <button type="submit">Agregar</button>
      </form>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </>
  );
};

export default TodoForm;