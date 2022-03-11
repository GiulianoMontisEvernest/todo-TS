import { useState, useRef, useEffect, useContext, FormEvent, FC, ChangeEvent} from "react";
import { AppContext } from "../store/context";
import { Todo } from "../model/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import './styles.css';

interface Props {
    todo: Todo;
}

const SingleTodo: FC<Props> = ({ todo: { id, todo, isDone}}) => {
    const { dispatch } = useContext(AppContext);

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditTodo(e.target.value)
    };
    const handleToggleEdit = () => {
        if (!edit && !isDone) {
            setEdit(!edit);
        }
        if (edit && !isDone) {
            setEdit(!edit);
        }
    };
    const handleEdit = (e: FormEvent, id: number) => {
        e.preventDefault();
        dispatch({ type: 'EDIT_TODO', payload: { editTodo, id } });
        setEdit(!edit);
    };
    const handleDelete = ( id: number ) => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };
    const handleToggleDone = ( id: number ) => {
        dispatch({ type: 'TOGGLE_DONE', payload: id });
    };

    return (
        <form className='todos__single' onSubmit={(e) => handleEdit(e, id)}>
            {
                edit &&
                <input
                    className='todos__single--text'
                    type='text'
                    ref={inputRef}
                    value={editTodo}
                    onChange={handleChange}/>
            }
            {
                !edit && isDone
                    ? <s className='todos__single--text'>{todo}</s>
                    : <span className='todos__single--text'>{todo}</span>
            }

            <div>
                <span className='icon' onClick={handleToggleEdit}>
                    <AiFillEdit/>
                </span>
                <span className='icon' onClick={() => handleDelete(id)}>
                    <AiFillDelete/>
                </span>
                <span className='icon' onClick={() => handleToggleDone(id)}>
                    <MdDone/>
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;