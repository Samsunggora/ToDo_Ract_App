import Todo from "../todo/Todo";
import styles from "./todoList.module.css"

const TodoList = (props) => {
    return (
        <div className={styles.todoListContainer}>
            {!props.todos.length && <h2>To list is empty</h2>}
            {props.todos.map((todo) => (
                <Todo key={todo.id} todo={todo}
                      deleteTodo={props.deleteTodo}
                      toggleTodo={props.toggleTodo}/>
            ))}
        </div>)
}
export default TodoList


