import './App.css';
import TodoList from "./components/todoList/todoList";
import TodoForm from "./components/todoForm/todoForm";
import {useState} from "react";
import {v4 as uuidV4} from "uuid"
import TodoAction from "./components/todoAction/TodoAction";

function App() {
    const [todos, setTodos] = useState([])
    const setTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: uuidV4(),
        }
        setTodos([...todos, newTodo])
    }

    const resetTodoList = () => {
        setTodos([])
    }
    const deleteCompletedTodo = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    const toggleTodoFilter = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}
        }))
    }

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <TodoForm addTodo={setTodoHandler}/>
            {!!todos.length && <TodoAction resetTodos={resetTodoList} deleteCompletedTodo={deleteCompletedTodo}/>
            }
            <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoFilter}/>
        </div>
    );
}

export default App;
