import * as React from 'react';
import { TasksLists} from './TasksLists';
import {Task} from '../App';

type Props = {
    tasks: Task[];
    onToggleImportant: (id: number) => void;
    onToggleDone: (id: number) => void;
    onDeleteTask: (id: number) => void;
};


export const List = ({tasks, onToggleImportant, onToggleDone, onDeleteTask}: Props) => {

    const render = tasks.map((task) => {
        return <TasksLists task={task} onToggleImportant={onToggleImportant} onToggleDone={onToggleDone} onDeleteTask={onDeleteTask}/>;
    });

    const emptyList = (
        <li className="todo-item justify-content-center">
            <span className="todo-item-text">Список дел пуст</span>
        </li>
    );
    return (
        <div>
            <ul className="todo-list">{tasks.length > 0 ? render : emptyList}</ul>
        </div>
    );
};