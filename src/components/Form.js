import styles from "../style.module.css"


const Form = ()=>{
    return(
        <div className={styles.todoform}>
            <form>
                <input className={styles.todoinput} placeholder="Add Todo Item"></input>
                <br />
                <button className={styles.todobutton}>ADD</button>
            </form>
        </div>
    )
}
export default Form