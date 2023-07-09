import Todo from "./Todo"
import styles from "../style.module.css"

const TodoList = ({todoList, setTodoList})=>{
    return (
        <div className={styles.todolist}>{todoList.map((todoItem)=>(
            <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList}/>
        ))}</div>
    )
}

export default TodoList