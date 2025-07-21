import './ToDoList.css'
import { useContext, useState } from 'react';
import { TodosContext } from '../reducers/todo.reducer';




function ToDoList() {
    const {
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
        editTodo,
        clearCompleted,
        changeFilter,
        filter,
        undo,
        redo,
        canUndo,
        canRedo
    } = useContext(TodosContext);
    const [text, setText] = useState('');


    const handleAdd = () => {
        if (text.trim()) {
            addTodo(text)
            // console.log(text);
            setText('');
        }
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.completed;
        } else if (filter === 'completed') {
            return todo.completed;
        }
        return true;
    });

    const editTodoAlert = (todoID) => {
        const newTitle = prompt("Enter a new name of task: ").trim()
        if (newTitle != "") {
            editTodo(todoID, newTitle)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <div style={{ marginBottom: 10 }}>
                <button onClick={undo} disabled={!canUndo}>Undo</button>
                <button onClick={redo} disabled={!canRedo} style={{ marginLeft: 5 }}>Redo</button>
            </div>
            <h1>Todo List</h1>
            <div>
                <button onClick={() => changeFilter('all')}>All</button>
                <button onClick={() => changeFilter('active')}>Active</button>
                <button onClick={() => changeFilter('completed')}>Completed</button>
            </div>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAdd()}
                placeholder="Нове завдання..."
            />
            <button onClick={handleAdd}>Додати</button>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => editTodoAlert(todo.id)}
                            style={{ marginLeft: 10 }}>Edit</button>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            style={{ marginLeft: 10 }}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => clearCompleted()}>
                Очистити виконані
            </button>
            <p>{todos.filter(todo => !todo.completed).length} tasks left</p>
            <p>{todos.filter(todo => todo.completed).length} completed</p>
        </div>
    );
}

export default ToDoList;
