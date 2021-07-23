import { ADD_TODO, DELETE_TODO } from "./types"


export const addToDo = (todo : string) => 
{
    return(
        {
        type: ADD_TODO,
        payload: todo
        }
    );
}

export const deleteToDo = (key: number) => ({
    type: DELETE_TODO,
    payload: key
}
);