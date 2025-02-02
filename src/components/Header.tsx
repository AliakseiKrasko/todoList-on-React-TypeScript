import * as React from 'react';
import './../App.css';

type Props = {
    todoCount: number
    doneCount: number
};
export const Header = ( {todoCount, doneCount}: Props) => {
    return (
        <div>
            <header className="header">
                <h1 className="header-title">Список дел</h1>
                <span className="header-desc">{todoCount} осталось, {doneCount} сделано</span>
            </header>
        </div>
    );
};