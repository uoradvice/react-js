import Field from "./Field.jsx";
import Button from "./Button.jsx";

const AddNewTaskForm = (props) => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
    } = props

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className={"todo__form"}
                lable="New task item"
                id="new-task"
                value={newTaskTitle}
                onInput={(event)=>{setNewTaskTitle(event.target.value)}}
            />
            <Button
                type="submit"
            >
                Add
            </Button>
        </form>
    )
}

export default AddNewTaskForm