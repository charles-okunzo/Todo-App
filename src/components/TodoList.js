import Todo from "./Todo"
import styles from "../style.module.css"

const TodoList = ({todoList, setTodoList})=>{
    return (
        <div className={styles.todolist}>{todoList.map((todoItem, index)=>(
            <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList} index={index}/>
        ))}</div>
    )
}

export default TodoList