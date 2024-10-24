import classes from './Form.module.scss'

export const Form = (props: { text: string, createNewToDo: Function, setValue: Function }) => {
    const setText = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value) 
    }

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (props.text) {
            props.createNewToDo(props.text);
            props.setValue('')
        }
    }

    return (
        <div className={classes.wrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        type="text"
                        value={props.text}
                        onChange={setText}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}