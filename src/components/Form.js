import styles from "../style.module.css"


const Form = ({todo, setTodo, todoList, setTodoList})=>{
    const handleChange = (event)=>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        // const tempList = todoList
        // tempList.push(todo)
        // setTodoList(tempList)
        setTodoList([...todoList, todo])
        setTodo("")
        console.log(todoList)
    }

    return(
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleChange} className={styles.todoinput} placeholder="Add Todo Item"></input>
                <br />
                <button type="submit" className={styles.todobutton}>ADD</button>
            </form>
        </div>
    )
}
export default Form