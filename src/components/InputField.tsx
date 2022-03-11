import { useContext, useState, useRef, FC, ChangeEvent, FormEvent } from "react";
import { AppContext } from "../store/context";

import './styles.css'

const InputField: FC = () => {
    const { dispatch } = useContext(AppContext);
    const [todo, setTodo] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (todo) {
            dispatch({ type: 'ADD_TODO', payload: todo });
            setTodo("");
        }
        inputRef.current?.blur();
    };

    return (
        <form className='input' onSubmit={handleSubmit}>
            <input
                type='input'
                className='input__box'
                placeholder='Enter a task name'
                value={todo}
                onChange={handleChange}
                ref={inputRef}
            />
            <button type='submit' className='input__submit'>Go</button>
        </form>)
}

export default InputField;