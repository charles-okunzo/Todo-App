import styles from "../style.module.css"


const Todo = ({todoItem, todoList, setTodoList, index})=>{
    const deleteTodo = ()=>{
        setTodoList(todoList.filter(item=>item.id !== todoItem.id))
    }

    return(
        <div className={styles.todoitemcontainer}>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{index+1}. {todoItem.name}</h3>
                <button onClick={deleteTodo} className={styles.deletebutton} type="submit">Done</button>
            </div>
        </div>
    )
}

export default Todo