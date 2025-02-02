import React, {useState} from 'react';
import './App.css';
import {TasksLists} from './components/TasksLists';

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


    return (
        <div>
           < TasksLists tasks={tasks} onToggleImportant={onToggleImportant} onToggleDone={onToggleDone} onDeleteTask={onDeleteTask}/>
        </div>
    );
}

export default App;
