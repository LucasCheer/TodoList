const TodoItem = ({ todo }) => {
  return (
    <>
      <li>
        <button className="bi bi-check-circle-fill check-btn"></button>
        <h4>
          <span className="todo-text">{todo}</span>
        </h4>
        <button className="bi bi-trash-fill delete-btn"></button>
        <button className="bi bi-pencil-fill edit-btn"></button>
      </li>
    </>
  );
};

export default TodoItem;
