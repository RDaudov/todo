import classes from './Form.module.scss'
import { useState } from 'react'

export const Form = (props: { createNewToDo: Function }) => {

    const [text, setText] = useState<string>('')

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (text) {
            props.createNewToDo(text);
            setText('')
        }

    }

    return (
        <div className={classes.wrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}