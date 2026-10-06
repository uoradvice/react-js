import AddNewTaskForm from "./AddNewTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const tasks = [
        {
            id: "task-1",
            title: "Buy chips",
            isDone: false,
        },
        {
            id: "task-2",
            title: "Open chips",
            isDone: false,
        },
    ]

    const deleteAllTasks = () => {
        console.log("delete all tasks");
    }

    const deleteTask = (taskId) => {
        console.log(`deleted task ${taskId}`)
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Task ${taskId} ${isDone ? "is done" : "is not done"}`)
    }

    const filterTask = (query) => {
        console.log(`searching ${query}`)
    }

    const addTask = () => {
        console.log("task added")
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddNewTaskForm
                addTask={addTask}
            />
            <SearchTaskForm
                onSearchTaskInput={filterTask}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks = {tasks}
                onDeleteTaskButtonClick = {deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo