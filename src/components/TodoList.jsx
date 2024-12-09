import { TodoItem } from "./";

const TodoList = () => {
  return (
    <>
      <ul>
        <TodoItem todo="Tarea 1" />
        <TodoItem todo="Tarea 2" />
        <TodoItem todo="Tarea 3" />
      </ul>
    </>
  );
};

export default TodoList;
