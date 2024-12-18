import { TodoForm, TodoList } from "./components";
import { Footer, Header } from "./ui";

const App = () => {
  return (
    <>
      <Header title="Todo list" />
      <TodoForm />
      <TodoList />
      <Footer />
    </>
  );
};

export default App;
