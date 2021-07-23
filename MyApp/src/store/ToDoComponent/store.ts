import { combineReducers, createStore } from "redux";
import toDoReducer from "./toDoReducer";

const rootReducer = combineReducers({
    todos: toDoReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore;