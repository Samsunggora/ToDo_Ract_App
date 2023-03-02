import Button from "../button/button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";


const TodoAction = (props) => {
    return (
        <>
            <Button title={"Reset ToDo's"} onClick={props.resetTodos}><RiRefreshLine/></Button>
            <Button title={"Clear completed ToDo's"} onClick={props.deleteCompletedTodo}><RiDeleteBin2Line/></Button>
        </>
    )
}
export default TodoAction