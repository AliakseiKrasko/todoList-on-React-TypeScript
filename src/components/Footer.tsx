import * as React from 'react';
import {useState} from 'react';
import {Button, Stack} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

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
                <Stack direction="row" spacing={2}>
                    <input value={inputValue} type="text" placeholder="Что необходимо сделать"
                           className="form-control me-2"
                           onChange={(e) => {
                               setInputValue(e.currentTarget.value)
                           }}/>
                    <Button onClick={addTaskHundler} variant="contained" endIcon={<AddBoxIcon />}>
                        Добавить
                    </Button>

                </Stack>
            </div>
        );
    };
