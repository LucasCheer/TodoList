import "./styles/App.css";
import { TodoForm, TodoList } from "./components";
import { Header } from "./ui";

const App = () => {
  return (
    <>
      <Header title="Todo list" />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
