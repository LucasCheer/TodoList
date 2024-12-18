import { TodoItem } from "./";

const TodoList = () => {
  return (
    <>
      <div className="container">
        <ul>
          <TodoItem todo="Tarea 1" />
          <TodoItem todo="Tarea 2" />
          <TodoItem todo="Tarea 3" />
          <TodoItem todo="Tarea con nombre mas largo" />
        </ul>
      </div>
    </>
  );
};

export default TodoList;
