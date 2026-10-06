import TodoItem from "./TodoItem.jsx";

const  TodoList = (props) => {
    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
    } = props

    const hasItems = true;
    if (!hasItems) {
        return (<div className="todo__empty-message"></div>)
    } else {
        return (
            <ul className="todo__list">
                {
                    tasks.map((task) => (
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

}

export default TodoList