import * as React from 'react';
import { TasksLists} from './TasksLists';
import {Task} from '../App';

type Props = {
    tasks: Task[];
    filter: 'all' | 'active' | 'completed';
    onToggleImportant: (id: string) => void;
    onToggleDone: (id: string) => void;
    onDeleteTask: (id: string) => void;
};


export const List = ({tasks, filter, onToggleImportant, onToggleDone, onDeleteTask}: Props) => {

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'active') return !task.done;
        if (filter === 'completed') return task.done;
        return true;
    });

    const render = filteredTasks.map((task) => {
        return (
            <TasksLists
                key={task.id}
                task={task}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
                onDeleteTask={onDeleteTask}
            />
        );
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