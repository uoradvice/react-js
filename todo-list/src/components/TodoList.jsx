import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
        filteredTasks,
    } = props

    const hasItems = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if (!hasItems) {
        return (<div className="todo__empty-message">No tasks yet</div>)
    }

    if(isEmptyFilteredTasks){
        return (<div className="todo__empty-message">Task not found </div>)
    }

    return (
        <ul className="todo__list">
            {
                (filteredTasks ?? tasks).map((task) => (
                    <TodoItem
                        classname="todo__list"
                        key={task.id}
                        onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                        onTaskCompleteChange={onTaskCompleteChange}
                        {...task}
                    />
                ))
            }
        </ul>
    )


}

export default TodoList