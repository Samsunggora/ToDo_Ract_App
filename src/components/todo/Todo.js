import styles from "./Todo.module.css"
import {TfiLayoutGrid4Alt} from "react-icons/tfi";
import {RiDeleteBin2Line} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";

const Todo = (props) => {
    console.log(styles)
    return (
        <div className={`${styles.todo} ${props.todo.isCompleted ? styles.completedTodo : ""}`}>
            <TfiLayoutGrid4Alt className={styles.todoIcon}/>
            <h3 className={styles.todoText}>{props.todo.text}</h3>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => props.deleteTodo(props.todo.id)}/>
            <FaCheck className={styles.checkIcon} onClick={() => {
                props.toggleTodo(props.todo.id)
            }}/>

        </div>
    )
}

export default Todo