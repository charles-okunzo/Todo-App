import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todo from "./components/Todo";


function App() {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <Header />
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
      <Todo />
    </div>
  );
}

export default App;
