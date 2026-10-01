import AddNewTaskForm from "./AddNewTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddNewTaskForm/>
            <SearchTaskForm/>
            <TodoInfo/>
            <TodoList/>
        </div>
    )
}

export default Todo