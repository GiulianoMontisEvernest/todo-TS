import { useContext, FC } from "react";
import { AppContext } from "../store/context";
import SingleTodo from "./SingleTodo";

import './styles.css';

const TodoList: FC = () => {
    const { state } = useContext(AppContext);

    return (
        <div className='todos'>
            {state?.map((todo) =>
                <SingleTodo
                    key={todo.id}
                    todo={todo}
                />)}
        </div>
    )
};

export default TodoList;