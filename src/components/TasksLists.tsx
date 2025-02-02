import * as React from 'react';

type Task = {
    id: number;
    title: string;
    important: boolean;
    done: boolean;
};


type Props = {
    tasks: Task[];
    onToggleImportant: (id: number) => void;
    onToggleDone: (id: number) => void;
};
export const TasksLists = ( { tasks, onToggleImportant, onToggleDone }: Props ) => {
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
};