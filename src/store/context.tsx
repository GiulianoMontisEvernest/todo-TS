import { createContext, useReducer, useEffect, Dispatch, FC } from "react";
import { appReducer } from './reducer';
import { Todo } from '../model/model';
import { Actions } from "./actions";

const initialState: Todo[] | [] = [];
export type AppState = typeof initialState;
const defaultDispatch: Dispatch<Actions> = () => initialState;

export const AppContext = createContext({
    state: initialState,
    dispatch: defaultDispatch
});

export const AppProvider: FC = ({ children}) => {
    const [ state, dispatch ] = useReducer(appReducer, initialState);

    useEffect(() => {
        const storedAppState = localStorage.getItem('appState');
        if (storedAppState)
            dispatch({ type: 'RESTORE_TODO', payload: JSON.parse(storedAppState) });
    }, []);

    useEffect(
        () => localStorage.setItem('appState', JSON.stringify(state)),
        [state]
    );

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    );
}
