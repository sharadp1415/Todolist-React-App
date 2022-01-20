import "./App.css";
import TodoList from "./todos/TodoList";
import CompletedTodoList from "./todos/CompletedTodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <CompletedTodoList />
    </div>
  );
}

export default App;
