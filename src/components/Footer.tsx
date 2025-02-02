import * as React from 'react';
import {useState} from 'react';

type Props = {
    addTask: (title: string) => void;
};

export const Footer = (props: Props) => {

    const [inputValue, setInputValue] = useState('');

    const addTaskHundler = () => {
        if (inputValue.trim()) {
            props.addTask(inputValue);
            setInputValue("");
        }
    }

        return (
            <div>
                <footer className="footer">
                    <input value={inputValue} type="text" placeholder="Что необходимо сделать"
                           className="form-control me-2"
                           onChange={(e) => {
                               setInputValue(e.currentTarget.value)
                           }}/>
                    <button type="button" className="btn btn-primary" onClick={addTaskHundler}>
                        Добавить
                    </button>
                </footer>
            </div>
        );
    };
