import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {List} from './components/List';
import {Footer} from './components/Footer';
import {Search} from './components/Search';
import {v1} from 'uuid';

export type Task = {
    id: string;
    title: string;
    important: boolean;
    done: boolean;
};

function App() {
    // Загружаем задачи из localStorage при первом рендере
    const initialTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    // Состояние для фильтра
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    // Сохраняем задачи в localStorage при изменении состояния
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const onToggleDone = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? {...task, done: !task.done} : task
            )
        );
    };

    const onToggleImportant = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? {...task, important: !task.important} : task
            )
        );
    };

    const onDeleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const doneCount = tasks.filter((el) => el.done).length;
    const todoCount = tasks.length - doneCount;

    const addTask = (title: string) => {
        const newTask = {
            id: v1(),
            title,
            important: false,
            done: false,
        };
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    };

    return (
        <div className="todo-app">
            <Header doneCount={doneCount} todoCount={todoCount}/>
            <Search filter={filter} setFilter={setFilter}/>
            <List
                tasks={tasks}
                filter={filter}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
                onDeleteTask={onDeleteTask}
            />
            <Footer addTask={addTask}/>
        </div>
    );
}

export default App;
