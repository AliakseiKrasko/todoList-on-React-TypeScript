import React from 'react';
import './App.css';

function App() {

    const tasks = [
        {id: 0, title: 'Выпить кофе', important: false, done: false},
        {id: 1, title: 'Сделать React приложение', important: true, done: false},
        {id: 2, title: 'Позавтракать', important: false, done: true},
    ]

    const onToggleDone = (id: number) => {
        const newTask = tasks.filter((task) => task.id !== id)
        console.log(newTask)
    }

    const onToggleImportant = (id: number) => {
        tasks[id].important = !tasks[id].important;
    }


    return (
        <div>
            <ul>
                {tasks.map((task) => {
                    // Формируем классы для конкретной задачи
                    let classNames = 'todo-item';
                    if (task.important) {
                        classNames += ' important';
                    }
                    if (task.done) {
                        classNames += ' done';
                    }

                    return (
                        <li key={task.id} className={classNames}>
              <span
                  onClick={() => onToggleDone(task.id)}
                  className="todo-item-text"
              >
                {task.title}
              </span>
                            <div className="btn-group">
                                <button
                                    onClick={() => onToggleImportant(task.id)}
                                    role="button"
                                    className="btn btn-outline-dark btn-sm"
                                >
                                    Важное
                                </button>
                                <button role="button" className="btn btn-outline-danger btn-sm">
                                    Удалить
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
