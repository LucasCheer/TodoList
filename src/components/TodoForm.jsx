const TodoForm = () => {
  return (
    <>
      <form>
        <input type="text" name="todoField" />
        <button className="bi bi-plus-circle-fill add-todo" type="submit"></button>
      </form>
    </>
  );
};

export default TodoForm;
