import { useState } from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    setTodos([...todos, {id: Date.now(), text: todo, completed: false}]); 
    console.log(todos);
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
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li> 
        ))}
      </ul>
    </>
  );
};

export default TodoForm;