import styles from "../style.module.css"
import shortid from "shortid"


const Form = ({todo, setTodo, todoList, setTodoList})=>{
    const handleChange = (event)=>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event)=>{
        if (todo == ""){
            event.preventDefault();
            alert("Please enter a Todo task!")
        } else{
            event.preventDefault();
            // const tempList = todoList
            // tempList.push(todo)
            // setTodoList(tempList)
            setTodoList([...todoList, {name:todo, id:shortid.generate()}])
            setTodo("")
            console.log(todoList)
        }
    }

    return(
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit} className={styles.formbody}>
                <input type="text" value={todo} onChange={handleChange} className={styles.todoinput} placeholder="Add Todo Item"></input>
                <br />
                <button type="submit" className={styles.todobutton}>ADD</button>
            </form>
        </div>
    )
}
export default Form