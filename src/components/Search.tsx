import React from 'react';
import { ToggleButton, ToggleButtonGroup, Stack, TextField } from '@mui/material';

type Props = {
    filter: 'all' | 'active' | 'completed';
    setFilter: React.Dispatch<React.SetStateAction<'all' | 'active' | 'completed'>>;
};

export const Search = ({ filter, setFilter }: Props) => {
    const handleFilterChange = (
        event: React.MouseEvent<HTMLElement>,
        newFilter: 'all' | 'active' | 'completed' | null
    ) => {
        if (newFilter !== null) {
            setFilter(newFilter);
        }
    };

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <TextField
                placeholder="Введите фразу для поиска"
                variant="outlined"
                sx={{ width: 600, marginBottom: 2 }}
            />
            <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={handleFilterChange}
                aria-label="Фильтр задач"
            >
                <ToggleButton value="all" aria-label="Все">
                    Все
                </ToggleButton>
                <ToggleButton value="active" aria-label="Активные">
                    Активные
                </ToggleButton>
                <ToggleButton value="completed" aria-label="Выполненные">
                    Выполненные
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
};
