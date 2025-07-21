import { useReducer, createContext, useEffect } from "react";

const INITIAL_STATE = {
    past: [],
    present: {
        todos: [],
        filter: 'all',
    },
    future: []
};


const TODO_ACTION_TYPES = {
    todoAdded: 'todoAdded',
    todoToggled: 'todoToggled',
    todoRemoved: 'todoRemoved',
    todoEdited: 'todoEdited',
    todosClearedCompleted: 'todosClearedCompleted',
    filterChanged: 'filterChanged',
    undo: 'undo',
    redo: 'redo',
};



function todosReducer(state, action) {
    const { type, payload } = action;
    const { past, present, future } = state;
    function nextState(newPresent) {
        return {
            past: [...past, present],
            present: newPresent,
            future: [],
        };
    }
    switch (type) {
        case TODO_ACTION_TYPES.todoAdded:
            return nextState({
                ...present,
                todos: [
                    ...present.todos,
                    { id: Date.now(), text: payload, completed: false },
                ],
            });
        case TODO_ACTION_TYPES.todoToggled:
            return nextState({
                ...present,
                todos: present.todos.map(todo =>
                    todo.id === payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            });
        case TODO_ACTION_TYPES.todoRemoved:
            return nextState({
                ...present,
                todos: present.todos.filter(todo => todo.id !== payload),
            });
        case TODO_ACTION_TYPES.todoEdited:
            return nextState({
                ...present,
                todos: present.todos.map(todo =>
                    todo.id === payload.id ? { ...todo, text: payload.text } : todo
                ),
            });
        case TODO_ACTION_TYPES.todosClearedCompleted:
            return nextState({
                ...present,
                todos: present.todos.filter(todo => !todo.completed),
            });
        case TODO_ACTION_TYPES.filterChanged:
            return nextState({
                ...present,
                filter: payload
            });
        case TODO_ACTION_TYPES.undo:
            if (past.length === 0) return state;
            return {
                past: past.slice(0, -1),
                present: past[past.length - 1],
                future: [present, ...future],
            };
        case TODO_ACTION_TYPES.redo:
            if (future.length === 0) return state;
            return {
                past: [...past, present],
                present: future[0],
                future: future.slice(1),
            };
        default:
            return state;
    }
}


const init = () => {
    const stored = localStorage.getItem('todosState');
    if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed.todos)) {
            return {
                past: [],
                present: {
                    todos: parsed.todos || [],
                    filter: parsed.filter || 'all',
                },
                future: []
            };
        }
        if (parsed.present && (!Array.isArray(parsed.present.todos) || typeof parsed.present.filter !== 'string')) {
            return {
                past: [],
                present: {
                    todos: [],
                    filter: 'all',
                },
                future: []
            };
        }
        if (parsed.present) {
            return {
                past: parsed.past || [],
                present: {
                    todos: parsed.present.todos || [],
                    filter: parsed.present.filter || 'all',
                },
                future: parsed.future || []
            };
        }
        return parsed;
    }
    return INITIAL_STATE;
};
  

export const TodosContext = createContext({
    todos: [],
    filter: 'all',
    addTodo: () => {},
    toggleTodo: () => {},
    removeTodo: () => {},
    editTodo: () => {},
    clearCompleted: () => {},
    changeFilter: () => {},
    undo: () => {},
    redo: () => {},
    canUndo: false,
    canRedo: false,
});
  
export const TodosProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todosReducer, INITIAL_STATE, init);

    useEffect(() => {
        localStorage.setItem('todosState', JSON.stringify(state));
    }, [state]);

    const addTodo = (text) => dispatch({ type: TODO_ACTION_TYPES.todoAdded, payload: text });
    const toggleTodo = (id) => dispatch({ type: TODO_ACTION_TYPES.todoToggled, payload: id });
    const removeTodo = (id) => dispatch({ type: TODO_ACTION_TYPES.todoRemoved, payload: id });
    const editTodo = (id, text) => dispatch({ type: TODO_ACTION_TYPES.todoEdited, payload: { id, text } });
    const clearCompleted = () => dispatch({ type: TODO_ACTION_TYPES.todosClearedCompleted });
    const changeFilter = (filter) => dispatch({ type: TODO_ACTION_TYPES.filterChanged, payload: filter });
    const undo = () => dispatch({ type: TODO_ACTION_TYPES.undo });
    const redo = () => dispatch({ type: TODO_ACTION_TYPES.redo });

    const canUndo = state.past && state.past.length > 0;
    const canRedo = state.future && state.future.length > 0;

    const value = {
        todos: state.present.todos,
        filter: state.present.filter,
        addTodo,
        toggleTodo,
        removeTodo,
        editTodo,
        clearCompleted,
        changeFilter,
        undo,
        redo,
        canUndo,
        canRedo,
    };

    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    );
};
  