const TodoItem = ({ todo }) => {
  return (
    <>
      <li>
        <button>Terminado</button>
        <h4>
          <span>{todo}</span>
        </h4>
        <button>Eliminar</button>
        <button>Editar</button>
      </li>
    </>
  );
};

export default TodoItem;
