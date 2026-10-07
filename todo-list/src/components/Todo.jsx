import {useState} from "react";
import AddNewTaskForm from "./AddNewTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const [tasks, setTasks] = useState(
        [
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
    )

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteAllTasks = () => {
        const isConfirmed = confirm("Are you shure you want to delete all tasks?")
        if (isConfirmed) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return {...task, isDone}
                }
                return task
            })
        )
    }

    const filterTask = (query) => {
        console.log(`searching ${query}`)
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }
            setTasks([...tasks, newTask])
            setNewTaskTitle("")
        }
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddNewTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
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
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo