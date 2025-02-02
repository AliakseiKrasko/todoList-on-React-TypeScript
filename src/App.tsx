import React, {useState} from 'react';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([
        {id: 0, title: 'Выпить кофе', important: false, done: false},
        {id: 1, title: 'Сделать React приложение', important: true, done: false},
        {id: 2, title: 'Позавтракать', important: false, done: true},
    ])

    const onToggleDone = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, done: !task.done} : task
        ))

    }

    const onToggleImportant = (id: number) => {
        setTasks(tasks.map(task =>
        task.id === id ? {...task, important: !task.important} : task))
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
                  onClick={() => onToggleImportant(task.id)}
                  className="todo-item-text"
              >
                {task.title}
              </span>
                            <div className="btn-group">
                                <button
                                    onClick={() => onToggleDone(task.id)}
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
