import { AppState } from "./context";

type EditPayload = {
    id: number;
    editTodo: string;
}

export type Actions =
    { type: 'ADD_TODO'; payload: string } |
    { type: 'EDIT_TODO'; payload: EditPayload } |
    { type: 'DELETE_TODO'; payload: number } |
    { type: 'TOGGLE_DONE'; payload: number } |
    { type: 'RESTORE_TODO'; payload: AppState };

