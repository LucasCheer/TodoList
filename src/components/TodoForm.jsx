import { useState } from 'react';
import TodoItem from './TodoItem';

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
          <TodoItem key={item.id} todo={item.text} />
        ))}
      </ul>
    </>
  );
};

export default TodoForm;