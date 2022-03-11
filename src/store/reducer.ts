import { Actions } from "./actions";
import { AppState } from "./context";
import { Reducer } from "react";

export const appReducer: Reducer<AppState, Actions> = (appState, action): AppState => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...appState,
                {
                    id: Date.now(),
                    todo: action.payload,
                    isDone: false
                }
            ];
        case 'DELETE_TODO':
            return appState.filter( todo => todo.id !== action.payload )
        case 'EDIT_TODO':
            return appState.map( todo => {
                if ( todo.id === action.payload.id) return {
                    ...todo,
                    todo: action.payload.editTodo
                }
                else return todo;
            });
        case 'TOGGLE_DONE':
            return appState.map( todo => {
                if (todo.id === action.payload) return {
                    ...todo,
                    isDone: !todo.isDone,
                }
                else return todo;
            });
        case 'RESTORE_TODO':
            console.log('restore todo', action.payload);
            return action.payload;
        default:
            return appState;
    }
}