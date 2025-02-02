import React, {useState} from 'react';
import './App.css';
import {TasksLists} from './components/TasksLists';
import {Header} from './components/Header';
import {List} from './components/List';
import {Footer} from './components/Footer';

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

    const onDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const doneCount = tasks.filter(el => el.done).length
    const todoCount = tasks.length - doneCount

    const addTask = (title: string) => {
        const newTask = {
            id: tasks.length,
            title,
            important: false,
            done: false,
        };
        setTasks([newTask, ...tasks]);
    };


    return (
        <div className="todo-app">
            <Header doneCount={doneCount} todoCount={todoCount}/>
            <List tasks={tasks} onToggleImportant={onToggleImportant} onToggleDone={onToggleDone}
                  onDeleteTask={onDeleteTask}/>
            <Footer addTask={addTask}/>
        </div>
    );
}

export default App;
