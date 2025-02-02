import * as React from 'react';
import './../App.css';

export type Task = {
    id: number;
    title: string;
    important: boolean;
    done: boolean;
};


type Props = {
    task: Task;
    onToggleImportant: (id: number) => void;
    onToggleDone: (id: number) => void;
    onDeleteTask: (id: number) => void;
};
export const TasksLists = ({task, onToggleImportant, onToggleDone, onDeleteTask}: Props) => {
    let classNames = 'todo-item';
    if (task.important) {
        classNames += ' important';
    }
    if (task.done) {
        classNames += ' done';
    }
    return (
        <li key={task.id} className={classNames}>
      <span onClick={() => onToggleDone(task.id)} className="todo-item-text">
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
                <button
                    onClick={() => onDeleteTask(task.id)}
                    role="button"
                    className="btn btn-outline-danger btn-sm"
                >
                    Удалить
                </button>
            </div>
        </li>
    )
};