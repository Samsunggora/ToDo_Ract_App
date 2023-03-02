import Button from "../button/button";
import {useState} from "react";
import "./todoForm.module.css"

const TodoForm = (props) => {


    const [text, setText] = useState("")


    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.addTodo(text)
        setText("")
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder={"Please input ToDo"} value={text}
                   onChange={(e) => {
                       setText((e.target.value))
                   }}/>
            <Button> Submit! </Button>
        </form>
    )
}

export default TodoForm