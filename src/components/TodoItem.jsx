const TodoItem = ({ todo }) => {
  return (
    <>
      <li>
        <button className="bi bi-check-circle-fill check-btn fs-2"></button>
        <h4>
          <span className="todo-text">{todo}</span>
        </h4>
        <button className="bi bi-trash-fill delete-btn fs-2"></button>
        <button className="bi bi-pencil-fill edit-btn fs-2"></button>
      </li>
    </>
  );
};

export default TodoItem;
